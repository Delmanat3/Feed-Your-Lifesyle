const { default: axios } = require('axios');


const newFormHandler = async (event) => {
  event.preventDefault();

  //const recipe_id= $('#').val().trim();

  const recDescription = $('#').val().trim();

  if (recipe_id && recDescription) {
    try{

    const choice= {
      
      method:'POST' ,

       url:'/api/recipe',

       timeout: 4000, 

    data:{

    name:this.name,

    description:this.recDescription}
};
   await axios(choice,(req,res)=>{
       console.log(req)
       if(res){
         $(window).replaceWith('/profile')
       }else{
        alertModal('Failed to create project');
       }
     })


  //    <div class="alert alert-dark" role="alert">
  //    A simple dark alert—check it out!
  //  </div>
      
     

      $(window).replaceWith('/homepage');
     
      }finally{
        console.log('people are strange')
      }
    

    }
  }


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/recipe/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

$('.new-project-form').on('submit',newFormHandler)

$('.project-list').on('click', delButtonHandler);
  
  $().ready(()=> {
    var username = $("input.username")
    var email = $("input.email")
    var password = $("input.password")

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var newUser = {
            username: username.val().trim(),
            email: email.val().trim(),
            password: password.val().trim()
        };
        
        if (!newUser.username || !newUser.email || !newUser.password) {
            $("#error-msg").text("Please make sure to fill all above fields!");
            return;
        };

        
        console.log(newUser);
        submitUser(newUser);
        email = "";
        password = "";
    });

    function submitUser(User) {
        $.post("/api/users", User)
            .then(function (res) {
                $('window').replaceWith(res);
                // If there's an error, handle it by throwing up a bootstrap alert
            }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#error-msg").text(err.responseJSON);
        $("#error-msg").fadeIn(500);
    }
});