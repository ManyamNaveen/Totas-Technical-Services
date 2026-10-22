import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Listen on all network interfaces and accept any Host header, so phones on the
  // same Wi-Fi and tunnels like ngrok can open the dev site. Dev/preview only.
  server: { host: true, port: 5173, allowedHosts: true },
  preview: { host: true, port: 4173, allowedHosts: true },
});
