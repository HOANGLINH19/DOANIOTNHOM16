let images = [
  "video/ct.jpg",
  "video/ctubk2.jpg",
  "video/ctuxhnv2.jpg"
];
let slide = document.getElementById("slider");
const slider = () => {
  let i = 0;
  setInterval(function () {
    i = i < images.length - 1 ? ++i : 0;
    slide.src = images[i];
  }, 2000);
};
slide.addEventListener("load", slider());





function divFontSize() {

  var text = document.getElementById("objectives");
  console.log(text);
  text.style.fontSize = "2em";

}

function divFontSizeReduction() {
var text = document.getElementById("objectives");
  console.log(text);
  text.style.fontSize = "1em";
                                                             
}

 function showHide(){
  if (document.getElementById("linh").checked){
   document.getElementById("NHL").style.display="block";
  }else{
  document.getElementById("NHL").style.display="none";
  }
   if (document.getElementById("huu").checked){
   document.getElementById("MTH").style.display="block";
  }else{
  document.getElementById("MTH").style.display="none";
  }
   if (document.getElementById("phuc").checked){
   document.getElementById("DHP").style.display="block";
  }else{
  document.getElementById("DHP").style.display="none";
  }
  if (document.getElementById("phuong").checked){
    document.getElementById("HVP").style.display="block";
   }else{
   document.getElementById("HVP").style.display="none";
   }
   if (document.getElementById("nam").checked){
    document.getElementById("LNN").style.display="block";
   }else{
   document.getElementById("LNN").style.display="none";
   }
   if (document.getElementById("duong").checked){
    document.getElementById("PQD").style.display="block";
   }else{
   document.getElementById("PQD").style.display="none";
   }
}





