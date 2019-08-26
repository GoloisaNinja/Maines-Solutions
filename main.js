document.querySelector('#hiddenForm').style.visibility = 'hidden'

function displayHidden() {
  const x = document.querySelector('#hiddenForm');
    if (x.style.visibility === 'visible') {
        x.style.visibility = 'hidden'
    } else {
        x.style.visibility = 'visible'
}
}
