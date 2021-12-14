import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

function ControllerField(props) {
  const {
    name,
    type = "text",
    control,
    defaultValue = "",
    error,
    size = "small",
    label,
    sx,
    autoFocus = false,
    autoComplete = "off",
    multiline = false,
    rows = 0,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          multiline={multiline}
          rows={rows}
          type={type}
          error={!!error}
          helperText={error ? error?.message : ""}
          size={size}
          sx={sx}
          label={label}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
        />
      )}
    />
  );
}

export default ControllerField;
