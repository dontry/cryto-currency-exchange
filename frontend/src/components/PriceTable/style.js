import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  display: table;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid rgba(224, 224, 224, 1);
`;

export const StyledTableHead = styled.thead`
  display: table-header-group;
`;

export const StyledTableRow = styled.tr`
  color: inherit;
  display: table-row;
  outline: none;
  vertical-align: middle;
`;

export const StyledTableHeadCell = styled.th`
  display: table-cell;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
  line-height: 1.3125rem;
  padding: 14px 40px 14px 16px;
  font-size: 0.875rem;
  text-align: ${props => props.textAlign || "center"};
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  &:last-child {
    padding-right 40px;
  }
`;

export const StyledTableBody = styled.tbody`
  display: table-row-group;
`;

export const StyledTableCell = styled.td`
  display: table-cell;
  padding: 14px 40px 14px 16px;
  font-size: 0.875rem;
  text-align: ${props => props.textAlign || "center"};
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  letter-spacing: 0.01071em;
  vertical-align: inherit;

  &:last-child {
    padding-right 40px;
  }
`;
