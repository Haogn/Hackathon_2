let str = "     this is A tEst ";

let arrStr = str.split(" ");

for (let i = 0; i < arrStr.length; i++) {
  if (arrStr[i] === "") {
    arrStr.splice(i,1);
  }
}

let capitalization = "";
for (let i = 0; i < arrStr.length; i++) {
  capitalization = capitalization +
    arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1).toLowerCase() + " ";
}

console.log(capitalization);