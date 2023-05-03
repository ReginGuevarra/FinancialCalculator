const principal = 53000
const interestRate = 7.625
const loanYears = 15


function calculateMortgage(principal, interestRate, loanYears) {
    const monthlyRate = ( interestRate / 100 ) / 12
    const loanMonths = loanYears * 12
    
    const monthlyPayment = principal * (monthlyRate * (1+monthlyRate) ** loanMonths)  / ((1 + monthlyRate) ** loanMonths - 1)

    return monthlyPayment
}

//monthly payment
//console.log(calculateMortgage(principal, interestRate, loanYears))

//total interest
//console.log((calculateMortgage(principal, interestRate, loanYears) * 12 * loanYears) - principal)



///// CD 

const initialDeposit = 0
const cdRate = 0
const cdYears = 0

function calculateCD(initialDeposit, cdRate, cdYears) {
    const rate = cdRate / 100 
    console.log(rate)

    return initialDeposit * (1 + rate / 365) ** (365*cdYears)
}

console.log(calculateCD(1000, 1.75, 5))



///annuity

function calculateAnnuity(monthlyPayout, expectedInterest, years) {
    const rate = expectedInterest / 100 / 12
    const numPayments = years * 12

    return monthlyPayout * ( (1 - ( 1 + rate) ** -numPayments ) / rate )
}

//console.log(calculateAnnuity(3000, 2.5, 20))


