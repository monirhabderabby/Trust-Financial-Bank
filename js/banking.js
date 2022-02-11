// Deposit setup
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputMoney = parseFloat(depositInput.value);
    const depositText = document.getElementById('deposit-field');
    
    const preDepositAmount = parseFloat((depositText.innerText));
    
    const totalDeposited = preDepositAmount + depositInputMoney;
    depositText.innerText = totalDeposited;

    // balance setup
    const balanceText = document.getElementById('balance-field');
     const preBalance = parseFloat(balanceText.innerText);
     const NewTotalBalance = preBalance+depositInputMoney;
     balanceText.innerText = NewTotalBalance;
    depositInput.value = ''
    if(depositInput.value == ''){
        alert('Input money which you want to Deposit')
    }
})
// commentfdf

// Withdraw setup

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputMoney = parseFloat(withdrawInput.value);

    if(withdrawInput.value == ''){
        alert('Input money which you want to Withdraw')
    }
    const withdrawText = document.getElementById('withdraw-field');
    const preWithdrawAmount = parseFloat(withdrawText.innerText);
    const totalWithdraw = preWithdrawAmount+withdrawInputMoney;
    withdrawText.innerText = totalWithdraw;

    // Balance setup
    const balanceText = document.getElementById('balance-field');
    const preBalance = parseFloat(balanceText.innerText);
    const newTotalBalance = preBalance - withdrawInputMoney;
    balanceText.innerText = newTotalBalance;
    withdrawInput.value = ''
    
})