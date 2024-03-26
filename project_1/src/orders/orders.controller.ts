// orders.controller.ts
import { Controller, Get, Param, Post, Body, Patch, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto } from './dtos/update-order.dto';
import { Orders } from './shcemas/orders.schema';

@Controller('users/:userId/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async find(): Promise<Orders[]> {
    return await this.ordersService.getAllOrders();
  }

  @Get(':orderId') 
  async findOne(@Param('userId') userId: string, @Param('orderId') orderId: string): Promise<Orders | null> {
    return this.ordersService.getOrderById(userId, orderId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Param('userId') userId: string, @Body() orderData: CreateOrderDto): Promise<Orders> {
    return this.ordersService.createOrder(userId, orderData);
  }

  @Patch(':orderId') 
  async update(@Param('userId') userId: string, @Param('orderId') orderId: string, @Body() updatedOrderData: UpdateOrderDto): Promise<Orders | null> {
    return this.ordersService.updateOrder(userId, orderId, updatedOrderData);
  }

  @Delete(':orderId') 
  async remove(@Param('userId') userId: string, @Param('orderId') orderId: string): Promise<Orders | null> {
    return this.ordersService.deleteOrder(userId, orderId);
  }
}
