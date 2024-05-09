//Menu Functionality
function aza(){
    var green=document.getElementById('aza')
    green.scrollIntoView({behavior: "smooth"})
   };

   function skills(){
    var green=document.getElementById('skills')
    green.scrollIntoView({behavior: "smooth"})
   };

   function projects(){
    var green=document.getElementById('projects')
    green.scrollIntoView({behavior: "smooth"})
   };

   function wrkExp(){
    var green=document.getElementById('wrk_exp')
    green.scrollIntoView({behavior: "smooth"})
   };

   function Edu_cer(){
    var green=document.getElementById('edu')
    green.scrollIntoView({behavior: "smooth"})
   };

   //project functionality
   function project(value){
    let hide=document.getElementsByClassName('pro');

    for(let i=0;i<hide.length;i++){
        hide[i].style.display='none';
    }

    document.getElementById(value).style.display='block';
        
   }
   document.getElementById('book').click();
  