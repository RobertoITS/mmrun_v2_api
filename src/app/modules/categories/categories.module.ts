import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crud } from '@nestjsx/crud';
import { CategoriesController } from '../../controllers/categories/categories.controller';
import { CategoriesService } from '../../services/categories/categories.service';
import { Category } from '../../entities/category.entity';

@Crud({
    model: {type: Category}
})
@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategoriesController],
    providers: [CategoriesService]
})
export class CategoriesModule {}
