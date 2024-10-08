import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // Imprimir el estatus y el mensaje en la consola:
    console.log(
      `Status filterException: ${status} Mensaje: ${exception.message}`,
    );

    // Obtener la respuesta de la excepción
    const exceptionResponse = exception.getResponse();

    // Si la respuesta es un objeto, úsalo directamente
    const responseBody =
      typeof exceptionResponse === 'object'
        ? exceptionResponse
        : {
            statusCode: status,
            message: exception.message,
            path: request.url,
          };

    response.status(status).json(responseBody);
  }
}
