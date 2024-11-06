// Form2.js
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Box } from '@mui/material';

const Form2 = () => {
  const { control } = useFormContext();

  return (
    <Box>
      <Controller
        name="email2"
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
        name="number"
        control={control}
        rules={{
          required: 'Number is required',
          pattern: {
            value: /^\d+$/,
            message: 'Only numeric values are allowed'
          },
          minLength: {
            value: 10,
            message: 'Number must be at least 10 digits'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Number"
            type="text"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
            margin="normal"
            onBlur={field.onBlur}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
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

export default Form2;
