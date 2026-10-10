import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { BudgetsService } from './budgets.service';
import type { Budget, BudgetUsage } from './budget.types';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Get()
  findAll(@Query('month') month: string): Budget[] {
    return this.budgetsService.findAll(month);
  }

  @Get('usage')
  getUsage(@Query('month') month: string): BudgetUsage[] {
    return this.budgetsService.getUsage(month);
  }

  @Post()
  create(@Body() dto: CreateBudgetDto): Budget {
    return this.budgetsService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBudgetDto): Budget {
    return this.budgetsService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.budgetsService.remove(id);
  }
}
