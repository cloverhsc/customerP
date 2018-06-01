export class ServiceObj {
  name: string;
  title: string;
  constructor(opt: {
    name?: string,
    title?: string
  } = {}) {
    this.name = opt['name'] || '';
    this.title = opt['title'] || '';
  }
}

export class ServiceList {
  list: any[];
  constructor(option: ServiceObj[]) {
    this.list = new Array();
    option.forEach( (sv) => this.list.push(sv));
  }
}
