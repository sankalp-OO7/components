// Form1.js
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Box } from '@mui/material';

const Form1 = () => {
  const { control } = useFormContext();

  return (
    <Box>
      <Controller
        name="email1"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email address'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
            margin="normal"
            onBlur={field.onBlur}
          />
        )}
      />
      <Controller
        name="date"
        control={control}
        rules={{ required: 'Date is required' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
            margin="normal"
            onBlur={field.onBlur}
          />
        )}
      />
    </Box>
  );
};

export default Form1;
