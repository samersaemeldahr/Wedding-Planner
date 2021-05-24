const userId = document.querySelector('input[name="questions"]').value;

const editQuestions = async function (event) {
    event.preventDefault();

    const firstName = document.querySelector('#firstNameEdit').value;
    const spouseName = document.querySelector('#spouseNameEdit').value;
    const weddingDate = document.querySelector('#weddingDateEdit').value;
    const venueName = document.querySelector('#venueNameEdit').value;
    const venueLocation = document.querySelector('#venueLocationEdit').value;

    await fetch(`/api/questions/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({
            firstName,
            spouseName,
            weddingDate,
            venueName,
            venueLocation
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.location.replace('/home');
};

document
    .querySelector('#edit-questions')
    .addEventListener('submit', editQuestions);
