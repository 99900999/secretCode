'use strict'
function random(){
  let text ="";
  const carsSeq = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  const numberSeq = "1234567890";
  
  for (let i=0; i<3; i++){
    text = text + carsSeq.charAt(Math.floor(Math.random()*carsSeq.length));
  }

  text += "-";
  for (let i=0; i<3; i++){
    text = text + numberSeq.charAt(Math.floor(Math.random()*numberSeq.length));
  }
  text += "-";
  for (let i=0; i<4; i++){
    text = text + carsSeq.charAt(Math.floor(Math.random()*carsSeq.length));
  }
  return text;
}
document.querySelector(".code").textContent = random();