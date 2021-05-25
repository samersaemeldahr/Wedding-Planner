const questionsData = async function(event) {
    event.preventDefault();
  
    const firstName = document.querySelector('#firstName').value;
    const spouseName = document.querySelector('input[name="spouse-name"]').value;
    const weddingDate = document.querySelector('input[name="wedding-date"]').value;
    const venueName = document.querySelector('input[name="venue-name"]').value;
    const venueLocation = document.querySelector('input[name="venue-location"]').value;

    await fetch(`/api/questions/`, {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        spouseName,
        weddingDate,
        venueName,
        venueLocation
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/home');
  };
  
  document
    .querySelector('#questions-form')
    .addEventListener('submit', questionsData);
  