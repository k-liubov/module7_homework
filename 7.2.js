//Модуль 7 Задание 2
function checkKey(a, obj) {
    let result = a in obj? true: false ; 
    console.log(result)
}
  
checkKey('model', {
    model: 'Iphone',
    memory: '512gb'
});

//Проверяет, есть ли у переданного объекта свойство с данным именем model. // True
