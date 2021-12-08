import axios from "axios";

const baseUrl = "https://api-factory.simbirsoft1.com/api/db/";
const authTokenStatic = "5e25c641099b810b946c5d5b";
const basicToken = `Basic MTFkN2M5Zjo0Y2JjZWE5NmRl`;

export class BaseService {
  constructor() {
    this.api = null;
    this.accessToken = localStorage.getItem("accessToken");
    this.refreshToken = localStorage.getItem("refreshToken");
    this.typeUser = localStorage.getItem("typeUser");
    this.instance();
    this.interceptor();
  }
  instance() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        "X-Api-Factory-Application-Id": authTokenStatic,
      },
    });
  }
  interceptor() {
    this.api.interceptors.request.use(
       (config) => {
         console.log((this))
        if (this.accessToken) {
          config.headers.Authorization = `${this.typeUser} ${this.accessToken}`;
      }else {
          config.headers.Authorization = basicToken;
        }
        return config;
    });
  }
  async send({ method = "post", params = {}, data = {}, url = {} }) {
    const { data: res } = await this.api({ method, params, data, url });
    return res;
  }
}
