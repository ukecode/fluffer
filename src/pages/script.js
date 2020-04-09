
function checkUrl(url, name) {
    const firstCheck = url.match(/herokuapp.com/)
    if (firstCheck) {
        axios.post('https://fluffer.herokuapp.com/apps/register', {
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

async function sendData() {
    let url = document.getElementById('url').value;
    let name = document.getElementById('name').value;
    const check = await checkGet();
    if (check) {
        checkUrl(url, name);
    } else {
        Swal.fire({
            background: "rgba(195, 246, 255, 0.9)",
            position: 'center',
            icon: 'error',
            color: 'white',
            title: "We were unable to receive a return for your application's GET route.",
            showConfirmButton: true,
            timer: 2500
        })
    }
}

//------- tentativa de checagem antes de cadastro -------

async function checkGet() {
    const url = document.getElementById('url').value;
    var load = document.getElementsByClassName('load-wrapp')
    load[0].style.display = 'block'
    console.log(url)
    let res = '';
    try {
        res = await axios.get(url).then((e) => {
            load[0].style.display = 'none';
            return true
        }).catch((err) => {
            load[0].style.display = 'none';
            return false
        });
    } catch (err) {
        console.log('eita')
    }
    return res;
}

async function loadApps() {
    const apps = await axios.get('https://fluffer.herokuapp.com/apps/list').then((e) => {
        return e.data
    }).catch((err) => {
        console.log(err);
    })
    let menu = document.getElementsByClassName('scrollmenu')

    apps.map((e) => {
        var novo = document.createElement('a')
        novo.appendChild(document.createTextNode(e.name));
        menu[0].appendChild(novo)
    });

}
loadApps()



