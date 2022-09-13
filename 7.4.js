//Модуль 7 Задание 4
//Определение родительской функции
function ElectricalAppliances(name, capacity) {
  this.capacity = capacity
  this.name = name,
  this.brand = 'Bosh',
  this.mode = ''
}
//Метод с включением/выключением
ElectricalAppliances.prototype.plugin = function (plugging){
  this.mode = plugging === 'On' ? this.name + " включён в розетку!" : this.name + " выключен!"
    return this.mode;
  };

//Создание делегирующей связи
function KitchenAppliances(name, capacity){
  this.name = name,
  this.capacity = capacity
}

KitchenAppliances.prototype = new ElectricalAppliances();

//метод с включением/выключением для дочерней функции
KitchenAppliances.prototype.plugin = function (plugging){
  this.mode = plugging === 'On' ? this.name + " включён в розетку на кухне!" : this.name + " выключен из розетки на кухне!"
    return this.mode;
  };

//Создание экземпляров
const tv = new ElectricalAppliances('Телевизор' , 160); 
const kettle = new KitchenAppliances('Чайник', 20); 
const oven = new KitchenAppliances('Духовка', 95); 

tv.plugin('On');
kettle.plugin('Off');
oven.plugin('On');

console.log(tv, kettle, oven); 

console.log(`Общая потребляемая мощность равна ${tv.capacity + kettle.capacity + oven.capacity} Вт`)
