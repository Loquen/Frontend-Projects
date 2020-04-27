// Grab element of picker
let picker = document.getElementById('picker-box');

function changePerson(e) {
  // If we miss the actual circle, do nothing
  if(e.target.id === 'picker-box') return;

  // Select the active person and circle
  let activeCircle = document.querySelector('.active');
  let activePersonId = activeCircle.id.replace('circle', 'person');
  let activePerson = document.getElementById(activePersonId);

  // Add inactive to active person, 
  activeCircle.classList.remove('active');
  
  // Remove active class from active circle
  activePerson.classList.add('inactive');

  // Select the next person and circle
  let nextActiveCircle = e.target;
  let nextPersonId = nextActiveCircle.id.replace('circle', 'person');
  let nextPerson = document.getElementById(nextPersonId);

  // Add active circle class to next circle
  nextActiveCircle.classList.add('active');
  
  // Remove inactive class from next person
  nextPerson.classList.remove('inactive');

  console.log(nextPersonId);
}


picker.addEventListener('click', changePerson);
