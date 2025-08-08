import { Dialog, DialogActions, Modal } from "@mui/material";
import Title from "./promptMessage/title";
import Content from "./promptMessage/content";
export default function Prompt({ message, open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Dialog open={open} fullWidth>
        <Title />
        <Content message={message} />
        <DialogActions>
          <button
            type="submit"
            onClick={handleClose}
            className="btn btn-primary float-end"
          >
            Ok
          </button>
        </DialogActions>
      </Dialog>
    </Modal>
  );
}
