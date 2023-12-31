//step - 1: add event listener to the deposit button.
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step - 2: Get the deposit amount from the deposit field
    const depositField = document.getElementById('input-deposit')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step - 3: get the deposit total amount.
    const depositText = document.getElementById('text-deposit');
    const previousDepositTotalString = depositText.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    //step - 4: add numbers to set the total amount.
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositText.innerText = currentDepositTotal;

    //step - 5: get balance current total.
    const balanceTotalElement = document.getElementById('text-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    //step - 6: calculate current total balance.
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total.
    balanceTotalElement.innerText = currentBalanceTotal;

    //step - 7: clear the deposit field.
    depositField.value = '';
    
})