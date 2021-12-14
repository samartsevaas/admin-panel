import { BaseService } from "../base";

export class entityService extends BaseService {
  async getListOfCars(page, notes = 10) {
    const data = await this.send({
      url: `car/?page=${page}&limit=${notes}`,
      method: "get",
    });
    return data;
  }
  async getListOfCarsByCategory(page, notes = 10, selected) {
    const data = await this.send({
      url: `car/?page=${page}&limit=${notes}&categoryId=${selected}`,
      method: "get",
    });
    return data;
  }
  async getOrders(page, notes = 10) {
    const data = await this.send({
      url: `order/?page=${page}&limit=${notes}`,
      method: "get",
    });
    return data;
  }
  async getOrdersByCity(page, notes = 10, selected) {
    const data = await this.send({
      url: `order/?limit=${notes}&page=${page}&cityId=${selected}`,
      method: "get",
    });
    return data;
  }
}
