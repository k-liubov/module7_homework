//Модуль 7 Задание 5
class ElectricalAppliances {
  constructor(name, capacity) {
  this.capacity = capacity
  this.name = name
  this.brand = 'Bosh',
  this.mode = ''
  }
plugin (plugging) {
  this.mode = plugging === 'On' ? this.name + " включён в розетку!" : this.name + " выключен!"
    return this.mode;
  }
}
class KitchenAppliances extends ElectricalAppliances {
  constructor(name, capacity){
  super()
  this.name = name
  this.capacity = capacity
  }
plugin (plugging){
  this.mode = plugging === 'On' ? this.name + " включён в розетку на кухне!" : this.name + " выключен из розетки на кухне!"
    return this.mode;
  }
}

const tv = new ElectricalAppliances('Телевизор' , 160); 
const kettle = new KitchenAppliances('Чайник', 20); 
const oven = new KitchenAppliances('Духовка', 95); 

tv.plugin('On');
kettle.plugin('Off');
oven.plugin('On');

console.log(tv, kettle, oven); 

console.log(`Общая потребляемая мощность равна ${tv.capacity + kettle.capacity + oven.capacity} Вт`)






