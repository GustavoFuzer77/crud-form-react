import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { Edit, Delete } from "@mui/icons-material";
import { IUser } from "../../interfaces/global";
import { useQueryHook } from "../../hooks/useQueryHook";
import {
  Body,
  Container,
  FormSection,
  Header,
  Section,
} from "../../styles/usualStyles";
import { ModalFieldsUser } from "./Modal/index-modal";

type TConcatUserType = IUser & { id: number };

export default function Main() {
  function onSubmit(data: any) {
    console.log(data);
  }

  // const fetchUsers = async () => {
  //   const { data } = await axios.get("http://localhost:3001/users");
  //   return data;
  // };

  // const { data, getError, getLoading } = useQueryHook({
  //   fetch: fetchUsers,
  //   queryKey: "users",
  // });

  // if (getError) return getError;
  // if (getLoading) return getLoading;

  const data: TConcatUserType[] = [
    {
      id: 1,
      nome: "João",
      email: "email@tdp.com",
      cpf: "123.456.789-00",
      telefone: "123456789",
      endereco: "Rua A, 123",
    },
    {
      id: 2,
      nome: "Maria",
      email: "maria@tdp.com",
      cpf: "987.654.321-00",
      telefone: "987654321",
      endereco: "Rua B, 456",
    },
    {
      id: 3,
      nome: "Pedro",
      email: "pedro@tdp.com",
      cpf: "456.789.123-00",
      telefone: "456789123",
      endereco: "Rua C, 789",
    },
  ];

  return (
    <Container>
      <Section>
        <Header>
          <h2>Listagem de Usuarios</h2>
          <ModalFieldsUser schema={{}} onSubmit={onSubmit} />
        </Header>
        <Body>
          {!true ? (
            <h1>Opss, nenhum dado encontrado</h1>
          ) : (
            <>
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
                      <TableRow
                        key={row.id}
                        // sx={{
                        //   "&:last-child td, &:last-child th": { border: 0 },
                        // }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell>{row.nome}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell align="right">
                          <IconButton aria-label="edit">
                            <Edit />
                          </IconButton>
                          <IconButton aria-label="delete">
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </Body>
      </Section>
    </Container>
  );
}
