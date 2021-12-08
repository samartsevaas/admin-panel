import { BaseService } from "../base";

export class entityService extends BaseService {

    async getListOfCars() {
        const data = await this.send({
            url: "car",
            method: "get",
        });
        return data;
    }
}