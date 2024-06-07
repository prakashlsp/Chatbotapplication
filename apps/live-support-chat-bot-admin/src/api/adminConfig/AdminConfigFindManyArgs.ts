import { AdminConfigWhereInput } from "./AdminConfigWhereInput";
import { AdminConfigOrderByInput } from "./AdminConfigOrderByInput";

export type AdminConfigFindManyArgs = {
  where?: AdminConfigWhereInput;
  orderBy?: Array<AdminConfigOrderByInput>;
  skip?: number;
  take?: number;
};
