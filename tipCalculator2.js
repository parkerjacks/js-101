

function totalAmountCalculator(total,service) { 
    if(service === "Good"){ 
        totalAmount = total + (total * .20);
        console.log(totalAmount);
    } 
    else if (service==="Fair"){  
        totalAmount = total + (total * .15); 
        console.log(totalAmount);

    } else if (service==="Bad"){  
        totalAmount = total + (total * .10); 
        console.log(totalAmount);

    }

    
} 

totalAmountCalculator(10,"Good") 
totalAmountCalculator(10,"Bad") 
totalAmountCalculator(10,"Fair")
