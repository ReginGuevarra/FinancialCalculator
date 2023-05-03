"use strict";

function calculateMortgage() {
    const principal = Number(document.getElementById('mortgage-principal').value);
    const rate = Number(document.getElementById('mortgage-rate').value);
    const term = Number(document.getElementById('mortgage-term').value);

    const monthlyRate = rate / 100 / 12;
    const loanMonths = term * 12;

    const monthlyPayment = (principal * (monthlyRate * (1 + monthlyRate) ** loanMonths) / (( 1 + monthlyRate) ** loanMonths - 1)).toFixed(2);


    const totalPayments = principal * (( 1 + (rate/100) / loanMonths ) ** (loanMonths * term))
    const totalInterest = totalPayments - principal

    console.log('Monthly Payment: $' + monthlyPayment);
    console.log('Total Interest: $' + totalInterest);

    document.getElementById('monthly-payment').innerHTML = 'Monthly Payment: $' + monthlyPayment;

    document.getElementById('total-interest').innerHTML = 'Total Interest: $' + totalInterest;

}

function resetMortgage() {
    document.getElementById('mortgage-principal').value = ''
    document.getElementById('mortgage-rate').value = ''
    document.getElementById('mortgage-term').value = ''

    document.getElementById('monthly-payment').innerHTML = ''
    document.getElementById('total-interest').innerHTML = ''
}


function calculateCD() {
    const initialDeposit = Number(document.getElementById('cd-initial-deposit').value);
    const rate = Number(document.getElementById('cd-interest-rate').value);
    const term = Number(document.getElementById('cd-term').value);

    const percentageRate = rate / 100;
    
    const totalAccountValue = (initialDeposit * (1 + percentageRate / 365) ** (365*term)).toFixed(2)

    console.log(totalAccountValue)

    document.getElementById('total-account-value').innerHTML = 'Total Account Value: $' + totalAccountValue;
}

//document.getElementById('mortgage-submit').addEventListener('click', calculateMortgage)
// document.getElementById('mortgage-submit').onclick = calculateMortgage

function calculateAnnuity() {
    const monthlyPayout = Number(document.getElementById('annuity-monthly-payout').value);
    const rate = Number(document.getElementById('annuity-interest-rate').value);
    const term = Number(document.getElementById('annuity-term').value);

    const monthlyRate = rate / 100 / 12
    const numPayments = term * 12

    const originalDeposit = (monthlyPayout * ( (1 - (1 + monthlyRate) ** -numPayments ) / monthlyRate )).toFixed(2) 

    document.getElementById('annuity-original-deposit').innerHTML = 'Original Deposit: $' + originalDeposit
}