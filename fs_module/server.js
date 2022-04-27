var fs= require('fs');

fs.writeFile('AsyncFile.txt','Please do subscribe my channel', (err)=> {
    console.log(err);
})