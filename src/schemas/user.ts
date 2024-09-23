import { z } from "zod";

export const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  cpf: z.string().min(1, "CPF é obrigatório"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
});

// aqui exporta o tipo para por no  resolver do schema do use-hook-form
export type FormData = z.infer<typeof formSchema>;
