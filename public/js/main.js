const { default: axios } = require('axios');



// const showMe =  (result)=>{

//     console.log(result);

//     var row = $("<row>");
//     $("#results").append(row);

//      for(var i = 0; i < result.length; i++){
//       //fuckarubaduck
//       var recipeItem = result[i].recipe;

//       var favButton = $("<a>")
//       var colDiv = $("<div>");
//       var cardDiv = $("<div>");
//       var cardBlock = $("<div>");
//       var title = $("<h4>");
//       var img = $("<img>");
//       var dietLabels = $("<p>");
//       var fullRecipe = $("<a>");

//       //Add attributes to elements

//       favButton.attr({

//         name: recipeItem.label,

//         class: "",

//       });

//       colDiv.attr({
//         class: "",
//       });

//       cardDiv.attr({
//         class: "",
//       });
// // <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
//       img.attr({
//         src: recipeItem.image,
//         alt: recipeItem.label,
//         class: ""
//       })

//       cardBlock.attr({
//         class: "",
//         style: ""
//       });

//       title.attr({
//         class: "",
//         style: ""
//       })

//       title.text(recipeItem.label);


//       dietLabels.attr({
//         style: ""
//       })

//       console.log(recipeItem.dietLabels);
//       dietLabels.text("Diet Labels : " + recipeItem.dietLabels.toString());

//       fullRecipe.attr({
//         href: recipeItem.url,
//         class: "",
//         target: "_blank"
//       });

//       fullRecipe.text("Full Recipe")

//       colDiv.append(cardDiv);
//       cardDiv.append(img);
//       cardDiv.append($("<hr>"))
//       cardBlock.append(title);
//       cardBlock.append($("<hr>"));
//       cardBlock.append(dietLabels);
//       cardBlock.append($("<hr>"));
//       cardBlock.append(fullRecipe);
//       cardDiv.append(cardBlock)
//         $("#results").append(colDiv);
//      }

//   };

// loader function

