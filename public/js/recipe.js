// const { default: axios } = require('axios');


// $().ready(()=>{

// $('#recipeSearch').on('click',(event)=>{
// event.preventDefault();
// $("#result").empty();

//         // for loader spinny thing that does the stuff while things do the thing
       
//           //starts the recipe of it all

//           let foods = {
//             foods : [],
//             health : '',
//             diet: '',
//             calories: 1000
//           };

//           let searchedRecipe = $("#searchRecipe").val();

//         //   let searchedHealth=$('#health-param').val();

//         //   let searchedDiet= $('diet-param').val();

//           axios.get("/api/users/").done((result)=>{
//             if (typeof result === "object"){// if axios call worked get the user id and associtate recipe query
//               let obj = {

//                 userId: result.user,

//                 foods: searchedRecipe,

        
//               }

//               axios.post("/api/****/",obj, (err,res) => {if(!res) throw err});// logs userid to history/recipe? model how does that work 
//             }});

//               console.log(searchedRecipe);

//               foods.foods = searchedRecipe.split(" ");

//               console.log(foods);
//             })})

//         //     let container = $('<div>');
//         //     container.attr({
//         //       class: "container"
//         //     });
//         // let row = $('<div>');
//         //     row.attr({class: "col-md-12"});
//         // let loadDiv = $('<div>');
//         //     loadDiv.attr({id:"loader"});
//         //     row.append(loadDiv);
//         //     container.append(row);
//         // $('#results').append(container);
//         // //ends