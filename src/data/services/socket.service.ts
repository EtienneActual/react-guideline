import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_SOCKET_BASE_URL);

export default socket;
