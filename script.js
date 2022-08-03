let search=document.getElementById("search");
let form = document.getElementById("formm");

/*search input appears */

let divForm=document.getElementById("shoppingNav");
function searchh(){
    if(form.style.visibility="hidden" )
    {
        form.style.visibility="visible";
        divForm.style.marginLeft="-10rem"; 
  }
 
}
/*search input appears */

/*search onfocus */
function focuss(){
    form.style.background="#FFF89C";
}
/*search onfocus */


/*alert when page is loading*/
let welcomeAlert=document.getElementById("welcomeAlert");
let welcomContbtn=document.getElementById("welcomContbtn");

function onLoad(){
    setTimeout(function(){
        welcomeAlert.style.visibility="visible";
    },2000);
    if(welcomContbtn)
{   welcomContbtn.addEventListener("click",function(){
    welcomeAlert.style.visibility="hidden";}
);
}
}

/*alert when page is loading*/



/*loading more card */
 let reload=document.getElementById("reload");
 let spinner= document.getElementById("spinner");     
setTimeout(function(){
        reload.style.visibility="visible";
        spinner.style.marginBottom="-40rem"
        reload.style.marginTop="-1rem";
    },6000);
/*loading more card */


/*loading2 more card */
let reload2=document.getElementById("reload2");
let spinner2= document.getElementById("spinner2"); 
 setTimeout(function(){
    reload2.style.visibility="visible";
    spinner.style.marginBottom="-75rem";
    reload2.style.marginTop="1rem";
},8000);

/*loading2 more card */




/*alert for next pointer in slider */
let nextslider=document.getElementById("nextslider");
let nextDetails= document.getElementById("nextDetails");
function next(){
   let i;
    if( i=1 , i>1 , i++)
    {nextDetails.style.visibility="visible";
    setTimeout(function(){
    nextDetails.style.visibility="hidden";
    },500)
    
}
}
/*alert for next pointer in slider */


/*alert for previous pointer in slider */
let previousslider=document.getElementById("previousslider");
let previousDetails= document.getElementById("previousDetails");
function previous(){
    let i;
    if(i=1 , i>1 , i++)
    {previousDetails.style.visibility="visible";
    setTimeout(function(){
        previousDetails.style.visibility="hidden";
    },500)
   
}
}
/*alert for previous pointer in slider */
















/*if input empty */

// /*show details of card */
// let cardImg=document.getElementById("cardImg");
// let showDetails=document.getElementById("showDetails"); 
// if(cardImg)
// {   
//    function f1(){
      
//             showDetails.style.visibility="visible";
          
   
      
//     }
//    function f2(){
       
//             showDetails.style.visibility="hidden"
    
      
//     }
 

// }

