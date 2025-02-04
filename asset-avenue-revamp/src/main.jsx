import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WalletContextProvider from "/src/components/WalletProvider";

createRoot(document.getElementById('root')).render(
  <WalletContextProvider>
    <App />
  </WalletContextProvider>,
)


