import { EldoradoRequest } from '../../models/request.model';
export type ExtensionMessage = { type: 'REQUEST_DETECTED'; request: EldoradoRequest } | { type: 'SETTINGS_UPDATED' } | { type: 'GET_STATUS' };
