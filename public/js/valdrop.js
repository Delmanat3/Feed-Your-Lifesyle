console.log("val drop")
//to do: change keto string to be coming from the dropdown

//main is only talking this file. Even listener is on dropdown menu click.
/*
 $.el.table(
 $.el.tr(
   $.el.th('first name'),
   $.el.th('last name')),
 $.el.tr(
   $.el.td('Joe'),
   $.el.td('Stelmach'))
).appendTo(document.body);

 */

// .each() grabs every node element that has dropdown-option class of dropdown-optoin (everything in dropdown menu). 
//el.attr("data-value") grabs the data-value attribute from the dropdown choice that was clicked. Response is then coverted and console logged.

// const recipeBtn=$('#recipesBtn')

// recipeBtn.on('click')
let recipeList=$('#recipeList')

let dropdownArr = $('.dropdown-option').toArray()
// console.log(dropdownArr)
dropdownArr.forEach((el) => {
    // console.log(el)
    $(el).click(e => {
        e.preventDefault()
        $.get('/api/recipe/' + $(el).attr("data-value"))
        .then(res => {
            console.log(res)
            recipeList.empty()
        res.map((item,i) => {
            recipeList.append(`
        <div class="card justify-content-center" style="width: 18rem;">
            <img class="card-img-top" src="${item.recipe.image}" alt="Card image cap">
            <div class="card-body btnGrab">
            <a id="a${i}" href=${item.recipe.url}><h4>${item.recipe.label}</h4></a>
            <button data-value=${item.recipe.url} class="BtnToGrab btn btn-primary" id="${i}">Save</button>
            </div>
          </div>
        `
        )
        })
            // res.render('recipe')
        }).then(()=>{  
            
            let histor=$('#history')

            let arr1=[]
           
            $('.btnGrab').click($('.BtnToGrab'),
             (e)=>{    
             e.preventDefault()
             arr1.push($(e.target).data("value"))
             console.log(arr1)
             histor.append(arr1)
            })
             
            }
            
        )
        .catch(err => {
            if (err) console.log(err)
            
        })
    })
})
