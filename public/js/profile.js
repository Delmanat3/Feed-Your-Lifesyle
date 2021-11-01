const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      $(window).replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
  
  $(document).ready(function () {
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
                window.location.replace(res);
                // If there's an error, handle it by throwing up a bootstrap alert
            }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#error-msg").text(err.responseJSON);
        $("#error-msg").fadeIn(500);
    }
});