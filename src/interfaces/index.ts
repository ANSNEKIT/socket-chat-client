export interface ISendMessage {
    user: {
        room?: string;
        nickname: string;
    }
    message: string   
    socketId: string;
}