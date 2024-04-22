import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import './shared/css/index.css';
import './shared/css/reset.css';
import { MantineProvider } from '@mantine/core';

import { Router } from './routes/Router';
import { theme } from './shared/theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
