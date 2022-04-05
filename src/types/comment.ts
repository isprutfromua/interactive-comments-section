import type { TypeUser } from './user';

export type TypeComment = {
	id: number | string;
	content: string;
	createdAt: string;
	score: number;
	user: TypeUser;
	replies?: Array<TypeComment>;
	replyingTo?: string;
};
