const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElemet = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let massage = []
    if (name.value === '' || name.value === null) {
        massage.push('name is required')
    }

    if (password.value.length <= 6) {
        massage.push('password must be longer than 7 characters')
    }

    if (password.value.length >= 20) {
        massage.push('password must be less than 25 characters')
    }
    
    if (massage.length > 0 ) {
        e.preventDefault()
        errorElemet.innerText = massage.join(',')
    }
})
