var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

//fs.open() yöntemi, ikinci parametre olarak bir "bayrak" (flag) alır.
//Eğer bu bayrak "w" yani "yazma" içinse, belirtilen dosya yazmak amacıyla açılır.
//Eğer dosya mevcut değilse, boş bir dosya oluşturulur.