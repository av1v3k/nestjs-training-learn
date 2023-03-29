import { ExceptionFilter } from '@nestjs/common';
import { Request, Response } from '@nestjs/common';


export class HttpExeceptionFilter implements ExceptionFilter {
  catch() {}

}