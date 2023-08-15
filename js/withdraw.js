//step - 1 : add event handler with the withdraw button.
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step 2 get the withdraw amount from the withdraw input field.
  //also make sure to convert the input into a number by using parseFloat.

  const withdrawField = document.getElementById("input-withdraw");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
   //step - 7: clear the input field
   withdrawField.value = "";
  if(isNaN(newWithdrawAmount)){
    alert('Please enter valid value');
    return;
  }

  //get previos withdraw total.
  const WithdrawTotalElement = document.getElementById("text-withdraw");
  const previousWithdrawTotalString = WithdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //step - 5 : get the previous balance total.
  const balanceTotalElement = document.getElementById("text-balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

 

  if (newWithdrawAmount > previousBalanceTotal) {
    alert(`You can't withdraw more than your account balance`);
    return;
  }
  //step - 4: calculate total withdraw amount.
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  //step - 4.5 set total withdraw amount.
  WithdrawTotalElement.innerText = currentWithdrawTotal;

  //step - 6: calculate new balance total
  //step - 6.5 : set the new balance total.
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
