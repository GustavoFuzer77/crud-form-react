import { useEffect, useState } from "react";
import { Modal, Box, Button, IconButton, Snackbar } from "@mui/material";
import { Close } from "@mui/icons-material";
import { FormSection } from "../../../styles/usualStyles";
import InputField from "../../../components/Input/input-text";
import Form from "../../../components/Form/index-form";
import { ZodSchema } from "zod";
import { api } from "../../../config/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGlobalStore } from "../../../store/globalStore";
import { DefaultValues } from "react-hook-form";

interface IModalProps {
  schema: ZodSchema;
}

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  maxWidth: "40rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export function ModalFieldsUser({ schema }: IModalProps) {
  const [openModal, setOpenModal] = useState(false);
  const [openToast, setOpenToast] = useState({ open: false, message: "" });
  const queryClient = useQueryClient();

  const getUserToEdit = useGlobalStore.getState().user;
  const { setUser } = useGlobalStore.getState();

  useEffect(() => {
    const unsubscribe = useGlobalStore.subscribe(() => {
      const user = useGlobalStore.getState().user;
      if (user) {
        setOpenModal(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    setUser(null);
  };

  const postUser = async (newUser: any) => {
    const response = await api.post("/users", newUser);
    return response.data;
  };

  const patchUser = async (user: any) => {
    console.log(`/users/${getUserToEdit?.id}`);
    const response = await api.patch(`/users/${getUserToEdit?.id}`, user);
    return response.data;
  };

  const mutationCreate = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setOpenToast({ open: true, message: "Usuário cadastrado com sucesso!" });
      handleClose();
    },
    onError: (error) => {
      setOpenToast({ open: true, message: "Erro ao cadastrar usuário!" });
      console.error("Erro ao cadastrar usuário:", error);
    },
  });

  const mutationEdit = useMutation({
    mutationFn: patchUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setOpenToast({ open: true, message: "Usuário editado com sucesso!" });
      handleClose();
    },
    onError: (error) => {
      setOpenToast({ open: true, message: "Erro ao editar usuário!" });
      console.error("Erro ao editar usuário:", error);
    },
  });

  const handleSubmit = async (data: any) => {
    try {
      const zodValidation = schema.parse(data);

      if (getUserToEdit) {
        setUser(null);
        mutationEdit.mutate(data);
        return;
      }

      mutationCreate.mutate(zodValidation);
    } catch (err) {
      console.error("Erro na validação do formulário", err);
    }
  };

  return (
    <>
      <Snackbar
        open={openToast.open}
        autoHideDuration={6000}
        onClose={() => setOpenToast({ open: false, message: "" })}
        message={openToast.message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setOpenToast({ open: false, message: "" })}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Adicionar usuário
      </Button>
      <Modal
        open={openModal}
        onClose={() => {
          handleClose();
        }}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={boxStyle}>
          <FormSection>
            <div className="header-form">
              <h1 id="modal-title">
                {getUserToEdit ? "Editar" : "Adicionar"} usuário
              </h1>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </div>
            <Form
              schema={schema}
              onSubmit={handleSubmit}
              initialValues={
                (getUserToEdit as DefaultValues<FormData>) ||
                ({
                  nome: "",
                  email: "",
                  cpf: "",
                  telefone: "",
                  endereco: "",
                } as DefaultValues<FormData>)
              }
            >
              <InputField name="nome" label="Nome completo *" />
              <InputField name="email" label="Digite o E-mail *" />
              <InputField name="cpf" label="CPF *" />
              <InputField name="telefone" label="Telefone *" />
              <InputField name="endereco" label="Logradouro *" />
            </Form>
          </FormSection>
        </Box>
      </Modal>
    </>
  );
}
