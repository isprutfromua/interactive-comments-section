import { browser } from '$app/env';
import { writable } from 'svelte/store';
import { comments } from '../data';

import type { TypeComment } from '../types/comment';

const storedComments = browser && localStorage?.getItem('comments');
const parsedComments: TypeComment[] =
	storedComments !== null ? JSON.parse(storedComments) : null;

export const commentsStore = writable<TypeComment[]>(
	parsedComments || comments
);

commentsStore.subscribe((value) => {
	browser && localStorage.setItem('comments', JSON.stringify(value));
});

export const commentsDeletePromise = writable<Promise<void>>();
