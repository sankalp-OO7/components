import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, InputAdornment, InputLabel } from '@mui/material';
import { DateRangeOutlined } from '@mui/icons-material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styles for the calendar


const dummyData = [

  { date: '2024-10-15', text: 'Itdddddddddddem number lorem  12' },
];


const DateRangePickerComponent = () => {
  const [dateRange, setDateRange] = useState([new Date('2024-01-01'), new Date('2024-12-31')]);
  const [open, setOpen] = useState(false);
  const [dates, setDates] = useState([new Date(), new Date()]);
  const [curruntlySelectedRangeButtons, setCurruntlySelectedRangeButtons] = useState("");
  const [manualSearch, setManualSearch] = useState(false); // To control manual search

  // Quick range selectors
  const setThisMonth = () => {
    const start = new Date();
    start.setDate(1); // Start of the month
    const end = new Date(start.getFullYear(), start.getMonth() + 1, 0); // End of the month
    setDateRange([start, end]);
    setDates([start, end]);
    setCurruntlySelectedRangeButtons("THIS_MONTH");
    setManualSearch(false); // Resets manual search
  };

  const setPast30Days = () => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 30);
    setDateRange([start, end]);
    setDates([start, end]);
    setCurruntlySelectedRangeButtons("30_DAYS");
    setManualSearch(false); // Resets manual search
  };

  const setPastWeek = () => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 6);
    setDateRange([start, end]);
    setDates([start, end]);
    setCurruntlySelectedRangeButtons("LAST_WEEK");
    setManualSearch(false); // Resets manual search
  };

  const setToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ensure time is set to midnight for accurate comparison
    setDateRange([today, today]);
    setDates([today, today]);
    setCurruntlySelectedRangeButtons("TODAY");
    setManualSearch(false); // Resets manual search
  };

  const setPast90Days = () => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 90);
    setDateRange([start, end]);
    setDates([start, end]);
    setCurruntlySelectedRangeButtons("90_DAYS");
    setManualSearch(false); // Resets manual search
  };

  // Filtering dummy data based on date range
  const filteredData = dummyData.filter((item) => {
    const itemDate = new Date(item.date);
    // Set itemDate time to 0:00:00 for correct comparison
    itemDate.setHours(0, 0, 0, 0);
    return itemDate >= dateRange[0] && itemDate <= dateRange[1];
  });

  // Function to format date to dd-MM-yyyy
  const formatDate = (date) => {
    return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
  };

  const handleDateChange = (date) => {
    if (Array.isArray(date) && date.length === 2) {
      setDates(date);
    }
  };

  const handleSearchByRange = () => {
    setDateRange(dates);
    setManualSearch(true); // Manual search triggered
  };

  return (
    <>
      <Box
        sx={{
          padding: 2,
          maxWidth: 260,
          margin: 'auto',
          border: '2px solid #4caf50', // Green border
          borderRadius: 2, // Rounded corners
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
          bgcolor: '#f5fff4', // Light green background
        }}
      >
        {/* Display Date Range Picker */}
        <Box sx={{ mb: 2, cursor: 'pointer' }}>
          <InputLabel
            sx={{ display: 'flex', fontWeight: 'bolder', margin: '10px', justifyContent: 'center' }}
          >
            Transplant Date Range
          </InputLabel>
          <TextField
            sx={{ cursor: 'pointer', fontSize: '10px' }}
            fullWidth
            value={`${formatDate(dateRange[0])} - ${formatDate(dateRange[1])}`}
            onClick={() => setOpen(!open)}
            InputProps={{
              readOnly: true, // Ensure the input is read-only
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <DateRangeOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Calendar for selecting dates */}
        {open && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Calendar selectRange={true} onChange={handleDateChange} value={dates} />
            </Box>

            {/* Add Search by Range Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Button
                onClick={handleSearchByRange}
                variant="contained"
                color="primary"
                sx={{ fontSize: '10px', fontWeight: 'bolder' }}
              >
                Search by Range
              </Button>
            </Box>

            {/* Quick Range Buttons */}
            <Box
              style={{ fontSize: '10px' }}
              sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}
            >
              <Button
                style={{ margin: '10px', fontSize: '8px', fontWeight: 'bolder' }}
                variant={curruntlySelectedRangeButtons === "THIS_MONTH" ? "contained" : "outlined"}
                onClick={setThisMonth}
                size="small" // Reduce button size
                bgcolor='#45a049'
                sx={curruntlySelectedRangeButtons === "THIS_MONTH" ? { borderColor: 'white', bgcolor: '#4caf50', color: 'white' } :
                  { borderColor: '#4caf50', color: '#4caf50' }}
              >
                👇This Month
              </Button>
              <Button
                variant={(curruntlySelectedRangeButtons === "30_DAYS") ? "contained" : "outlined"}
                onClick={setPast30Days}
                style={{ margin: '10px', fontSize: '8px', fontWeight: 'bolder' }}
                size="small" // Reduce button size
                sx={curruntlySelectedRangeButtons === "30_DAYS" ? { borderColor: 'white', bgcolor: '#4caf50', color: 'white' } :
                  { borderColor: '#4caf50', color: '#4caf50' }}
              >
                Past 30 days
              </Button>
              <Button
                variant={(curruntlySelectedRangeButtons === "90_DAYS") ? "contained" : "outlined"}
                onClick={setPast90Days}
                style={{ margin: '10px', fontSize: '8px', fontWeight: 'bolder' }}
                size="small" // Reduce button size
                sx={curruntlySelectedRangeButtons === "90_DAYS" ? { borderColor: 'white', bgcolor: '#4caf50', color: 'white' } :
                  { borderColor: '#4caf50', color: '#4caf50' }}
              >
                Past 90 days
              </Button>
            </Box>

            <Box
              style={{ fontSize: '10px' }}
              sx={{ mt: 0, display: 'flex', justifyContent: 'space-evenly' }}
            >
              <Button
                variant={(curruntlySelectedRangeButtons === "TODAY") ? "contained" : "outlined"}
                onClick={setToday}
                style={{ margin: '10px', fontSize: '8px', fontWeight: 'bolder' }}
                size="small" // Reduce button size
                sx={curruntlySelectedRangeButtons === "TODAY" ? { borderColor: 'white', bgcolor: '#4caf50', color: 'white' } :
                  { borderColor: '#4caf50', color: '#4caf50' }}
              >
                Today
              </Button>
              <Button
                variant={(curruntlySelectedRangeButtons === "LAST_WEEK") ? "contained" : "outlined"}
                onClick={setPastWeek}
                style={{ margin: '10px', fontSize: '8px', fontWeight: 'bolder' }}
                size="small" // Reduce button size
                sx={curruntlySelectedRangeButtons === "LAST_WEEK" ? { borderColor: 'white', bgcolor: '#4caf50', color: 'white' } :
                  { borderColor: '#4caf50', color: '#4caf50' }}
              >
                👇Last Week
              </Button>
            </Box>
          </>
        )}

        {/* Display filtered data */}
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: 'gray' }}>
          {filteredData.length === 0 ? 'No data for this range' : filteredData.map((item, index) => (
            <div key={index}>
              {item.date} - {item.text}
            </div>
          ))}
        </Typography>
      </Box>
    </>
  );
};

export default DateRangePickerComponent;