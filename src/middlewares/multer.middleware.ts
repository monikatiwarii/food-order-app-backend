import { Request } from "express"
import multer from "multer"


import * as fs from "fs"
import path from "path"


const storage = multer.diskStorage({
    destination : function(req:Request,file : Express.Multer.File,cb : (error : Error |null,destination:string) => void
    ){
        let folderName = 'images'

        if(!fs.existsSync(`public/${folderName}`))
            fs.mkdirSync(`public/${folderName}`)

        cb(null,`public/${folderName}`)
    },
    filename: function(req :Request ,file : Express.Multer.File,cb : (error :Error | null,destination:string)=>void){
        let folderName = 'images'

        let fileName = `${folderName}_${Date.now()}${path.extname(
            file.originalname
        )}`;

        // req.body[file.fieldname] = `/${folderName}/${fileName}`;
        cb(null,fileName)
    }
})

const upload = multer({
    storage : storage,
    fileFilter : (req,file,cb)=>{
        if(
            file.mimetype =="image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ){
            cb(null,true)
        }else{
            cb(null,false)
        }

    }
})

export const MulterUpload = upload