import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppRoute from '@con/app-route.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoute />
  </StrictMode>,
);
