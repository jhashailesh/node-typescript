import { IErrorResponse } from "./../utils/commonInterface";
import { Request, Response } from "express";
class ResponseHandler implements IErrorResponse {

  status = 1;
  statusCode = 200;
  error?:string;
  message = "Success";
  description?:string;
  payload?:any;
  req?:Request;
  res?:Response;

  public setData(message: string, payload?: any, description?:string){
    this.message = message;
    this.description = description;
    this.payload = payload;
  }

  public setErrorData(error: string, message: string, description?:string){
    this.message = message;
    this.description = description;
    this.error = error;
  }

  // Call this method when creating any data into database
  // Assign custom messages and descriptions.

  reqRes(req: Request, res: Response){
    this.req = req;
    this.res = res;
    return this;
  }

  onCreate(message: string, payload?: any, description?:string){
    this.statusCode = 201;
    this.setData(message, payload, description);
    return this;
  }

  onFetch(message: string, payload?: any, description?:string){
    this.statusCode = 200;
    this.setData(message, payload, description);
    return this;
  }

  onClientError(statusCode:number, error:string, message: string, description?:string){
    this.statusCode = statusCode || 200;
    this.setErrorData(error, message,description);
    return this;
  }

  onServerError(error:string, message: string, description?:string){
    this.statusCode = 500;
    this.setErrorData(error, message,description);
    return this;
  }

  /**
   * Send response to the client. This will be unique for all response. and 
   * it can make things very easy for us. For debugging, logging, future 
   * changes and etc. Please feel free to enhance the way.
   */
  send(): void{

    if(!this.req || !this.res){
      throw new Error("please set reqRes function to get start");
    }
    const response: IErrorResponse = {
      status : this.status,
      error: this.error,
      statusCode: this.statusCode,
      message: this.message,
      description: this.description,
      payload: this.payload
    }
    this.res.status(this.statusCode).json(response);
  }

}

export default new ResponseHandler()
