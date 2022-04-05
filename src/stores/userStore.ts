import { readable } from 'svelte/store';
import { user } from '../currentUser';

type TypeImage = {
	png: string;
	webp: string;
};

type User = {
	image: TypeImage;
	username: string;
};

export type { User };

export let currentUser = readable<User>(user);
