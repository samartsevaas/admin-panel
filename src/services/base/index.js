import axios from "axios";

const authUrl = "https://api-factory.simbirsoft1.com/api/auth/";
const authToken = "5e25c641099b810b946c5d5b";
const basicToken = `Basic MTFkN2M5Zjo0Y2JjZWE5NmRl`;
export class BaseService {
  constructor() {
    this.api = null;
    this.instance();
  }
  instance() {
    this.api = axios.create({
      baseURL: authUrl,
      headers: {
        Authorization: basicToken,
        "X-Api-Factory-Application-Id": authToken,
      },
    });
  }
  async send({ method = "post", params = {}, data = {}, url = {} }) {
    const {
      data: { data: response },
    } = await this.api({ method, params, data, url });
    return response;
  }
}
