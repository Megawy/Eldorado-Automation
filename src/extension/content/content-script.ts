import { observePage } from './observer'; import { detectRequests } from '../eldorado/request-detector';
observePage(() => { detectRequests(); });
