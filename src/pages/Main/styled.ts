import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import styled from "styled-components";
import colors from "../../styles/colors";

export const Text = styled.p`
  font-size: 2rem;
  color: ${colors.lightTextGray};
`;

export const CenterDiv = styled.div`
  align-items: centrer;
  width: 100%;
  display: flex;
  justify-content: center;
`;

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
  color: ${colors.lightTextGray};
`;

export const StyledTableHeader = styled(TableHead)`
  background-color: ${colors.lightWhite200};
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: ${colors.lightWhite200};
  }
  &:hover {
    background-color: ${colors.lightWhite};
  }
`;

export const IconButtonStyled = styled(IconButton)`
  color: ${colors.lightBlue};
  &:hover {
    color: ${colors.mediumBlue};
  }
`;
