'use client';

import CreatePost from '@components/CreatePost/CreatePost';
import { Box, Modal } from '@mui/material';

export default function MainModal() {
  return (
    <Modal
      open={true}
      onClose={() => false}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal">
        <CreatePost />
      </Box>
    </Modal>
  );
}
