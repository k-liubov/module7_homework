//������ 7 ������� 2
function checkKey(a, obj) {
    let result = a in obj? true: false ; 
    console.log(result)
}
  
checkKey('model', {
    model: 'Iphone',
    memory: '512gb'
});

//���������, ���� �� � ����������� ������� �������� � ������ ������ model. // True
