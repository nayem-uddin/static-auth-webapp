import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { personalInfo } from "../lib/tableRows";
import { cookies } from "next/headers";
import { extractedToken } from "../lib/utils";
export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const decodedToken = extractedToken(token.value);
  return (
    <div>
      <h2>Personal info</h2>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th">User ID</TableCell>
              <TableCell>{decodedToken.userId}</TableCell>
            </TableRow>
            {/* {personalInfo.map((row) => ( */}
            <TableRow>
              <TableCell component="th">Username</TableCell>
              <TableCell>{cookieStore.get("username").value}</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
