var fs = require('fs');
var colors = require('colors');

fs.readdir('./dog', 'utf-8', (err, files) => {
    if (err) throw err;
    console.log('Reading dir...'.red);
    console.log(files);

    files.forEach((e) => {
        fs.appendFile('./result.txt', e + '\n', (err) => {
            if (err) throw err;
            console.log('Writting results to result.txt'.yellow);
            console.log(e);
        });
    });
});
