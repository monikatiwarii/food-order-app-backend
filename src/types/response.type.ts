export interface IResponse {
    success: boolean;
    message: string | [] | Error;
    payload: [] | object;
    code: number;
    error: [];
  }
  
  export interface ISuccess {
  
  }
  
  export type IDataGet = object | [] | null 
  
  export interface IRespObj{
    valid: boolean
    data: object[] | string[] | any[]
    error?: string
  }