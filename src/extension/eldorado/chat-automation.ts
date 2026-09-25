export function fillChatReply(input: HTMLTextAreaElement, message: string): void { input.value = message; input.dispatchEvent(new Event('input', { bubbles: true })); }
