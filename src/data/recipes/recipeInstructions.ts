import { RecipeInstruction } from "../../interfaces/RecipeInstruction";

export const recipeInstructions: RecipeInstruction[] = [
	{ id: 1, step: 1, description: "Grillez le pain.", recipeId: 101 },
	{
		id: 2,
		step: 2,
		description: "Ajoutez les tomates et le basilic.",
		recipeId: 101,
	},
	{ id: 3, step: 3, description: "Arrosez d'huile d'olive.", recipeId: 101 },
	{ id: 4, step: 1, description: "Coupez les lÃ©gumes.", recipeId: 102 },
	{
		id: 5,
		step: 2,
		description: "Ajoutez la feta et les olives.",
		recipeId: 102,
	},
	{ id: 6, step: 3, description: "Assaisonnez.", recipeId: 102 },
	{ id: 7, step: 1, description: "Faites cuire les pÃ¢tes.", recipeId: 201 },
	{
		id: 8,
		step: 2,
		description: "MÃ©langez avec les Å“ufs, la pancetta et le parmesan.",
		recipeId: 201,
	},
	{ id: 9, step: 1, description: "PrÃ©chauffez le four.", recipeId: 202 },
	{
		id: 10,
		step: 2,
		description: "Badigeonnez le poulet d'herbes et de beurre.",
		recipeId: 202,
	},
	{ id: 11, step: 3, description: "Faites rÃ´tir.", recipeId: 202 },
	{
		id: 12,
		step: 1,
		description: "Trempez les biscuits dans le cafÃ©.",
		recipeId: 301,
	},
	{
		id: 13,
		step: 2,
		description: "Alternez avec la crÃ¨me au mascarpone.",
		recipeId: 301,
	},
	{ id: 14, step: 3, description: "Saupoudrez de cacao.", recipeId: 301 },
	{ id: 15, step: 1, description: "Ã‰talez la pÃ¢te.", recipeId: 302 },
	{
		id: 16,
		step: 2,
		description: "Ajoutez les pommes sucrÃ©es et la cannelle.",
		recipeId: 302,
	},
	{ id: 17, step: 3, description: "Faites cuire.", recipeId: 302 },
];
