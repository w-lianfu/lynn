import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppRoot from '@con/app-root';
import AppRoute from '@con/app-route';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot><AppRoute /></AppRoot>
  </StrictMode>,
);
