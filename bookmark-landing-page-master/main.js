const questionsEl = document.querySelector('.faq-list');
const selectorEl = document.querySelector('.selector');
const hamburgerEl = document.getElementById('hamburger');

// Helper function 
function chooseNextSelection(className){
  let selection = document.querySelectorAll(`.${className}`);
  selection.forEach(el => {
    el.classList.add('selected');
  });
}

hamburgerEl.addEventListener('click', e => {
  let links = document.querySelector('.links');
  links.classList.toggle('hide');
});

questionsEl.addEventListener('click', e => {
  if(!e.target.className === 'question'){
    return;
  }

  if(e.target.id){
    const selectedQuestionId = e.target.id.replace('q', 'a');
    const selectedQuestionEl = document.getElementById(selectedQuestionId);
    
    selectedQuestionEl.classList.toggle('hidden');
  }
});

selectorEl.addEventListener('click', e => {
  // Find any element with the selected class and remove it
  let selected = document.querySelectorAll('.selected');

  selected.forEach(el => {
    el.classList.remove('selected');
  });

  const selectionClassList = e.target.classList;

  if([...selectionClassList].includes('bookmark')){
    chooseNextSelection('bookmark');
  } else if ([...selectionClassList].includes('search')){
    chooseNextSelection('search');
  } else {
    chooseNextSelection('share');
  }

});
