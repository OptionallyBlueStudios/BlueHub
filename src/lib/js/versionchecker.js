const bhsver = 2.5; // your constant version

function checkBhverAndRedirect() {
  const urlParams = new URLSearchParams(window.location.search);
  const bhverStr = urlParams.get('bhver');
  const outdatedPage = 'outdated.html';

  if (bhverStr === null) {
    // bhver param not found, redirect
    window.location.href = outdatedPage;
    return;
  }

  const bhverNum = Number(bhverStr);
  if (isNaN(bhverNum) || bhverNum < bhsver) {
    // bhver not a number or less than bhsver, redirect
    window.location.href = outdatedPage;
    return;
  }

  // bhver present and >= bhsver, stay on page
  console.log(`bhver (${bhverNum}) is OK (>= ${bhsver})`);
}

window.onload = checkBhverAndRedirect;
