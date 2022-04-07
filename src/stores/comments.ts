import { writable } from 'svelte/store';
import { comments } from '../data';

import type { TypeComment } from '../types/comment';

export const commentsStore = writable<TypeComment[]>(comments);
export const commentsDeletePromise = writable<Promise<void>>();
