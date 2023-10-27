import { config, loadConfig } from "@lcdev/app-config";
import * as process from "process";

const loadAppConfig = async () => {
  await loadConfig({ directory: "../../" });
  const { ...connectionConfig } = config.database;

  let socketPath;

  const isProdOrStaging =
    process.env.NODE_ENV &&
    (process.env.NODE_ENV.toUpperCase() === "STAGING" ||
      process.env.NODE_ENV.toUpperCase() === "PRODUCTION" ||
      process.env.NODE_ENV.toUpperCase() === "PROD");

  if (isProdOrStaging) {
    socketPath = connectionConfig.host;
  }

  return {
    client: "postgres",
    connection: {
      ...connectionConfig,
      socketPath,
      ssl: config.database.ssl
    },
    migrations: {
      directory: "migrations",
      extension: "ts",
      tableName: "migration"
    }
  };
};

module.exports = loadAppConfig();
