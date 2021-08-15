export interface SimpleSignInRequest {
    username: string;
    /*
    Should eventually stop passing the password as a string.
     */
    password: string;
}
