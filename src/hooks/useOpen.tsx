import { useState } from "react";

export const useOpen = (): [
  open: boolean,
  handleOpen: () => void,
  handleClose: () => void
] => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    document.body.classList.add("lock");
  };

  const handleClose = () => {
    setOpen(!open);
    document.body.classList.remove("lock");
  };

  return [open, handleOpen, handleClose];
};
