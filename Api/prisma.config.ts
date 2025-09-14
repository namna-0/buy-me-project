
import type { PrismaConfig } from "prisma";
import path from "node:path";
export default {
  // earlyAccess: true, // Removed as it is not part of PrismaConfig
  schema: path.join("prisma", "schema.prisma"),
} satisfies PrismaConfig;