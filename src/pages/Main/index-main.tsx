import {
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Edit, Delete, Close } from "@mui/icons-material";
import { IUser } from "../../interfaces/global";
import { useQueryHook } from "../../hooks/useQueryHook";
import { Body, Container, Header, Section } from "../../styles/usualStyles";
import { ModalFieldsUser } from "./ModalUsuario/index-modal";
import { Text } from "./styled";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formSchema } from "../../schemas/user";
import { api } from "../../config/axios";
import { useGlobalStore } from "../../store/globalStore";
import { useState } from "react";

type TConcatUserType = IUser & { id: number };

export default function Main() {
  const queryClient = useQueryClient();

  const { setUser } = useGlobalStore.getState();
  const [openToast, setOpenToast] = useState(false);

  const handleToast = () => {
    setOpenToast(!openToast);
  };

  const fetchUsers = async () => {
    const { data } = await api.get("/users");
    return data;
  };

  const deleteUser = async (userId: number) => {
    await api.delete(`/users/${userId}`);
  };

  const { data, getError, getLoading } = useQueryHook<TConcatUserType>({
    fetch: fetchUsers,
    queryKey: "users",
  });

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      handleToast();
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  function ConditionalRender() {
    if (getError) return getError;
    if (getLoading) return getLoading;
    if (!data) return <Text>Nenhum usuário cadastrado</Text>;

    const handleDelete = (id: number) => {
      mutation.mutate(id);
    };

    const handleEdit = (user: TConcatUserType) => {
      setUser(user);
    };

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: TConcatUserType) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.nome}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="edit" onClick={() => handleEdit(row)}>
                    <Edit />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(row.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <Container>
      <Snackbar
        open={openToast}
        autoHideDuration={6000}
        onClose={handleToast}
        message="Usuário deletado com sucesso!"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleToast}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />
      <Section>
        <Header>
          <h2>Listagem de Usuários</h2>
          <ModalFieldsUser schema={formSchema} />
        </Header>
        <Body>
          <ConditionalRender />
        </Body>
      </Section>
    </Container>
  );
}
