import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// Dummy Event Data
const eventsData = [
  { title: 'Thermodynamics', type: 'Academics', description: 'Solve 3 thermodynamics problems...', date: '2024-10-04' },
  { title: 'Physics', type: 'Exams', description: 'Solve 99 thermodynamics problems...', date: '2024-10-04' },
  { title: 'Hostel Fees Due', type: 'Alerts', description: 'Hostel fees of Year II, Semester II due', date: '2024-10-05' },
  { title: 'Semester I - Final Exam', type: 'Exams', description: 'Final Exam Dates: Oct 12th - Oct 21st', date: '2024-10-12' },
  { title: 'Christmas Holiday', type: 'Holidays', description: 'Christmas Break begins', date: '2024-10-25' },
  { title: 'Campus Event', type: 'Events', description: 'Campus sports event on Saturday', date: '2024-10-10' },
  { title: 'Math Homework', type: 'Academics', description: 'Submit math homework on algebra', date: '2024-10-02' },
  { title: 'Fire Drill', type: 'Alerts', description: 'Mandatory fire drill for all students', date: '2024-10-07' },
  { title: 'Guest Lecture on AI', type: 'Events', description: 'Attend the guest lecture on AI at the auditorium', date: '2024-10-14' },
  { title: 'Physics Lab', type: 'Academics', description: 'Complete the physics lab report', date: '2024-10-18' },
  { title: 'Midterm Exam', type: 'Exams', description: 'Midterm exam for Semester 1', date: '2024-10-20' },
  { title: 'Library Fine', type: 'Alerts', description: 'Pay your overdue library fine', date: '2024-10-22' },
  { title: 'Diwali Holiday', type: 'Holidays', description: 'Diwali celebrations across campus', date: '2024-10-27' },
  { title: 'Volunteering Event', type: 'Events', description: 'Join the campus clean-up volunteering event', date: '2024-10-30' },
  { title: 'Seminar on Cloud Computing', type: 'Events', description: 'Attend the seminar on cloud computing', date: '2024-10-31' }
];

// Event types with colors
const eventTypes = {
  Academics: '#ff9800',
  Alerts: '#f44336',
  Events: '#9c27b0',
  Exams: '#ff5722',
  Holidays: '#03a9f4',
};

// Utility function: Sort and filter events
const filterAndSortEvents = (events, activeTypes = []) => {
  const today = new Date().toISOString().split('T')[0];

  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

  const todayEvents = sortedEvents.filter(event => event.date === today);
  const upcomingEvents = sortedEvents.filter(event => event.date > today);
  const pastEvents = sortedEvents.filter(event => event.date < today);
  pastEvents.reverse();
  
  let filteredEvents = [...todayEvents, ...upcomingEvents, ...pastEvents];

  if (activeTypes.length > 0) {
    filteredEvents = filteredEvents.filter(event => activeTypes.includes(event.type));
  }

  return filteredEvents;
};

// Component to render Event Type buttons
const EventTypeButtons = ({ activeTypes, onTypeToggle, onReset }) => (
  <Box display="flex" justifyContent="center" mb={2} flexWrap="wrap">
    {Object.keys(eventTypes).map((key) => (
      <Button
        key={key}
        onClick={() => onTypeToggle(key)}
        sx={{
          backgroundColor: activeTypes.includes(key) ? eventTypes[key] : 'gray',
          border: activeTypes.includes(key) ? '2px solid black' : 'white',
          color: 'white',
          m: 1,
          width: '100px',
          '&:hover': { backgroundColor: eventTypes[key] },
        }}
      >
        {key}
      </Button>
    ))}
    <Button
      onClick={onReset}
      sx={{
        backgroundColor: 'blue',
        color: 'white',
        width: '150px',
        '&:hover': { backgroundColor: 'darkblue' },
      }}
    >
      Reset Filter
    </Button>
  </Box>
);

// Component to render the list of events
const EventList = ({ events }) => (
  <Box maxHeight="400px" overflow="auto">
    {events.length > 0 ? (
      events.map((event, index) => (
        <Paper
          key={index}
          sx={{
            padding: '16px',
            marginBottom: '12px',
            borderLeft: event.title === 'No events for this particular date' ? 'none' : `8px solid ${eventTypes[event.type] || 'gray'}`,
            borderRadius: '4px',
          }}
        >
          <Typography variant="h5">{event.title}</Typography>
          {event.description && <Typography variant="body2">{event.description}</Typography>}
          {event.date && <Typography variant="caption">{new Date(event.date).toLocaleDateString()}</Typography>}
        </Paper>
      ))
    ) : (
      <Typography>No events found for this category.</Typography>
    )}
  </Box>
);


