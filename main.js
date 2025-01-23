(function fetchAge(){
    let ageDate = document.getElementById("ageDate").value;
    displayAge(ageDate);

})();


function displayAge(date){
    document.getElementById("myForm").addEventListener("submit", (e) => {
        e.preventDefault();
         document.getElementById("button").addEventListener("click", () => {
            let sec = new Date(date);
            if(isNaN(sec)){
                alert("Please select a valid date");
            }else{
            setInterval(() => {
                let d = new Date();
                let current = d.valueOf() / 1000;
                
                    let result  = current - (sec.valueOf() / 1000) ;
                    let div = document.querySelector(".seconds");
                    div.innerHTML = `<h4>Your age in seconds till ${d.toUTCString()} is --> ${Math.round(result)} seconds </h4>`;    
            }, 100 );
        }
       });
    })
}

