import type { TypeUser } from '../types/user';
import { readable } from 'svelte/store';
import { user } from '../currentUser';

export let currentUser = readable<TypeUser>(user);
