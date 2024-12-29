
 
let box1 = document.querySelector(".box input")
let DROPDOWNS1 = document.querySelectorAll(".dropdown select")
let btn = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");


  
for(let select of DROPDOWNS1){
  for(currcode in countryList){
    let newOption = document.createElement('option')
    newOption.value = newOption.innerText = currcode;
    if(select.name === "from" && currcode ==="USD"){
      newOption.selected = "selected"
      console.log(newOption.selected)
    }else if(select.name === "To" && currcode ==="INR"){
      newOption.selected = "selected"
    }
    select.append(newOption)
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}


let getyourexchangevalue = async () =>{
let box1 = document.querySelector(".box input");
let amtVal = box1.value;
  console.log(amtVal);

const URL = `https://api.exchangerate-api.com/v4/latest/${fromCurr.value}`;
let response = await fetch(URL);
let data = await response.json();
let rate = data.rates[toCurr.value];
console.log(rate)

let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  console.log(finalAmount)
}

const updateFlag =(element) =>{
  let currcode = element.value;
  let countryCode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc
}

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  getyourexchangevalue();
});

box1.addEventListener("input",(evt) =>{
  evt.preventDefault();
  getyourexchangevalue();
});

fromCurr.addEventListener("change", (evt) =>{
  evt.preventDefault();
  getyourexchangevalue();
})

toCurr.addEventListener("change", (evt) =>{
  evt.preventDefault();
  getyourexchangevalue();
})


window.addEventListener("load", () => {
  getyourexchangevalue();
});

