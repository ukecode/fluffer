
function checkUrl(url, name) {
    const firstCheck = url.match(/herokuapp.com/)
    if (firstCheck) {
        axios.post('http://localhost:3000/apps/register', {
            url,
            name
        }).then((e) => {
            Swal.fire({
                background: "rgba(195, 246, 255, 0.9)",
                position: 'center',
                icon: 'success',
                title: 'Application successfully registered!',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch((err) => {
            Swal.fire({
                background: "rgba(195, 246, 255, 0.9)",
                position: 'center',
                icon: 'error',
                title: 'Failed to register, change the name of the App or check the url',
                showConfirmButton: false,
                timer: 2500
            })
        })
    } else {
        Swal.fire({
            background: "rgba(195, 246, 255, 0.9)",
            position: 'center',
            icon: 'error',
            color: 'white',
            title: 'Your url does not belong to a Heroku app!',
            showConfirmButton: false,
            timer: 2500
        })
    }
}

function sendData() {
    let url = document.getElementById('url').value;
    let name = document.getElementById('name').value;
    checkUrl(url, name);
}
