import React, { ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { Button } from "@mui/material";

interface FormProps {
  onSubmit: SubmitHandler<FormData>;
  children: ReactNode;
  schema: ZodSchema;
}

const Form: React.FC<FormProps> = ({ schema, onSubmit, children }) => {
  // useForm do react-hook-form com o zod resolver
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Enviar
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
