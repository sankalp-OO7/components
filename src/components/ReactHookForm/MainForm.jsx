// MainForm.js
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Form1 from './Form1';
import Form2 from './Form2';

const MainForm = () => {
  const methods = useForm({ mode: 'onBlur' }); // `onBlur` mode to validate on field blur
  const { handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: errors.email1 || errors.date ? 'error.main' : 'default',
            }}
          >
            <Typography sx={{ color: errors.email1 || errors.date ? 'white' : 'text.primary' }}>
              Form 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Form1 />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: errors.email2 || errors.number || errors.password ? 'error.main' : 'default',
            }}
          >
            <Typography sx={{ color: errors.email2 || errors.number || errors.password ? 'white' : 'text.primary' }}>
              Form 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Form2 />
          </AccordionDetails>
        </Accordion>

        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default MainForm;
