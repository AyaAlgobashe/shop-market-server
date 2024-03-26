import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
    imports:[MongooseModule.forRoot('mongodb://localhost/library')]
   
})
export class MongoModule {}
