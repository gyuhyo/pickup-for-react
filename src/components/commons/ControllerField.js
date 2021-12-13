import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

function ControllerField(props) {
  console.log(props.label + " : " + props.type);
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
  } = props;

  console.log(label + " : " + type);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
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
