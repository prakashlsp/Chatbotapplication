import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminConfigServiceBase } from "./base/adminConfig.service.base";

@Injectable()
export class AdminConfigService extends AdminConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
