let month = +prompt("nhập tháng sinh của bạn:");

let year = +prompt("nhập năm sinh của bạn:");

let check = true;
while (check) {
  if (month <= 0 || month > 12) {
    month = +prompt("tháng không hợp lệ , Nhập lại tháng : ");
  } else if (year <= 0) {
    year = +prompt("năm không hợp lệ , nhập lại năm : ");
  } else {
    check = false; 
  }
}

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert(`Tháng ${month} có 31 Ngày`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert(`Tháng ${month} có 30 Ngày`);
      break;
    case 2:
      alert(`Tháng ${month} có 29 Ngày`);
      break;
  }
} else {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert(`Tháng ${month} có 31 Ngày`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert(`Tháng ${month} có 30 Ngày`);
      break;
    case 2:
      alert(` Tháng ${month} có 28 Ngày`);
      break;
  }
}
