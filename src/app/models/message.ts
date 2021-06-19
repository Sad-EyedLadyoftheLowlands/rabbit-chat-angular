export interface Message {
    messageId: number;
    rabbitUserId: number;
    timeSent: Date;
    messageContent: string;
    roomId: number;
}
