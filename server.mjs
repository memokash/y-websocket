import * as http from 'http';
import WebSocket, { WebSocketServer } from 'ws';
import { setupWSConnection } from 'y-websocket/bin/utils.js';

const port = process.env.PORT || 1234;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('🧠 Yjs WebSocket Server (v3.0) is running');
});

const wss = new WebSocketServer({ server });

wss.on('connection', setupWSConnection);

server.listen(port, () => {
  console.log(`✅ Yjs WebSocket server running on port ${port}`);
});
