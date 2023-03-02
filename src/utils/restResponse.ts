import { StringMappingType } from "typescript";

interface Success {
  success: boolean,
  message: string,
  payload: any,
  code: number,
  error: []
}

export const Success = (msg: string, dataGet: any = []) => {
  let data: Success = {
    success: true,
    message: msg,
    payload: dataGet,
    code: 200,
    error: []
  };

  return data;
};

export const Error = (dataGet: any, dataResponse:any = [], statusCode: number= 500) => {
  // List of common HTTP request code
  const codes = [400, 401, 404, 403, 422, 500];
  let msg: any = dataGet;

  // Get matched code
  const findCode = codes.find((code) => code == statusCode);
  if (!findCode) statusCode = 500;

  else statusCode = findCode;
  let data: Success = {
    success: false,
    message: msg,
    payload: dataResponse,
    code: statusCode,
    error: []
  };
  return data;
};
