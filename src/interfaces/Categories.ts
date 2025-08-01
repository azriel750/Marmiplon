export type Categories = {
	id: number;
	name: string;
	description: string;
};

export interface Dessert {
  id: number;
  name: string;
  description?: string; // optionnel
  imageUrl?: string; // optionnel
}
