import { IBaseService } from './interfaces/base.service.interface';
import { Pagination } from '@vunam2000/common-libs';

export class BaseService implements IBaseService {
  protected pagination: Pagination;

  constructor() {
    this.pagination = Pagination.getInstance();
  }
}
