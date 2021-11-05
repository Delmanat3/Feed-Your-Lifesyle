
console.log("val drop")

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
        `)

        })
            // res.render('recipe')
        }).then(()=>{  
            
            let arr1=[];
           
            $('.btnGrab').click($('.BtnToGrab'),
             (e)=>{    
             e.preventDefault()
             arr1.push($(e.target).data("value"))
             localStorage.setItem('saved', JSON.stringify(arr1))
           
            })
             
            }).then(()=>{
             $('#boot').on('click', (e)=>{
                let histor=$('#history')
                e.preventDefault()
                 var mode = JSON.parse(localStorage.getItem('saved'))
                 console.log(mode)
                 for(let i=0; i < mode.length; i++){
                   histor.append(mode[i])
                 }
                 
                }) 
            
             } )
        .catch(err => {
            if (err) console.log(err)
            
        })
    })
})

