function validateForm() {
  let name = document.getElementById("name").value;
  var haveNumber = /[0-9]/g;
  var haveCapital = /[A-Z]/g;
  var haveNormal = /[a-z]/g;

  if (name.match(haveNormal)) {
    alert("Chúng tôi đã nhận được ý kiến của bạn");
    return true;
  } else {
    alert("Vui lòng nhập Ý kiến của bạn");
    return false;
  }
}
