import type { User } from 'src/stores/userStore';

export type TypeComment = {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: User;
	replies?: Array<TypeComment>;
};
