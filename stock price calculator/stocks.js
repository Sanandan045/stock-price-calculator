var intialprice =document.querySelector("#intial-price") ;
var qunatity = document.querySelector("#qunatity");
var currentprice=document.querySelector("#current-price");

var submitBtn =document.querySelector("#submitbtn");
var outputbx = document.querySelector("#outputbox");

 //  calculate profit and loss 

function profitloss(i,q,c){
    if(i>c){
        var loss=(i-c)*q;
        var lossper = (loss/i)*100;
        showoutput(`hey the loss is ${loss} and ${lossper.toFixed(2)} %` );
        outputbx.style.color="red";
    }
    else if(c>i){
        var profit=(c-i)*q;
        var profitper=(profit/c)*100;
        showoutput(`hey the profit is Rs ${profit} and  ${profitper.toFixed(2)} %` );
        outputbx.style.color= "green";

    }
   
    else{
        showoutput(`No pain no gain` );
        outputbx.style.color = "black";          // style with javascript and it change a color.


    }

}

//outbox create  -> show  the result 

function showoutput(massage){
    outputbx.innerHTML=massage;
    
}


// button logic  -> using event listener

submitBtn.addEventListener('click',submitHandler);

function submitHandler(){
    var ip=Number (intialprice.value);
    var qty=Number(qunatity.value);
    var curr=Number(currentprice.value);

    

    if((intialprice.value && qunatity.value && currentprice.value)===""){
        showoutput(`enter a postive value`);
    }
    else if(ip>=0 && qty >0 && curr >=0 ) {
        profitloss(ip,qty,curr);

    }

    
   
}













