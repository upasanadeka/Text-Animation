const logo = document.querySelectorAll("#logo path");

console.log(logo);
battstatus=async ()=>{
    stat= await window.navigator.getBattery()
    console.log(stat)
}
battstatus()
for(i = 0; i<logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
         setTimeout(function(){
            window.location.href = 'file:///C:/Users/goels/Desktop/Text-Animation/hacktober.html';
         }, 5000);
     