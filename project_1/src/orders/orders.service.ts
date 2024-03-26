
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto } from './dtos/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Orders } from './shcemas/orders.schema';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Orders.name) private orderModel: Model<Orders>) {}

    async getAllOrders(): Promise<Orders[]> {
        return await this.orderModel.find();
    }

    async getOrderById(userId: string, orderId: string): Promise<Orders> {
        return await this.orderModel.findOne({ userId, orderId });
    }

    async createOrder(userId: string, orderData: CreateOrderDto):Promise<Orders> {
        const newOrder = { ...orderData, userId, orderId: Math.random().toString() };
        return await this.orderModel.create(newOrder);
    }

    async updateOrder(userId: string, orderId: string, updatedOrderData: UpdateOrderDto): Promise<Orders> {
        return await this.orderModel.findOneAndUpdate({ userId, orderId }, updatedOrderData, { new: true });
    }

    async deleteOrder(userId: string, orderId: string): Promise<any> {
        return await this.orderModel.findOneAndDelete({ userId, orderId });
    }
}
