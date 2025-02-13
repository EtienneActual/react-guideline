import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { LoginForm } from '@/components/LoginForm';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export const LoginModal = ({ open, onClose }: LoginModalProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Connexion</DialogTitle>
      <DialogContent>
        <LoginForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
};
