import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryProductService } from './category-product.service';
import { CreateCategoryProductDto } from './dto/create-category-product.dto';
import { UpdateCategoryProductDto } from './dto/update-category-product.dto';

@Controller('category-product')
export class CategoryProductController {
  constructor(
    private readonly categoryProductService: CategoryProductService,
  ) {}

  @Post()
  create(@Body() createCategoryProductDto: CreateCategoryProductDto) {
    return this.categoryProductService.create(createCategoryProductDto);
  }

  @Get()
  findAll() {
    return this.categoryProductService.findAll();
  }

  @Get(':name_category')
  findByCategory(@Param('name_category') name_category: string) {
    return this.categoryProductService.findByCategory(name_category);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryProductDto: UpdateCategoryProductDto,
  ) {
    return this.categoryProductService.update(id, updateCategoryProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryProductService.remove(id);
  }
}
