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

let dropdownArr = $('.dropdown-option').toArray();

console.log(dropdownArr)

dropdownArr.Each((el) => {
    // console.log(el)
    $(el).click(e => {
        e.preventDefault()
        $.get('/api/recipe/' + $(el).attr("data-value"))
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            if (err) console.log(err)
        })
    })
})

// const resData = await axios.get(queryUrl)

// catch (err) {
//     console.log(err);
//     res.status(500).json(err);