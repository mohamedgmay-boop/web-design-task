let usersArray = [] 
let loginForm = document.getElementById('loginForm')

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

    loginForm.reset()