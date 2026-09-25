export interface EldoradoRequest { id: string; game: string; product: string; buyerName: string; quantity: number; receivedAt: string; status: 'pending' | 'handled' | 'ignored'; }
