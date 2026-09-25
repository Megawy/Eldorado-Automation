import { ExtensionMessage } from './messages';
export type MessageHandler = (message: ExtensionMessage) => void;
const handlers = new Set<MessageHandler>();
export function subscribe(handler: MessageHandler): () => void { handlers.add(handler); return () => handlers.delete(handler); }
export function publish(message: ExtensionMessage): void { handlers.forEach((handler) => handler(message)); }
