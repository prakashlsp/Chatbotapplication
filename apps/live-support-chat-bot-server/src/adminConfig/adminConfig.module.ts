import { Module } from "@nestjs/common";
import { AdminConfigModuleBase } from "./base/adminConfig.module.base";
import { AdminConfigService } from "./adminConfig.service";
import { AdminConfigController } from "./adminConfig.controller";
import { AdminConfigResolver } from "./adminConfig.resolver";

@Module({
  imports: [AdminConfigModuleBase],
  controllers: [AdminConfigController],
  providers: [AdminConfigService, AdminConfigResolver],
  exports: [AdminConfigService],
})
export class AdminConfigModule {}
