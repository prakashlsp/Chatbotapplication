import * as graphql from "@nestjs/graphql";
import { AdminConfigResolverBase } from "./base/adminConfig.resolver.base";
import { AdminConfig } from "./base/AdminConfig";
import { AdminConfigService } from "./adminConfig.service";

@graphql.Resolver(() => AdminConfig)
export class AdminConfigResolver extends AdminConfigResolverBase {
  constructor(protected readonly service: AdminConfigService) {
    super(service);
  }
}
