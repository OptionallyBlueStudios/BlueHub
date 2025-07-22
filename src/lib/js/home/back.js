function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

window.onload = function () {
  const backBtnParam = getQueryParam("backbtn");
  const backButton = document.getElementById("backBtn");

  if (backBtnParam === "t") {
    backButton.style.display = "block"; // show
  } else {
    backButton.style.display = "none";  // hide
  }
};