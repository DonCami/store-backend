import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [ProductsModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
