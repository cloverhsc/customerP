import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const Clover = [
      {
        id: 0,
        username: 'Clover',
        serviceList: []
      }
    ];
    return {Clover};
  }

}
