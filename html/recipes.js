let recipeInfo = {}
let count = false

let recipeToJSON = () => {
  recipeInfo.recipeName = document.getElementById('recipeName').innerHTML;
  recipeInfo.recipeDescription = document.getElementById('recipeDescription').innerHTML;
  recipeInfo.recipeImage = document.getElementById('recipeImage').src;

  // get each ingredient
  var ingredientList = []
  var liTags = document.getElementById('ingredientList').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    ingredientList.push(liTags[key].innerHTML);
  }
  recipeInfo.ingredients = ingredientList;


  //get each instruction
  var instructionList = []
  var liTags = document.getElementById('instructionList').getElementsByTagName('li');
  for (var key of Object.keys(liTags)) {
    instructionList.push(liTags[key].innerHTML);
  }
  recipeInfo.instructions = instructionList;

  console.log("hi")
  outputJSON(recipeInfo);
}

let twoPartRecipeToJSON = () => {
    recipeInfo.recipeName = document.getElementById('recipeName').innerHTML;
    recipeInfo.recipeDescription = document.getElementById('recipeDescription').innerHTML;
    recipeInfo.recipeImage = document.getElementById('recipeImage').src;
  
    // get each ingredient
    var fillingIngredientList = []
    var liTags = document.getElementById('partOneIngredientList').getElementsByTagName('li');
    for (var key of Object.keys(liTags)) {
        fillingIngredientList.push(liTags[key].innerHTML);
    }
    recipeInfo.fillingIngredients = fillingIngredientList;
  
     // get each ingredient
     var crustIngredientList = []
     var liTags = document.getElementById('partTwoIngredientList').getElementsByTagName('li');
     for (var key of Object.keys(liTags)) {
        crustIngredientList.push(liTags[key].innerHTML);
     }
     recipeInfo.crustIngredients = crustIngredientList; 
  
    //get each instruction
    var instructionList = []
    var liTags = document.getElementById('instructionList').getElementsByTagName('li');
    for (var key of Object.keys(liTags)) {
      instructionList.push(liTags[key].innerHTML);
    }
    recipeInfo.instructions = instructionList;

    console.log("hi")
    outputJSON(recipeInfo);
  }

let outputJSON = (recipeInfo) => {
    count = !count;
    if (count){
        document.getElementById("json").textContent = JSON.stringify(recipeInfo, undefined, 2);
        document.getElementById("pre-formatter").style.padding = "16px 0px";
        document.getElementById("pre-formatter").style.borderBottom = "4px solid black";
        document.getElementById("pre-formatter").style.borderTop = "4px solid black";
    }   else    {
        document.getElementById("json").textContent = "";
        document.getElementById("pre-formatter").style.padding = "0px 0px";
        document.getElementById("pre-formatter").style.borderBottom = "0px solid black";
        document.getElementById("pre-formatter").style.borderTop = "0px solid black";
    }
   
}

let addIngredient = () => {
    let ul = document.getElementById("ingredientList");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    var liTags = document.getElementById('ingredientList').getElementsByTagName('li');
    var tags = Array.from(liTags);
    var count = 1;
    tags.forEach(function(element) {
        count = count + 1;
    });
    li.id = "ingredient" + count.toString();
    ul.appendChild(li);
    li.addEventListener('click', this.apply(onClick='strikeThrough(id)'))
}

let addCrustIngredient = () => {
    let ul = document.getElementById("partTwoIngredientList");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newCrustIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
  }

let addFillingIngredient = () => {
    let ul = document.getElementById("partOneIngredientList");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newFillingIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
  }

const addInstruction = () => {
    const ol = document.getElementById("instructionList");
    const li = document.createElement("li");
    const ingredient = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(ingredient));
    ol.appendChild(li);
}
const strikeThrough = (id) => {
    document.getElementById(id).classList.toggle("used");
}
