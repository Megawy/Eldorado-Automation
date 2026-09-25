export function emitPageEvent(name: string, detail: unknown): void { window.dispatchEvent(new CustomEvent(name, { detail })); }
