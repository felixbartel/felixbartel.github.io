function toggleNav() {
  var x = document.getElementsByTagName("nav")[0];
  if (x.style.flexGrow == "1") {
    x.style.flexGrow = "0";
  } else {
    x.style.flexGrow = "1";
  }
}
