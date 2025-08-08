import { DialogContent, DialogContentText } from "@mui/material";

export default function Content({ message }) {
  return (
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        {message}
      </DialogContentText>
    </DialogContent>
  );
}
