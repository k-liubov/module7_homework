//������ 7 ������� 4
//����������� ������������ �������
function ElectricalAppliances(name, capacity) {
  this.capacity = capacity
  this.name = name,
  this.brand = 'Bosh',
  this.mode = ''
}
//����� � ����������/�����������
ElectricalAppliances.prototype.plugin = function (plugging){
  this.mode = plugging === 'On' ? this.name + " ������� � �������!" : this.name + " ��������!"
    return this.mode;
  };

//�������� ������������ �����
function KitchenAppliances(name, capacity){
  this.name = name,
  this.capacity = capacity
}

KitchenAppliances.prototype = new ElectricalAppliances();

//����� � ����������/����������� ��� �������� �������
KitchenAppliances.prototype.plugin = function (plugging){
  this.mode = plugging === 'On' ? this.name + " ������� � ������� �� �����!" : this.name + " �������� �� ������� �� �����!"
    return this.mode;
  };

//�������� �����������
const tv = new ElectricalAppliances('���������' , 160); 
const kettle = new KitchenAppliances('������', 20); 
const oven = new KitchenAppliances('�������', 95); 

tv.plugin('On');
kettle.plugin('Off');
oven.plugin('On');

console.log(tv, kettle, oven); 

console.log(`����� ������������ �������� ����� ${tv.capacity + kettle.capacity + oven.capacity} ��`)
