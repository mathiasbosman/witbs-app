import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {StompSessionProvider} from "react-stomp-hooks";

const WS_URL = 'ws://localhost:8081/ws';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StompSessionProvider url={WS_URL}>
    <App />
    </StompSessionProvider>
  </StrictMode>,
)
