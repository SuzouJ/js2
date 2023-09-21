var young = +prompt('Введите свой возраст');
var middle = +prompt('Введите свой возраст');
var older = +prompt('Введите свой возраст');
var oldest = +prompt('Введите свой возраст');


if(young <= 18 ) {
    console.log('Вы еще молоды, Вам нужно учиться');
}
else if(middle <= 50 || middle >= 19) {
    console.log('Вам нужно работать');
}
else if(older <= 60 || older >= 51) {
    console.log('Вам скоро на пенсию');
}
else if(oldest <= 100 || oldest >= 61) {
    console.log('Вы пенсионер');
}
else{
    console.log('Что-то пошло не так');
}






var time = +prompt('Введите время');
var ftime = ('Введите время');
var gtime = ('Введите время');
var htime = ('Введите время');
var jtime = ('Введите время');

switch(time) {
    case (ftime <= 6 || ftime >= 0):
        alert(ftime + ' часов ночи');
        break;
    case (gtime <= 10 || gtime >= 7):
        alert(gtime + ' часа ночи');
        break;
 
    case (htime <= 17 || htime >= 11):
        alert(htime + ' часа ночи');
        break;
    case (jtime <= 23 || jtime >= 18):
        alert(jtime + ' часа ночи');
        break;
    default:
        alert('Такого времени не существует')
        break;
}




var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');

var res = (x+y+z) / 3;

console.log('среднее арифметическое ' +  res);