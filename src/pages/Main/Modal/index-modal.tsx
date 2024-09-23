import { useState } from "react";
import { Modal, Box, Button, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { FormSection } from "../../../styles/usualStyles";
import InputField from "../../../components/Input/input-text";
import Form from "../../../components/Form/index-form";
import { createPortal } from "react-dom";

interface IModalProps {
  schema: any;
  onSubmit: any;
}

export function ModalFieldsUser({ schema, onSubmit }: IModalProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Adicionar Usuário
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box>
          {/* {createPortal( */}
          <FormSection>
            <div
              className="header-form"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 id="modal-title">Adicionar usuário</h1>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </div>
            <Form schema={schema} onSubmit={onSubmit}>
              <InputField name="nome" label="Nome completo" />
              <InputField name="email" label="Digite o E-mail" type="email" />
              <InputField name="cpf" label="CPF" />
              <InputField name="telefone" label="Digite o telefone" />
              <InputField name="endereco" label="Logradouro" />
            </Form>
          </FormSection>
          {/* ,
            document.getElementById("modal-root") as HTMLElement */}
          {/* ) */}
        </Box>
      </Modal>
    </>
  );
}
