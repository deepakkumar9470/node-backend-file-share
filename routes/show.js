const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const File = require('../models/filesModels')




 router.get('/:uuid', async (req, res)=>{
     try {
        const file = await File.findOne({uuid : req.params.uuid})

         if(!file){
            return res.render('downloads', {
                error : 'Link has been expired..'
            })
         }
         
         return res.render('downloads',{
            uuid :file.uuid,
            fileName :file.filename,
            fileSize : file.size ,
            downloadLink :`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
             // http://localhost:3000/files/download/23avdd-sghdbb
         })
          
     } catch (error) {
         return res.render('downloads', {
             error : 'Something went wrong..'
         })
     }
 })


module.exports  = router