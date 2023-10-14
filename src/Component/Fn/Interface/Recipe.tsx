interface Ingredients {
    Volume: string,
    Name: string,
    Optional: boolean
};

interface Recipe {
    ID : "IBA_ 0001",
	Image : "Cocktail/Alexander.webp",
    Name: string,
    Ingredients: Ingredients[],
    Method: string,
    Garnish: string,
    Histoy: string
};

export type {Recipe, Ingredients};