interface Ingredients {
    Volume: string,
    Name: string,
    Optional: boolean
};

interface Recipe {
    ID : string,
	Image : string,
    Name: string,
    Kor_name: string,
    Taste : string,
    Ingredients: Ingredients[],
    Method: string,
    Garnish: string,
    Histoy: string
};

export type {Recipe, Ingredients};