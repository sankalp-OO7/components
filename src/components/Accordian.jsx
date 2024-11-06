import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { red } from '@material-ui/core/colors';

const OrganDonationForm = () => {
  // State for form data and errors
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    bloodType: '',
    surgeries: '',
    consent: '',
  });
  const [errors, setErrors] = useState({
    personalInfoError: false,
    medicalHistoryError: false,
    consentError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate each section of the form
    const personalInfoError = !formData.fullName || !formData.dob;
    const medicalHistoryError = !formData.bloodType || !formData.surgeries;
    const consentError = !formData.consent;

    // Set errors to state
    setErrors({
      personalInfoError,
      medicalHistoryError,
      consentError,
    });

    // If no errors, submit the form
    if (!personalInfoError && !medicalHistoryError && !consentError) {
      console.log('Form submitted:', formData);
      // Submit form logic here
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: '62px' }}>
      {/* Accordion for Personal Information */}
      <Accordion
        style={{ backgroundColor: errors.personalInfoError ? red[100] : 'green' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" style={{ color: errors.personalInfoError ? 'red' : 'inherit' }}>
            Personal Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            fullWidth
            label="Full Name with surname"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            margin="normal"
            error={errors.personalInfoError && !formData.fullName}
            helperText={errors.personalInfoError && !formData.fullName ? 'Required' : ''}
          />
          <TextField
            fullWidth
            label="Date of Birth"
            name="dob"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.dob}
            onChange={handleChange}
            margin="normal"
            error={errors.personalInfoError && !formData.dob}
            helperText={errors.personalInfoError && !formData.dob ? 'Required' : ''}
          />
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Medical History */}
      <Accordion
        style={{ backgroundColor: errors.medicalHistoryError ? red[100] : 'green' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" style={{ color: errors.medicalHistoryError ? 'red' : 'inherit' }}>
            Medical History
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            fullWidth
            label="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            margin="normal"
            error={errors.medicalHistoryError && !formData.bloodType}
            helperText={errors.medicalHistoryError && !formData.bloodType ? 'Required' : ''}
          />
          <TextField
            fullWidth
            label="Previous Surgeries"
            name="surgeries"
            value={formData.surgeries}
            onChange={handleChange}
            margin="normal"
            error={errors.medicalHistoryError && !formData.surgeries}
            helperText={errors.medicalHistoryError && !formData.surgeries ? 'Required' : ''}
          />
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Consent */}
      <Accordion
        style={{ backgroundColor: errors.consentError ? red[100] : 'green' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" style={{ color: errors.consentError ? 'red' : 'inherit' }}>
            Consent
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            fullWidth
            label="Organ Donation Consent"
            name="consent"
            value={formData.consent}
            onChange={handleChange}
            margin="normal"
            error={errors.consentError && !formData.consent}
            helperText={errors.consentError && !formData.consent ? 'Required' : ''}
          />
        </AccordionDetails>
      </Accordion>

      <Button type="submit" variant="contained" color="sucess" style={{ marginTop: '20px', fontWeight:'bolder'}}>
        Submit Form
      </Button>
    </form>
  );
};

export default OrganDonationForm;
