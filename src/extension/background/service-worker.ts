import { subscribe } from '../messaging/message-bus';
subscribe((message) => { console.info('Eldorado Automation message received:', message.type); });
