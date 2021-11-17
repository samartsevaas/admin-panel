import { BaseService } from "../base";

export class AuthService extends BaseService {
  async sendAuth(params) {
    const data = await this.send({
      url: "login",
      method: "post",
      data: params,
    });
    return data;
  }
}
