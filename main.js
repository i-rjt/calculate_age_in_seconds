function fetchAge(){
   
    document.getElementById("myForm").addEventListener("submit",(form) => {
        form.preventDefault();
        let ageDate = document.getElementById("ageDate").value;
        displayAge(ageDate);
});
}

fetchAge();

function displayAge(age){
    const ageDate = new Date(age);
    let div = document.querySelector(".seconds");
    let button  = document.getElementById("button");
    if(!age){
        alert("Please enter a valid date");
    }else{
        button.addEventListener("click",() => {
            setInterval(()=> {
        let currentDate = new Date();
        let age_in_seconds = ageDate.valueOf() / 1000;
        let date_in_seconds = currentDate.valueOf() / 1000;
        let result = Math.round(date_in_seconds - age_in_seconds);
                div.innerHTML = `<h4>Your age till ${currentDate.toUTCString()} :- ${result}<em><sup>secs</sup></em></h4>`;
            },1000);
     });
    }
    
}