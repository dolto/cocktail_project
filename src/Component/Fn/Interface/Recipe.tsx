interface Ingredients {
    Volume: string,
    Name: string,
    Optional: boolean
};

interface Recipe {
    Name: string,
    Ingredients: Ingredients[],
    Method: string,
    Garnish: string,
    Histoy: string
};

export default Recipe;