import { AuthService } from "./auth";
import { entityService } from "./entity";

export default {
  auth: new AuthService(),
  cars: new entityService(),
};
