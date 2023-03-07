import { StringMappingType } from "typescript";

// interface Success {
//   success: boolean,
//   message: string,
//   payload: any,
//   code: number,
//   error: []
// }

import { IDataGet, IResponse } from "../types/response.type";

export const Success  = (msg: string, dataGet: IDataGet = []) : IResponse => {
  let data: IResponse = {
    success: true,
    message: msg,
    payload: dataGet,
    code: 200,
    error: []
  };

  return data;
};

export const Error = ( msg: string , dataGet: IDataGet = [], statusCode: number = 500 ): IResponse => {
  
  // List of common HTTP request code
  const codes = [400, 401, 404, 403, 422, 500];

  // Get matched code
  const findCode = codes.find((code) => code == statusCode);
  if (!findCode) statusCode = 500;
  else statusCode = findCode;

  let data: IResponse = {
    success: false,
    message: msg,
    payload: dataGet,
    code: statusCode,
    error: [],
  };
  return data;
};
