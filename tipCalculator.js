


function tipCalculator(total,service){ 
    if (service === "Good"){ 
        let tipAmount = total * .20;
        console.log(tipAmount);

    } else if (service === "Fair"){  
        let tipAmount = total * .15; 
        console.log(tipAmount);

    }  else if (service ==="Bad") { 
        let tipAmount = total * .10; 
        console.log(tipAmount); }

} 

tipCalculator(10,"Fair")
tipCalculator(10,"Good") 
tipCalculator(10,"Bad")