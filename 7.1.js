//������ 7 ������� 1
function getKeys(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key); 
    } } }
getKeys(obj= {
    model: 'Iphone',
    memory: '512gb',
    number: 12
  });
//������� ����������� �������� ������� "model", "memory" � "number"
