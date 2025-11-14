import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MiniQuiz from './miniQuiz.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MiniQuiz />
  </StrictMode>,
);
