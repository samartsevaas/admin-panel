import { BaseService } from "../base";
const authUrl = "https://api-factory.simbirsoft1.com/api/auth/";
export class AuthService extends BaseService {
  constructor(api) {
    super(api);
    this.api.defaults.baseURL = authUrl;
  }
  async sendAuth(params) {
    const {
      access_token: access,
      refresh_token: refresh,
      token_type: typeUser,
    } = await this.send({
      url: "login",
      method: "post",
      data: params,
    });
    localStorage.setItem("accessToken", JSON.stringify(access));
    localStorage.setItem("refreshToken", JSON.stringify(refresh));
    localStorage.setItem("typeUser", JSON.stringify(typeUser));
  }
}
