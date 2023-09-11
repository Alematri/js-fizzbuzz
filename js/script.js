const boxesContainer = document.querySelector('.boxes');

for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  box.append(i);
  boxesContainer.append(box);

  if((i % 3 === 0) && (i % 5 === 0)){
    box.classList.add('fizzbuzz');
    box.innerHTML = 'fizzbuzz';
  }
  else if(i % 3 === 0){
    box.classList.add('fizz');
    box.innerHTML = 'fizz';
  }
  else if(i % 5 === 0){
    box.classList.add('buzz');
    box.innerHTML = 'buzz';
  }
}