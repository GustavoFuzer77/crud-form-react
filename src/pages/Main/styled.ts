import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import styled from "styled-components";

/* Estilização adicional para tabela */
export const StyledTableContainer = styled(TableContainer)`
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
`;

export const StyledTable = styled(Table)`
  min-width: 650px;
`;

export const StyledTableCell = styled(TableCell)`
  font-size: 1rem;
  font-weight: 500;
  color: #4f4f4f;
`;

export const StyledTableHeader = styled(TableHead)`
  background-color: #f5f5f5;
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: #fafafa;
  }
  &:hover {
    background-color: #f0f4f8;
  }
`;

export const IconButtonStyled = styled(IconButton)`
  color: #5c6bc0;
  &:hover {
    color: #3f51b5;
  }
`;
