function agechecker (age) {
  if (age > 20 && age < 100) {
    return true;
  } else if (age > 100) {
    return;
  } else {
    return false;
  }
}

//let age = prompt('how old are you? :)');

//if (agechecker(age)) {
//  console.log('old');
//} else if (agechecker(age) == undefined) {
//  console.log('way too old?')
//} else {
//  console.log('too young');
//}



function checkAge(age) {
  if ((age > 18) ? true : confirm('Did parents allow you?')) {
    return true;
  }
  return console.log('not getting through');
}

let age = 13;
console.log(checkAge(age));