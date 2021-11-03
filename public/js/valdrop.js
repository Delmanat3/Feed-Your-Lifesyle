
//to do: change keto string to be coming from the dropdown

$('#recipeSearch').on('click',(e)=>{
e.preventDefault()
//const valTee=()=>{
$.get('/api/recipe/' + 'keto').then(
(res)=>{
    console.log(res)
}
)
//}
//valTee('keto')
console.log('keto');
})
//const resData = await axios.get(queryUrl)
