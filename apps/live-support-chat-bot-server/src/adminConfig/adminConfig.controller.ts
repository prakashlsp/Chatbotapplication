import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminConfigService } from "./adminConfig.service";
import { AdminConfigControllerBase } from "./base/adminConfig.controller.base";

@swagger.ApiTags("adminConfigs")
@common.Controller("adminConfigs")
export class AdminConfigController extends AdminConfigControllerBase {
  constructor(protected readonly service: AdminConfigService) {
    super(service);
  }
}
