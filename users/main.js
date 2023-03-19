let usersArr = document.getElementsByClassName('usersArr') [0];

// let usersArr = document.createElement('div');
// usersArr.classList.add('users');
// userContain.appendChild(usersArr);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => users.forEach(user => {
        let userDiv = document.createElement('div')
        userDiv.classList.add('user');
        let a = document.createElement('a');
        a.innerText = `${user.id} ${user.name}`;
        a.href = `../user-details/user-details.html?data=${JSON.stringify(user)}`;


        usersArr.appendChild(userDiv)
        userDiv.appendChild(a)


    }))


































































