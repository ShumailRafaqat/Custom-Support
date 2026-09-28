import React from 'react';
import ReactDOM from 'react-dom/client';
import { Biznexuss } from './App';
import './styles.css';
const path=window.location.pathname.replace(/\/$/, '');
const page=path==='/solutions'?'solutions':path==='/insights'?'insights':path==='/about'?'about':path==='/contact'?'contact':'home';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><Biznexuss page={page}/></React.StrictMode>);