// Component to render the Calendar
const EventCalendar = ({ selectedDate, onChange, events, activeTypes, onDateClick }) => {
  // Render event colors on calendar tiles
  const getTileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventsForDay = events.filter(
        event => new Date(event.date).toDateString() === date.toDateString()
      );
      if (eventsForDay.length > 0) {
        const filteredEvents = activeTypes.length > 0 ? eventsForDay.filter(event => activeTypes.includes(event.type)) : eventsForDay;
        return (
          <Box display="flex" justifyContent="center">
            {filteredEvents.map((event, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: eventTypes[event.type],
                  borderRadius: '50%',
                  width: '8px',
                  height: '8px',
                  marginLeft: '2px',
                }}
                onClick={() => onDateClick(date)}
              />
            ))}
          </Box>
        );
      }
    }
    return null;
  };

  return (
    <Calendar value={selectedDate} onChange={onChange} tileContent={getTileContent} />
  );
};

// Main Component: NotificationCalendar
const NotificationCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTypes, setActiveTypes] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);

  // Update the filtered events on type selection or reset
  useEffect(() => {
    setFilteredEvents(filterAndSortEvents(eventsData, activeTypes));
  }, [activeTypes]);

  // Toggle calendar visibility
  const toggleCalendar = () => setCalendarVisible(!calendarVisible);

  // Handle event type toggle (multiple selections)
  const handleTypeToggle = (type) => {
    setActiveTypes(prevTypes =>
      prevTypes.includes(type) ? prevTypes.filter(t => t !== type) : [...prevTypes, type]
    );
    setEventsForSelectedDate([]); // Clear date-based filter on new type filter
  };

// Handle date click on the calendar
const handleDateClick = (date) => {
  const eventsForDate = eventsData.filter(
    event => new Date(event.date).toDateString() === date.toDateString()
  );
  if (eventsForDate.length > 0) {
    setEventsForSelectedDate(eventsForDate);
  } else {
    setEventsForSelectedDate([{ title: 'No events for this particular date', description: '', date: '' }]);
  }
  setActiveTypes([]); // Clear type filters on new date selection
};


  // Handle filter reset
  const handleReset = () => {
    setActiveTypes([]);
    setFilteredEvents(filterAndSortEvents(eventsData));
    setEventsForSelectedDate([]);
  };
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  
  // In your component
  const formattedDate = formatDate(selectedDate);
  
  return (
    <Box 
      p={4} 
      sx={{
        width: '25%', 
        position: 'fixed', 
        right: 0, 
        top: 0, 
        height: '100vh', 
        overflowY: 'auto', 
        backgroundColor: '#f9f9f9', // Light background color
        borderRadius: '8px', // Rounded corners
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Shadow for depth
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        {formattedDate}
      </Typography>

      {/* Toggle Calendar Button */}
      <Box textAlign="center" mb={4}>
        <Button
          onClick={toggleCalendar}
          sx={{ 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            '&:hover': { backgroundColor: '#388E3C' },
            borderRadius: '20px', // Rounded button corners
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', // Button shadow
          }}
        >
          <CalendarTodayIcon sx={{ mr: 1 }} />
          Toggle Calendar
        </Button>
      </Box>

      {/* Calendar Component */}
      {calendarVisible && (
        <Box 
          mb={4} 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          flexDirection="column"
          sx={{
            padding: '16px',
            border: '1px solid #ccc', // Border around calendar
            borderRadius: '8px', // Rounded corners
            backgroundColor: '#fff', // White background for the calendar
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Shadow for calendar
          }}
        >
          <EventCalendar
            selectedDate={selectedDate}
            onChange={setSelectedDate}
            events={eventsData}
            activeTypes={activeTypes}
            onDateClick={handleDateClick}
          />
        </Box>
      )}

      {/* Event Type Filters */}
      <EventTypeButtons activeTypes={activeTypes} onTypeToggle={handleTypeToggle} onReset={handleReset} />

      {/* Event List */}
      <Box>
        <Typography variant="h5" gutterBottom>
          {eventsForSelectedDate.length > 0 ? 'Events for selected date:' : 'Filtered events:'}
        </Typography>
        <EventList events={eventsForSelectedDate.length > 0 ? eventsForSelectedDate : filteredEvents} />
      </Box>
    </Box>
  );
};

export default NotificationCalendar;
