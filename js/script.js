const boxesContainer = document.querySelector('.boxes');

for(let i = 0; i < 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  box.append(i + 1);
  boxesContainer.append(box);

  if(!((i + 1) % 3)){
    box.classList.add('fizz');
  }
  if(!((i + 1) % 5)){
    box.classList.add('buzz');
  }
  if((!(i % 3)) && (!(i % 5))){
    box.classList.add('fizzbuzz');
  }
}

