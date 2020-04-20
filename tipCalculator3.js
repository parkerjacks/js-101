let good = .20 
let fair = .15 
let bad = .10
function splitAmount(total,service,numberOfpeople){ 
    if (service==="Good"){
        totalAmount = total + (total * good);
        totalAmount = totalAmount/numberOfpeople;  
        console.log(totalAmount);

    } else if (service==="Fair"){ 
        totalAmount = total + (total * fair); 
        totalAmount = totalAmount/numberOfpeople; 
        console.log(totalAmount);

    } else if (service==="Bad"){ 
        totalAmount = total + (total * bad);
        totalAmount = totalAmount/numberOfpeople; 
        console.log(totalAmount); 
    }
} 

splitAmount(10,"Good",2) 
splitAmount(10,"Fair",2) 
splitAmount(10,"Bad",2) 