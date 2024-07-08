const depositBtn = document.querySelector(".deposit_btn");
const cashBtn = document.querySelector(".cash_btn");
const depositInput = document.querySelector("#depositInput");
const cashInput = document.querySelector("#depositInput");
const deposit = document.querySelector(".deposit");
const cash = document.querySelector(".cash");
const balance = document.querySelector(".balance");


depositBtn.addEventListener("click",(e)=>{
e.preventDefault();
const value = depositInput.value;
const depositeValue = Number(deposit.textContent) + Number(value);
console.log(depositeValue);
const balanceValue = Number (balance.textContent) + Number(value);
deposit.textContent = depositeValue
balance.textContent = balanceValue
depositInput = "";

});

cashBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const value = cashInput.value;
    if( +value ===0){
        alert("Məbləği Daxil Edin.");
    } else if(+value> +balance.textContent){
        alert("Balansda kifayət qədər məbləğ yoxdur.");
    } else{
        const cashValue = Number(cash.textContent) + Number(value);
        console.log(cashValue);
        const balanceValue = Number(balance.textContent) - Number(value);
        cash.textContent = cashValue;
        balance.textContent = balanceValue
    }

    cashInput.value = "";
}
);