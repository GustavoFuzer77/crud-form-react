import { type ReactNode } from "react";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { Button } from "@mui/material";

interface FormProps {
  onSubmit: SubmitHandler<FormData>;
  children: ReactNode;
  schema: ZodSchema;
  initialValues: Record<string, any>;
}

function Form({ schema, onSubmit, children, initialValues }: FormProps) {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: initialValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Salvar
        </Button>
      </form>
    </FormProvider>
  );
}

export default Form;
