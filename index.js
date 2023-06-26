
$(document).ready(function(){

  var loader = document.getElementById("preLoader");  
  var loaderText=document.getElementById("preText");
  loader.style.display="none";
  loaderText.style.display="none";


  console.log( $(window).scrollTop());

  var devider = $('#devider');
  var devider2 = document.getElementById('devider2');
  var section1 =document.getElementById('section1');
  var section2 = document.getElementById('section2');
  var section3 =document.getElementById('section3');
  var section4 =document.getElementById('section4');
  var landingPage = document.getElementById('landingPage');
  var theory =$('#theory');
  var methodology =$('#methodology');
  var mapBackground = $('#mapBackground');
  var mapContainer =document.getElementById('mapContainer');
  var myVideo = document.getElementById('myVideo');


  var m_conditions = document.getElementById('conditions');
  var m_strategies = document.getElementById('strategy');
  var m_consequences = document.getElementById('consequenzes');
  var m_relative = document.getElementById('relative')
  var m_lips = document.getElementById('lips');
  var m_politics = document.getElementById('politics');
  var m_laut = document.getElementById('laut_1_');
  var m_residents = document.getElementById('residents');
  var m_ma28 = document.getElementById('MA28');
  var m_ma48 = document.getElementById('MA48');
  var m_structure = document.getElementById('structure');
  var m_car = document.getElementById('Car_1_');
  var m_egg1 = document.getElementById('egg1');

  var myModal= $('#modal');

  var modalTitle= document.getElementById("modalTitle");
  var modalBody= document.getElementById("modalBody");

/* 
PAGE CONTROLL
*/

  

  var activeSection=landingPage;
  var upcomingSection=section2;
  var standardPadding=(window.innerHeight/3)*1;

  //section1.style.paddingBottom=standardPadding+"px";  
  section2.style.paddingBottom=standardPadding+"px";  
  section3.style.paddingBottom=standardPadding+"px";  
  section4.style.paddingBottom=standardPadding+"px";

  devider2.style.marginTop=(landingPage.getBoundingClientRect().height/10)*9.3+"px";


  /*
  if(window.innerHeight>window.innerWidth)
  {
    mapContainer.style.height="200%";
    mapContainer.style.width="200%";
  }
  */

  if(window.innerHeight>window.innerWidth)
  {
    
    myVideo.style.width=(window.innerWidth/10)*9+"px";
    myVideo.style.transform="translate(-50%, -50%)";
  }
  






  var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop) {
      // downscroll code

      //if(checkVisible(upcomingSection,"visible")) //on scroll checks if the new section is already visible
      console.log("windowHeight:"+window.innerHeight);
      console.log(upcomingSection.getBoundingClientRect());
      var divHeight = (upcomingSection.getBoundingClientRect().height);
      var divY=(upcomingSection.getBoundingClientRect().y);
      var windowHeight=(window.innerHeight);
      var heightDifference = windowHeight-divHeight;

      

    if(heightDifference>=divY)
      {   
        if(divY>0)
        divY=0;
          
        //if visible check which section it is
        // and set the following as the new
          if(upcomingSection==section2)
          {
            
            upcomingSection.classList.add("onTop");
            upcomingSection.style.top= ""+divY+"px";
            
            activeSection=section2;
            upcomingSection=section3;
            console.log(activeSection);
            console.log(upcomingSection);
            upcomingSection.classList.add("onTop");
            
            
          }
          else if(upcomingSection==section3)
          {
            upcomingSection.classList.add("onTop");
            upcomingSection.style.top= ""+divY+"px";
          
      
            //activeSection.classList.add("onTop");
            
            activeSection=section3;
            upcomingSection=section4;
            console.log(activeSection);
            console.log(upcomingSection);
            upcomingSection.classList.add("onTop");
          }    
          else if (upcomingSection==section4)
          {
            //activeSection.css('top', offset + 'px');
            upcomingSection.classList.add("onTop");
            activeSection=section4;
          }  
          
    }
      

   } else if (st < lastScrollTop) {
    if(!checkVisible(activeSection,"visible"))
    {
      activeSection.removeClass("onTop");
      activeSection.css('top','');
      if(activeSection==section4)
          {
            upcomingSection=section4;
            activeSection=section3;
            console.log(activeSection);
            console.log(upcomingSection);
          }
          else if(activeSection==section3)
          {
            upcomingSection=section3;
            activeSection=section2;
            console.log(activeSection);
            console.log(upcomingSection);
          }
          else if(activeSection==section2)
          {
            upcomingSection=section2;
            activeSection=section1;
          }
          
    }


    

      // upscroll code
   } // else was horizontal scroll
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
  









/*
MAP CONTROL
 */


m_strategies.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_consequences.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_conditions.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_relative.onclick = function(){
  writeModal("Polllar", '<video autoplay controls loop id=""><source src="supergrätzlVideos.mp4" type="video/mp4"></video>');
  myModal.modal('show');
};
m_lips.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_politics.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_laut.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_residents.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_ma28.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_ma48.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_structure.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_car.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};
m_egg1.onclick = function(){
  writeModal("Polllar", "Easy and cheap to fix, is stuck in the bureaucratic machinery");
  myModal.modal('show');
};




/*
HELPER FUNCTIONS
 */

function checkVisible( elm, evalType ) {
  evalType = evalType || "visible";

  var vpH = $(window).height(), // Viewport Height
      st = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();

  if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
  if (evalType === "above") return ((y < (vpH + st)));
}

function writeModal(title, content)
{
  modalTitle.innerHTML=title;
  modalBody.innerHTML=content;
}















   
 
      
    
});