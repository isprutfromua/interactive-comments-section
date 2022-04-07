import { browser } from '$app/env';
import { writable } from 'svelte/store';
import { comments } from '../data';

import type { TypeComment } from '../types/comment';

export let commentsStore = writable([]);

if (browser) {
	const storedComments = localStorage?.getItem('comments');
	const parsedComments: TypeComment[] =
		storedComments !== null ? JSON.parse(storedComments) : null;

	const data = parsedComments?.length ? parsedComments : comments;
	commentsStore.set(data);

	commentsStore.subscribe((value) => {
		localStorage.setItem('comments', JSON.stringify(value));
	});
}

export const commentsDeletePromise = writable<Promise<void>>();
