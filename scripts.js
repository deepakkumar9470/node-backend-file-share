
// Scripts for deleting files after 24 hrs

const connectDB = require('./config/db');
const File = require('./models/filesModels');
const fs = require('fs');
connectDB();



 async function deleteData() {
    
     const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
     const files = await File.find({createdAt : {$lt: pastDate }})
     
      if(files.length){
          for(const file in files){
              try {
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`succesfully deleted ${file.filename}`)
              } catch (error) {
                console.log(`error while deleting ${error}`)
              }
          }
        
        }
        console.log('Job Done..');
}

deleteData().then(process.exit);