import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@/data/contexts/ThemeContext';
import { Header } from '@/components/Header';
import { CoinTable } from '@/components/CoinTable';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Header />
      <Container sx={{ mt: 4 }}>
        <CoinTable />
      </Container>
    </ThemeProvider>
  );
}
export default App;
