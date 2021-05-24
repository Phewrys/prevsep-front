
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Footer from './components/Footer'

export default function App() {  
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}