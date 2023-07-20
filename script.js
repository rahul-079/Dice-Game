var random1= (Math.random()*6) +1 ; 
random1=Math.floor(random1) ;
var random2= (Math.random()*6) +1; 
random2=Math.floor(random2) ;

var img1src="dice"+random1+".png" ;

var img1= document.querySelectorAll("img")[0] ;

img1.setAttribute("src",img1src) ;



var img2src="dice"+random2+".png" ;

var img2= document.querySelectorAll("img")[1] ;

img2.setAttribute("src",img2src) ;



 if(random1> random2){
    document.querySelector("h1").innerText="🚩Player 1 wins" ;
 }
 else if(random2>random1){
    document.querySelector("h1").innerText="Player 2 wins🚩" ;
 }
 else{
    document.querySelector("h1").innerText="Its a Draw" ;
 }

document.addEventListener('DOMContentLoaded', () => {
   const reloadButton = document.getElementById('reloadButton');

   reloadButton.addEventListener('click', () => {
       window.location.reload();
   });
});

 
