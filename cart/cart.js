//script for add +1 in onclick
const decreaseNumber = () => {
  var inputVal = document.getElementById("textBox");
  // console.log(inputVal.value);
  if (inputVal.value <= 0) {
    inputVal.value = 0;
  } else {
    inputVal.value = parseInt(inputVal.value) - 1;
    inputVal.style.backgroundColor = "#fff";
  }
};
//script for add -1 in onclick
const increaseNumber = () => {
  var inputVal = document.getElementById("textBox");
  // console.log(inputVal.value);
  if (inputVal.value >= 5) {
    alert("maximum 5 allowed");
    inputVal.style.backgroundColor = "red";
  } else {
    inputVal.value = parseInt(inputVal.value) + 1;
  }
};
