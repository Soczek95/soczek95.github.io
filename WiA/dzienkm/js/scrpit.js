function theme() {
  var checkbox = document.getElementById("slider");
  var body = document.getElementById("body");
  var w = document.getElementById("w");
  var m = document.getElementById("m");

  if (checkbox.checked == true) {
    body.classList.remove("pink");
    body.classList.add("blue");
    w.classList.add("hidden");
    m.classList.remove("hidden");
    m.classList.add("content")
    w.classList.remove("content")
  } else {
    body.classList.remove("blue");
    body.classList.add("pink");
    m.classList.add("hidden");
    w.classList.remove("hidden");
    w.classList.add("content")
    m.classList.remove("content")
  }
}
