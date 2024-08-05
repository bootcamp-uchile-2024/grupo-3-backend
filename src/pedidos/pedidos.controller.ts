import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { Response } from 'express';


@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  findAll(@Res() res: Response) {
    const result = this.pedidosService.findAll();
    res.json({ message: result });
  }
}
