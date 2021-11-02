const { default: axios } = require('axios');
const showMe =  (result)=>{

    console.log(result);

    var row = $("<row>");
    $("#results").append(row);

     for(var i = 0; i < result.length; i++){
      //fuckarubaduck
      var recipeItem = result[i].recipe;

      var favButton = $("<a>")
      var colDiv = $("<div>");
      var cardDiv = $("<div>");
      var cardBlock = $("<div>");
      var title = $("<h4>");
      var img = $("<img>");
      var dietLabels = $("<p>");
      var fullRecipe = $("<a>");

      //Add attributes to elements
      favButton.attr({
        name: recipeItem.label,
        class: "",
      });

      colDiv.attr({
        class: "",
      });

      cardDiv.attr({
        class: "",
      });
// <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
      img.attr({
        src: recipeItem.image,
        alt: recipeItem.label,
        class: ""
      })

      cardBlock.attr({
        class: "",
        style: ""
      });

      title.attr({
        class: "",
        style: ""
      })

      title.text(recipeItem.label);


      dietLabels.attr({
        style: ""
      })

      console.log(recipeItem.dietLabels);
      dietLabels.text("Diet Labels : " + recipeItem.dietLabels.toString());

      fullRecipe.attr({
        href: recipeItem.url,
        class: "",
        target: "_blank"
      });

      fullRecipe.text("Full Recipe")

      colDiv.append(cardDiv);
      cardDiv.append(img);
      cardDiv.append($("<hr>"))
      cardBlock.append(title);
      cardBlock.append($("<hr>"));
      cardBlock.append(dietLabels);
      cardBlock.append($("<hr>"));
      cardBlock.append(fullRecipe);
      cardDiv.append(cardBlock)
        $("#results").append(colDiv);
     }

  };

// loader function
$().ready(()=>{
    $('#recipe-search-btn').on('click',(event)=>{
        event.preventDefault();
        $("#results").empty();
        // for loader spinny thing that does the stuff while things do the thing
          let container = $('<div>');
              container.attr({
                class: "container"
              });
          let row = $('<div>');
              row.attr({class: "col-md-12"});
          let loadDiv = $('<div>');
              loadDiv.attr({id:"loader"});
              row.append(loadDiv);
              container.append(row);
          $('#results').append(container);
          //ends
          //starts the recipe of it all
          let foods = {
            foods : [],
            health : '',
            diet: '',
            calories: 1000
          };

          let searchedRecipe = $("#searchRecipe").val();
          let searchedHealth=$('#health-param').val();
          let searchedDiet=$('diet-param').val();

          axios.get("/api/users").done((result)=>{
            if (typeof result === "object"){// if axios call worked get the user id and associtate recipe query
              let obj = {
                userId: result.user,
                foods: searchedRecipe,
                health: searchedHealth,
                diet:searchedDiet

              }
              axios.post("/api/history",obj, (err,res) => {if(!res) throw err});// logs userid to history/recipe? model how does that work 
            }});
              console.log(searchedRecipe);
              foods.foods = searchedRecipe.split(" ");
              console.log(foods);
            })})

