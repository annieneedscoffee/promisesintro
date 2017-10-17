const fs = require('fs');

function readToJson(filePath){
  return new Promise((resolve, reject)=>{
    fs.readFile(filePath, 'utf8', (err, data)=>{
      if(err){
        reject(err);
      }else{
        resolve(JSON.parse(data));
      }
    });
  });
}

readToJson('./storage.json').then((data)=>{
  console.log(data.name);
})
