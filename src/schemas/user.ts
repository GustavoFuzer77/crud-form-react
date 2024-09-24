import { z } from "zod";

export const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .max(11, "Telefone deve ter no máximo 11 dígitos")
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Não é permitido letras em um campo numérico",
    }),
  cpf: z
    .string()
    .min(11, "CPF deve ter 11 dígitos")
    .max(11, "CPF deve ter no máximo 11 dígitos")
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Não é permitido letras em um campo numérico",
    }),
  endereco: z.string().min(1, "Endereço é obrigatório"),
});

// Aqui exporta o tipo para ser usado no resolver do react-hook-form
export type FormUserData = z.infer<typeof formSchema>;