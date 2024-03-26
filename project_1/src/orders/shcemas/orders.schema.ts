import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Orders{
    @Prop({unique:true})
    userId: string;

    @Prop()
    orderName:string;
   
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);