import { AdminConfig as TAdminConfig } from "../api/adminConfig/AdminConfig";

export const ADMINCONFIG_TITLE_FIELD = "id";

export const AdminConfigTitle = (record: TAdminConfig): string => {
  return record.id?.toString() || String(record.id);
};
