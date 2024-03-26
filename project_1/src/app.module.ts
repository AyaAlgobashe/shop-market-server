import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { MongoModule } from './mongo/mongo.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, OrdersModule,MongoModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

