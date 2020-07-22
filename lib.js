var start = (function(min,max) {
  var attemts = 10;
  var correctNum = Math.floor(Math.random() * (max - min) + min);
  var userNum;
  return function() {
    console.log(correctNum);
    while ((userNum = prompt('Отгадайте число!','')) !== null) {
      if (isNaN(userNum) && attemts > 0) {
        alert('Введите число! '  + 'Осталось попыток ' + attemts);
        attemts--;
      }
      else if (userNum < correctNum && attemts > 0) {
        alert('Больше! ' + 'Осталось попыток ' + attemts);
        attemts--;
      }
      else if (userNum > correctNum && attemts > 0) {
        alert('Меньше! '  + 'Осталось попыток ' + attemts);
        attemts--;
      }
      else if (userNum !== correctNum && attemts == 0) {
        alert('Вы проиграли!');
        if (confirm('Начать новую игру?')) {
          attemts = 10;
          correctNum = Math.floor(Math.random() * (max - min) + min);
          start();
        }
      }
      else if (userNum == correctNum) {
        alert('Правильно!')
        return;
      }
    }
  }   
})(1,1000);