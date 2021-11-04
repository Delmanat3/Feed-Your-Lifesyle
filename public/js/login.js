
const loginFormHandler = async (event) => {
  event.preventDefault();

const email=$('#email-login').val().trim();
const password=$('#password-login').val().trim();
  
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/recipe');
      // replace / with profile later
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name=$('#username-signup').val().trim();
  const email=$('#email-signup').val().trim();
  const password=$('#password-signup').val().trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
     document.location.replace('/recipe');
    //  change homepage to profile later once profile view is set up
    } else {
      alert(response.statusText);
    }
  }
};


  $('.login-form').on('submit', loginFormHandler);


  $('.signup-form').on('submit', signupFormHandler);
