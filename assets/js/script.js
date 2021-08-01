var email = document.getElementById('email')
email.addEventListener('blur', function() {
    if(email.value == ""){
        email.style.borderColor = 'hsl(354, 100%, 66%)'
        msgerror.style.display = 'block'
    }else if(!email.checkValidity()){
        email.style.borderColor = 'hsl(354, 100%, 66%)'
        msgerror.style.display = 'block'
    }else{
        email.style.borderColor = 'hsl(0, 0%, 59%)'
        msgerror.style.display = 'none'
    }
})

var msgerror = document.getElementById('msg-error')

var btn = document.getElementById('btn')
btn.addEventListener('click', function() {
    if(email.value == ""){
        email.style.borderColor = 'hsl(354, 100%, 66%)'
        msgerror.style.display = 'block'
        alert('Email inválido! Tente Novamente')
    }else if(!email.checkValidity()){
        email.style.borderColor = 'hsl(354, 100%, 66%)'
        msgerror.style.display = 'block'
        alert('Email inválido! Tente Novamente')
    }else{
        email.style.display = 'hsl(0, 0%, 59%)'
        msgerror.style.display = 'none'
        window.location.href = './assets/html/cadastro.html'
    }

})