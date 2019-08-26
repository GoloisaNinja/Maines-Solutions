const mainSurveyButton = document.querySelector('#iniSurvey')
const mainHidden = document.querySelector('#hiddenForm')
mainHidden.style.visibility = 'hidden'

mainSurveyButton.addEventListener('click', function(e){
  if (mainHidden.style.visibility === 'hidden') {
      mainHidden.style.visibility = 'visible'
  } else {
      mainHidden.style.visibility = 'hidden'
  }
})
