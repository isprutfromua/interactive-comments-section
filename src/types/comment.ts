import type { TypeUser } from './user';

export type TypeComment = {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: TypeUser;
	replies?: Array<TypeComment> | null;
	replyingTo?: string;
};
