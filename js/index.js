document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('email-input').value;
    const userPassword = document.getElementById('input-password').value;
    if(userEmail == 'raj021159@gmail.com' && userPassword == '1234'){
        window.location.href = 'banking.html'
    }
})


