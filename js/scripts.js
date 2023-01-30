window.onload = function(){
  let submit = document.querySelector("#btn");
  submit.addEventListener("click", eventHandler);
}

function eventHandler(event) {
  event.preventDefault();
  let orgArray = [];
  let altArray = [];
  const item1 = document.getElementById("item1").value;
  const item2 = document.getElementById("item2").value;
  const item3 = document.getElementById("item3").value;
  
  orgArray = [item1, item2, item3];  
  
  altArray = orgArray.reverse();
  altArray.push(altArray[0]);
  altArray.shift(altArray[0]);
  spitOut(altArray);
}

function spitOut(altArray) {
  let ans = document.querySelector("#altArray");
  let ul = document.querySelector("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  li1.append(altArray[0]);
  li2.append(altArray[1]);
  li3.append(altArray[2]);
  ul.append(li1, li2, li3);
}
