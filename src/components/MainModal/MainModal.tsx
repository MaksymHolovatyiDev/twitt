'use client';

import { Box, Modal } from '@mui/material';

export default function MainModal({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open:boolean)=>void;
}) {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)} className="">
      <Box className="modal">{children}</Box>
    </Modal>
  );
}
