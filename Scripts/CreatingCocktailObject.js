class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}

class Cocktail {
    constructor(name, method, image) {
        this.name = name;
        this.ingredients = new Array();
        this.method = method;
        this.image = image;
    }
}

var ingredients = new Array();

function addIngredient() {
    var name = document.getElementById("IName").value;
    var amount = document.getElementById("IAmount").value;

    var ingredient = new Ingredient(name, amount);
    ingredients.push(ingredient);
    createCocktail();

    document.getElementById("IName").value = "";
    document.getElementById("IAmount").value = "";
}

var cocktail;
function createCocktail() {
    cocktail = null;
    var name = document.getElementById("CName").value;
    var method = document.getElementById("MethodDesc").value;
    var image = "CocktailPhotos\\" + document.getElementById("ImName").value;

    cocktail = new Cocktail(name, method, image);
    cocktail.ingredients = ingredients;

    preview()
}

function preview() {
    var name = document.getElementById("PreviewCocktailName");
    var image = document.getElementById("PreviewImage");
    var ingredientsList = document.getElementById("PreviewIngredientList");
    var method = document.getElementById("PreviewCocktailMethod");

    name.innerHTML = "";
    image.innerHTML = "";
    ingredientsList.innerHTML = "";
    method.innerHTML = "";

    image.src = cocktail.image;

    name.innerHTML += cocktail.name;
    method.innerHTML += cocktail.method;

    for (i in cocktail.ingredients) {
        ingredientsList.innerHTML += "<li>" + cocktail.ingredients[i].name + ", " + cocktail.ingredients[i].amount + "</li>";
    }
}

function reset() {
    cocktail = null;
    ingredients = null;
}