const infoData = async function(event) {
    event.preventDefault();
  
    const greeting = document.querySelector('#greeting').value;
    const catering = document.querySelector('#catering').value;
    const photographer = document.querySelector('#photographer').value;
    const dj = document.querySelector('#dj').value;
    const kids = document.querySelector('#kids').value;

    await fetch(`/api/info`, {
      method: 'POST',
      body: JSON.stringify({
        greeting,
        catering,
        photographer,
        dj,
        kids
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/home');
  };
  
  document
    .querySelector('#info-form')
    .addEventListener('submit', infoData);
  