import { useEffect, useState, useRef, useCallback } from 'react';
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import socket from '@/data/services/socket.service';
import { useUserStore } from '@/data/stores/user.store';
import { random } from '@/utils/helpers/random.helper';

const randomId = random(0, 10);

const SocketPage = () => {
  const { user } = useUserStore();
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const username = user?.username ?? randomId;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConnect = useCallback(() => {
    console.log('Connected to Socket.IO server');
    setMessages((prev) => [...prev, 'Connected to chat server']);
  }, []);

  const handleMessage = useCallback((msg: string) => {
    setMessages((prev) => [...prev, msg]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // no-op if already connected
    socket.connect();

    socket.on('connect', handleConnect);
    socket.on('chat message', handleMessage);

    return () => {
      socket.off('connect', handleConnect);
      socket.off('chat message', handleMessage);
      socket.disconnect();
    };
  }, [handleConnect, handleMessage]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      socket.emit('chat message', `${username}: ${inputMessage}`);
      setInputMessage('');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Socket.IO Chat Demo
        </Typography>

        <Paper
          elevation={1}
          sx={{
            height: '60vh',
            mb: 2,
            overflow: 'auto',
            bgcolor: 'grey.50',
            p: 2,
          }}
        >
          <List>
            {messages.map((msg, index) => (
              <Box key={index}>
                <ListItem>
                  <ListItemText
                    primary={msg}
                    sx={{
                      '& .MuiListItemText-primary': {
                        wordBreak: 'break-word',
                      },
                    }}
                  />
                </ListItem>
                {index < messages.length - 1 && <Divider />}
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </List>
        </Paper>

        <Box component="form" onSubmit={sendMessage} sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            variant="outlined"
            size="small"
            sx={{ flex: 1 }}
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />} disabled={!inputMessage.trim()}>
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SocketPage;
