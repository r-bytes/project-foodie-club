const RecipeItem = () => {
    enum MeatAmount {
        "SMALL" = 0.400,
        "MEDIUM" = 0.700,
        "LARGE" = 1.0
    }

    const recipe : {
        name: string,
        cuisine: string, 
        meat: boolean,
        amountKg: MeatAmount.MEDIUM
        fish: boolean, 
        vegetarian: boolean,
        ingredients: string[],
        prepTime: string, 
        servings: number, 
        cookingTime: string, 
        totaltime: string
    } = {
        name: "Soto Ayam",
        cuisine: "Indonesia",
        meat: true,
        amountKg: MeatAmount.MEDIUM,
        fish: false,
        vegetarian: false,
        ingredients: [
            "sjalot",
            "garlic",
            "salt",
            "peper",
            "laos",
            "salam",
            "jahe",
            "kunjit",
            "kemiri",
            "sereh",
            "kunjit blad",
            "egg",
            "patato",
            "rice"
        ],
        prepTime: "1 hour",
        servings: 5,
        cookingTime: "2 hour",
        totaltime: "3 hour"
    }

    console.log(recipe)

    return (
        <div className="border min-h-sceen">
            RecipeItem
        </div>
    )
}
export default RecipeItem