import { ServiceObj, ServiceList } from './service-data';

export class UserData {
  id: number;
  username = '';
  serviceList: ServiceObj[];

  /* constructor(opt: {
    id?: number,
    username?: string,
    serviceList?: ServiceObj[]
  }) {
    this.id = opt.id || 0;
    this.username = opt.username || '';
    this.serviceList = opt.serviceList || [];
  } */
}
