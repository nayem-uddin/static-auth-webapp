import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { personalInfo } from "../lib/tableRows";

export default function Page() {
  return (
    <div>
      <h2>Personal info</h2>
      <TableContainer>
        <Table>
          <TableBody>
            {personalInfo.map((row) => (
              <TableRow key={row.field}>
                <TableCell component="th">{row.field}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
