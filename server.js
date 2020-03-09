let button = document.querySelector('#getData');
button.addEventListener('click', getData);
console.log(button);
console.log('hi');


function getData(){
    let logUsername = document.getElementById('username').value;
    let logPassword = document.getElementById('password').value;
    console.log(logUsername);
    console.log(logPassword);
    fetch('https://my-json-server.typicode.com/Mat869/fetchAPI-server/db')
        .then((res) => {return res.json()})
        .then((data) => {
            let login = 'Username or password are not correct'
            data.users.forEach((users) => {
                const { id, username, password} = users
                console.log(username);
                console.log(password);
                if(logUsername == username && logPassword == password) {
                    login = 'Redirecting to homepage'
                }
                document.getElementById('result').innerHTML = login;
            });
        });
}




