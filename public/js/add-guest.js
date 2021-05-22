async function newFormHandler(event) {
    event.preventDefault();
    const guestName = document.querySelector('#guest_name').value;
    const foodChoice = document.querySelector('#food').value;

    const response = await fetch(`/api/guests`, {
      method: 'POST',
      body: JSON.stringify({
        guestName,
        foodChoice
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/guests');
    } else {
      alert('Failed to add dish');
    }
  }
  
  document.querySelector('.new-guest-form').addEventListener('submit', newFormHandler);
    