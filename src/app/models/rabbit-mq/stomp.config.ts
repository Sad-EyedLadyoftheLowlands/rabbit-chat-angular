import {InjectableRxStompConfig} from '@stomp/ng2-stompjs';

export const AuditRxStompConfig: InjectableRxStompConfig = {
    /*
    Which server?
    */
    brokerURL: 'ws://localhost:15674/ws',

    /*
    Headers
    Typical keys: login, passcode, host we must provide non-generic to avoid
    "login failed - access_refused (user must access over loopback)"
    don't forget to change for deployment en prod
    */
    connectHeaders: {
        login: 'dylanbaird',
        passcode: 'N3!lY0ng',
        'client-id': 'adt-angular'
    },

    /*
    How often to heartbeat?
    Interval in milliseconds, set to 0 to disable
    Incoming typical value 0 - disabled
    Outgoing typical value 20000 - every 20 seconds
    */
    heartbeatIncoming: 0, //
    heartbeatOutgoing: 0, //

    /*
    Wait in milliseconds before attempting auto reconnect
    Set to 0 to disable
    Typical value 5000 (5 seconds)
    */
    reconnectDelay: 200,

    /*
    Will log diagnostics on console
    It can be quite verbose, not recommended in production
    Skip this key to stop logging to console
    */
    // debug: (msg: string): void => { console.log(new Date(), msg); }
};
