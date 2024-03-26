import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderDto } from './dtos/update-order.dto';
import { Orders } from './shcemas/orders.schema';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    find(): Promise<Orders[]>;
    findOne(userId: string, orderId: string): Promise<Orders | null>;
    create(userId: string, orderData: CreateOrderDto): Promise<Orders>;
    update(userId: string, orderId: string, updatedOrderData: UpdateOrderDto): Promise<Orders | null>;
    remove(userId: string, orderId: string): Promise<Orders | null>;
}
