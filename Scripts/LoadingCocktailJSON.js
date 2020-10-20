function preload() {
	readCocktailJSONFile();
}

function readCocktailJSONFile()
{
	//referrence the display area where all cards will be displayed
	displayAreaDiv = document.getElementById("CocktailDisplayArea");

	//read the JSON File and send it to the console for debugging
	console.log(DATA);
	obj = DATA;

	for (i = 0; i < obj.Cocktails.length; i++) {
		//-------------=======Variable Creation=======-------------//
		//Create variables for all the informtaion stored in each cocktail object
		cocktailName = obj.Cocktails[i].Name;
		cocktailIngredientNames = [];
		cocktailIngredientAmounts = [];
		//store all ingredient names and amounts in arrays to be accessed via indicies later
		for (j = 0; j < obj.Cocktails[i].Ingredients.length; j++) {
			cocktailIngredientNames.push(obj.Cocktails[i].Ingredients[j].Name);
			cocktailIngredientAmounts.push(obj.Cocktails[i].Ingredients[j].Amount);
		}
		//continue storing information to be referenced
		cocktailDesc = obj.Cocktails[i].Description;
		cocktailMethod = obj.Cocktails[i].Method;
		cocktailImage = obj.Cocktails[i].Image;
		cocktailImageCredit = obj.Cocktails[i].ImageCredits;
		//create new element IDs based on cocktail names, as each cocktail should have a unique name
		cardDivID = cocktailName + ' Card'
		imageDivID = cocktailName + ' Image';
		textBoxDivID = cocktailName + ' Text Box';
		ingredientsListID = cocktailName + ' List'
		//create the card div and a variable to store it for referrencing
		displayAreaDiv.innerHTML += '<div class="Card" id="' + cardDivID + '"></div>';
		CardDiv = document.getElementById(cardDivID);

		//create other divs for image and text
		CardDiv.innerHTML += '<div class="ImageHolder" id="' + imageDivID + '"></div>';
		CardDiv.innerHTML += '<div class="TextBox" id="' + textBoxDivID + '"></div>';

		//make reference to those divs for use later
		imageDiv = document.getElementById(imageDivID);
		textBoxDiv = document.getElementById(textBoxDivID);

		//-------------=======Information Displaying=======-------------//
		//place the image in the image div
		imageDiv.innerHTML += '<img src="' + cocktailImage + '" />'

		//place information in textbox div
		textBoxDiv.innerHTML += '<h1>' + cocktailName + '</h1>';
		textBoxDiv.innerHTML += '<p>' + cocktailDesc + '</p>';
		textBoxDiv.innerHTML += '<h2>Ingredients</h2>';

		//create list of ingredients
		textBoxDiv.innerHTML += '<ul id="' + ingredientsListID + '"></ul>';
		//make reference to that list
		ingredientList = document.getElementById(ingredientsListID);
		//put ingredients in the list
		for (j = 0; j < obj.Cocktails[i].Ingredients.length; j++) {
			ingredientList.innerHTML += '<li>' + cocktailIngredientNames[j] + ', ' + cocktailIngredientAmounts[j] + '</ul>';
		}

		textBoxDiv.innerHTML += '<h2>Method</h2>';
		textBoxDiv.innerHTML += '<p>' + cocktailMethod + '</p>';


		textBoxDiv.innerHTML += '<br/><p>' + cocktailImageCredit + '</p>';
	}
}