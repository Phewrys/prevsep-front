
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { AuthProvider } from './context/AuthContext'

export default function App() {  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}