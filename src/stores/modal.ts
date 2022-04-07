import { writable } from 'svelte/store';

export let modalIsOpened = writable<boolean>(false);
