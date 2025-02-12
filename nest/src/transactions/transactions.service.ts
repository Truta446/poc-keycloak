import { TenantService } from './../tenant/tenant/tenant.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction) private transactionModel: typeof Transaction,
    private tenantService: TenantService
  ) {}

  public create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create({
      ...createTransactionDto,
      subdomain: this.tenantService.subdomain
    });
  }

  public findAll() {
    console.log(this.tenantService.subdomain);
    return this.transactionModel.findAll({
      where: {
        subdomain: this.tenantService.subdomain
      }
    });
  }

  public findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  public update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  public remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
