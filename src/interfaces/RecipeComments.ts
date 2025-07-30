export interface RecipeComment {
	id: number;
	username: string;
	content: string;
	note: number; // entre 1 et 5 probablement
	createdAt: Date;
	recipeId: number;
}
