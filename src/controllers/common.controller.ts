import { Request } from "express"
import { IFileRespObjType } from "../types/common"


export const CreateFileObj = async (req: Request) => {
  let respObj: IFileRespObjType

  respObj = {}

  let folderName = 'images'
  if (Array.isArray(req.files) && req.files?.length > 0) {
    req.files.forEach((val, key) => {
      respObj[key] = `${folderName}/${val.filename}`;
    });
  } else if (typeof req.files === 'object' && Object.keys(req.files).length > 0) {
    for (let file in req.files) {
      respObj[file] = {}
      req.files[file].map((val, index) => {
        respObj[file][index] = `${folderName}/${val.filename}`
      })
    }
  }
  return respObj;
}
