function openUrl(url) {
  window.location = url;
}

function showPopup(buttonAction) {
  const modal = document.getElementById('popupModal');
  const btnDownload = document.getElementById('popupButton');
  const btnDismiss = document.getElementById('popupButton2');

  // Show the popup
  modal.style.display = 'block';

  // Clear old click handlers by cloning the buttons
  const newBtnDownload = btnDownload.cloneNode(true);
  btnDownload.parentNode.replaceChild(newBtnDownload, btnDownload);

  const newBtnDismiss = btnDismiss.cloneNode(true);
  btnDismiss.parentNode.replaceChild(newBtnDismiss, btnDismiss);

  // Download button runs buttonAction and closes popup
  newBtnDownload.addEventListener('click', () => {
    buttonAction();
    modal.style.display = 'none';
  });

  // Dismiss button just closes the popup
  newBtnDismiss.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// Optional: Close popup if clicking outside the popup content
window.addEventListener('click', (e) => {
  const modal = document.getElementById('popupModal');
  const content = document.getElementById('popupContent');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

function multiopen(fun1, fun2) {
  fun1();
  fun2();
}