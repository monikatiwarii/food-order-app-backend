import {Request} from "express"


export const CreateFileObj = async (req: Request) =>{
    interface RespObj {
      [key: string]: any
    }
  
    let respObj: RespObj
  
    respObj = {}
   
    let folderName = 'images'
    if(Array.isArray(req.files) && req.files?.length > 0){
        req.files.forEach((val, key) => {
          respObj[key] = `${folderName}/${val.filename}`;
        });
    } else if (typeof req.files === 'object' && Object.keys(req.files).length > 0){ 
        for(let file in req.files){
            // console.log('file : :: :: :: ',file)
             respObj[file] = {}
             req.files[file].map((val, index) => {
                respObj[file][index] = val.filename
             })
          // respObj[file] = req.files[file]
          
        }
    }

    // console.log('respObj from multerobj :: :: :: ', {respObj})


        return respObj;
  }
