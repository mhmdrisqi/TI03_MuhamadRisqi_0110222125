let batu = document.getElementById("batu");
let gunting = document.getElementById("gunting");
let kertas = document.getElementById("kertas");
let computerchoice = document.getElementById("computerchoice");
let options = ["batu","gunting","kertas"];

batu.addEventListener('click',function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = options[random];
    computerchoice.innerHTML = randomOption;

   setTimeout(() => {
    switch (randomOption) {
        case "batu":
            alert("Seri");
            break;

        case "gunting":
            alert("kamu menang!");
            break;
    
        default:
            alert("Komputer menang!")
            break;
    }
   }, 300);
})

gunting.addEventListener('click',function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = options[random];
    computerchoice.innerHTML = randomOption;

   setTimeout(() => {
    switch (randomOption) {
        case "batu":
            alert("Komputer menang!");
            break;

        case "gunting":
            alert("Seri!");
            break;
    
        default:
            alert("Kamu menang!")
            break;
    }
   }, 300);
})

kertas.addEventListener('click',function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = options[random];
    computerchoice.innerHTML = randomOption;

   setTimeout(() => {
    switch (randomOption) {
        case "batu":
            alert("Kamu menang!");
            break;

        case "gunting":
            alert("Komputer menang!");
            break;
    
        default:
            alert("Seri!")
            break;
    }
   }, 300);
})
 