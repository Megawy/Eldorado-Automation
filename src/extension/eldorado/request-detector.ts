import { eldoradoSelectors } from './selectors'; import { parseRequest } from './request-parser';
export function detectRequests(root: ParentNode = document): ReturnType<typeof parseRequest>[] { return Array.from(root.querySelectorAll(eldoradoSelectors.requestCard)).map(parseRequest).filter((request) => request !== undefined); }
