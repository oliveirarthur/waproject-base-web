import IUser from 'interfaces/models/order';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class UserService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IUser>> {
    return this.apiService.get('/order', params);
  }

  public save(model: Partial<IUser>): Observable<IUser> {
    return this.apiService.post('/order', model);
  }

  public delete(id: number): Observable<void> {
    return this.apiService.delete(`/order/${id}`);
  }
}

const orderService = new UserService(apiService);
export default orderService;
