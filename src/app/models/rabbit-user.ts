export interface RabbitUser {
    rabbitUserId: number;
    username: string;
    password: string;
    alias: string;

    /*
    Not implemented on server.
     */
    token?: string;
    refreshToken?: string;
    roomLink?: any;
    friends?: any;
}
