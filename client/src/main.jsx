import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext.jsx';
import { PostProvider } from "./context/PostContext.jsx";
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <PostProvider>
      <App />
    </PostProvider>
    </AuthProvider> 
    </BrowserRouter>
  </StrictMode>
);