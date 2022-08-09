import { Request, Response } from "express";

class HelloWorld {
  async Hello(request: Request, response: Response) {
    return response.json('Hello World');
  }
}

export { HelloWorld };
