import { SelectQueryBuilder } from 'typeorm';
import { PaginationDto } from './dto/pagination.dto';

export class PaginationService {
  protected async paginate<T>(
    query: SelectQueryBuilder<T>,
    filter: PaginationDto,
  ) {
    let { page, pageSize } = filter;
    if (!page) page = 1;
    if (!pageSize) pageSize = 30;

    query.skip((page - 1) * pageSize);
    query.take(pageSize);

    const [records, totalCount] = await query.getManyAndCount();
    const totalPage = Math.ceil(totalCount / pageSize);

    return {
      records,
      metadata: {
        currentPage: page,
        pageSize,
        totalCount,
        totalPage,
      },
    };
  }
}
