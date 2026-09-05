let usersArray = []

let loginForm = document.getElementById('loginForm')
let divsContainer = document.querySelector('.divsContainer')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let userObject = {
        email: email,
        password: password
    }

    usersArray.push(userObject)

    console.log('submitted')
    console.log(userObject)
    console.log(usersArray)

    let newDiv = document.createElement('div')
    let h4 = document.createElement('h4')
    let h5 = document.createElement('h5')


    newDiv.appendChild(h4)
    newDiv.appendChild(h5)

    newDiv.classList.add('alert', 'alert-primary')

    divsContainer.appendChild(newDiv)

    loginForm.reset()
})