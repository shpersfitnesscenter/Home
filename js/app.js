//========Javascript for header section starts=============================================================================
function myFunction() {
    var x = document.getElementById("menubox");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function disable(){
    document.getElementById('menu').style.display="none";
  }
//========Javascript for header section Ends===============================================================================

//Funtion For Getting Current Year!
const Year = document.getElementById('year');
const CurrentYear = new Date().getFullYear();
Year.innerHTML = CurrentYear;

//Function For Go To Top Button:
const Btn = document.getElementById('top-btn');

//Call Function on Scroll:
window.onscroll = function(){checkstatus()};

//Check Waether User Scroll Or Not
function checkstatus(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    Btn.style.display = "flex";
    Btn.style.opacity = "1";
  }
  else{
    Btn.style.display = "none";
    Btn.style.opacity = "0";
  }
}

//When User Clicks On the Button It Will take it to top:
function GoToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Function For Gallery:
function MoveRight(){
  const Cont = document.getElementById('gallerybox')
  Cont.scrollLeft += 60;
}
function MoveLeft(){
  const Cont = document.getElementById('gallerybox')
  Cont.scrollLeft -= 60;
}

//Function For Toggle Form:
const DownloadForm = document.getElementById('Download-plan');
function ToggleDownloadForm(){
  DownloadForm.style.display = 'flex';
}
function NoneDownloadForm(){
  DownloadForm.style.display = 'none';
}