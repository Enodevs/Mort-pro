const principal = document.querySelector('.principal')
const rate = document.querySelector('.rate')
const time = document.querySelector('.time')
const form = document.querySelector('.form')
const empty = document.querySelector('.empty')
const repayments = document.querySelector('.repayments')
const interest = document.querySelector('.interest')
const rppmElem = document.querySelector('.rppm')
const rppmElem2 = document.querySelector('.rp_pm')
const rpElem = document.querySelector('.rp')
const clear = document.getElementById('clear')
const results = Array.from(document.querySelectorAll('.results'))
const check1 = document.querySelector('#__1')
const check2 = document.querySelector('#__2')
const principalTag = document.querySelector('.principalTag')
const timeTag = document.querySelector('.timeTag')
const rateTag = document.querySelector('.rateTag')
const principalInput = document.querySelector('.principalInput')
const timeInput = document.querySelector('.timeInput')
const rateInput = document.querySelector('.rateInput')
const danger1 = document.querySelector('.dang-principal')
const danger2 = document.querySelector('.dang-time')
const danger3 = document.querySelector('.dang-rate')

const calculate = (principal, rate, time) => {
    let interest = principal * rate * time / 100
    let repayment = principal + interest
    let month = time * 12
    let rppm = repayment / month
    return {interest: parseFloat(interest.toString()).toFixed(2), repayment: parseFloat(repayment.toString()).toFixed(2), rppm: parseFloat(rppm.toString()).toFixed(2)}
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (principal.value === "") {
        principalInput.classList.add('error-input');
        principalTag.classList.add('error');
        danger1.textContent = "This field is required"
    } else if (time.value === "") {
        timeInput.classList.add('error-small-input');
        timeTag.classList.add('error');
        principalInput.classList.remove('error-input');
        principalTag.classList.remove('error');
        danger1.textContent = ""
        danger2.textContent = "This field is required"
    } else if (rate.value === "") {
        rateInput.classList.add('error-small-input');
        rateTag.classList.add('error');
        timeInput.classList.remove('error-small-input');
        timeTag.classList.remove('error');
        danger2.textContent = ""
        danger3.textContent = "This field is required"
    } else {
        rateInput.classList.remove('error-small-input');
        rateTag.classList.remove('error');
        danger3.textContent = ""
        const data = calculate(Number(principal.value), Number(rate.value), Number(time.value))
        empty.classList.add('invisible')
        repayments.classList.remove('invisible')
        if (check1.checked === true) {
            results[0].classList.remove('invisible')
            results[1].classList.add('invisible')
            rppmElem.textContent = data.rppm.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            rpElem.textContent = data.repayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        } else if (check2.checked === true) {
            results[1].classList.remove('invisible')
            results[0].classList.add('invisible')
            rppmElem2.textContent = data.interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
    
})

clear.addEventListener("click", () => {
    principal.value = ""
    rate.value = ""
    time.value = ""
})
