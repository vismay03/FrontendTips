let color = "1234567890abcdef";
let i = 0;

function randomStr(len) {
  var str = "";
  for (let i = 0; i < len; i++) {
    str += color.charAt(Math.floor(Math.random() * color.length));
  }

  return str;
}

function changeBgColor() {
  col = randomStr(6);

  let back = document.querySelector(".container");
  i++;
  back.style.backgroundColor = "#" + col;
}
