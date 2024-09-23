import React from "react";
import { useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormData } from "../../schemas/user";

interface InputFieldProps {
  name: keyof FormData;
  label: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = "text",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <TextField
      {...register(name)}
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      margin="normal"
      error={!!errors[name]}
      helperText={errors[name]?.message}
    />
  );
};

export default InputField;
