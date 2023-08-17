'use client';

import { ModalData } from '@Types';
import CreatePost from '@components/CreatePost/CreatePost';
import { Box, Modal } from '@mui/material';

export default function MainModal({data:{isOpen, setIsOpen}}:ModalData) {
  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal">
        <CreatePost />
      </Box>
    </Modal>
  );
}
