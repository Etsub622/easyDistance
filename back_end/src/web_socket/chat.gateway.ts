import { WebSocketGateway, SubscribeMessage, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected: ', client.id);
  }

  @SubscribeMessage('sendMessage')
  handleMessage(client: Socket, payload: any): void {
    this.server.to(payload.groupId).emit('newMessage', payload);
  }

  @SubscribeMessage('joinGroup')
  handleJoinGroup(client: Socket, groupId: string): void {
    client.join(groupId);
  }
}
