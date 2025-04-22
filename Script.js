const tablinks = document.querySelectorAll(".tab-links");
const skillContent  = document.querySelectorAll(".skill-content");

 function opentab(tabname){
  // for(tablink of tablinks){
     // tablink.classList.remove('active-link');
   //}
   for(skillContents of skillContent){
      skillContents.classList.remove('active-tab');
   }
      //    event.currentTarget.classList.add("active-link");
          document.getElementById(tabname).classList.add("active-tab")
 }