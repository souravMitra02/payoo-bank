document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('login-account-number').value;

    const pin = document.getElementById('login-account-pin').value;
    const convertPin = parseInt(pin);

    if(accountNumber.length === 11){
        if(convertPin === 1234){
            window.location.href = 'main.html';
        }
        else{
            alert('Enter Your Valid PIN');
        }
    }
    else{
        alert('Enter Your Valid Account Number');
    }
})