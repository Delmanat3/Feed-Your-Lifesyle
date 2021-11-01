const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    $(window).replaceWith('/');
  } else {
    alert(response.statusText);
  }
};

$('#logout').on('click', logout);
