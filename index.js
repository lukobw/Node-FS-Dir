var fs = require('fs');
var colors = require('colors');

fs.readdir('./dog', 'utf-8', (err, files) => {
    if (err) throw err;
    console.log('Reading dir...'.red);
    console.log(files);

    fs.writeFile('./result.txt', files, (err, data) => {
        console.log('Writting result to result.txt'.yellow);
        console.log(files);
    });
});
