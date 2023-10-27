import * as Knex from "knex";
import { config, loadConfig } from "@lcdev/app-config";
import * as path from "path";

export interface DatabaseConfig {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
  debug?: boolean;
  ssl: boolean;
  serverCa?: string;
  clientKey?: string;
  clientCert?: string;
}

export const migrationDir = path.join(
  __dirname,
  "..",
  "..",
  "dist",
  "lib",
  "migrations"
);

export enum Knexion {
  Defult = "default"
}

const knexions: { [key: string]: Knex } = {};

export const getKnex = (name: Knexion = Knexion.Defult): Knex => {
  if (!knexions[name]) {
    throw new Error(
      `Called getKnex(${name}) without that connection being initialized`
    );
  }

  return knexions[name];
};
export const connect = (
  config: DatabaseConfig,
  name = Knexion.Defult
): Knex => {
  const { debug, ...connectionConfig } = config;

  let socketPath;

  const isProdOrStaging =
    process.env.NODE_ENV &&
    (process.env.NODE_ENV.toUpperCase() === "STAGING" ||
      process.env.NODE_ENV.toUpperCase() === "PRODUCTION" ||
      process.env.NODE_ENV.toUpperCase() === "PROD");

  if (isProdOrStaging) {
    socketPath = connectionConfig.host;
  }

  knexions[name] = Knex({
    client: "postgres",
    connection: {
      ...connectionConfig,
      socketPath,
      ssl: connectionConfig.ssl
        ? {
            rejectUnauthorized: false,
            ca: connectionConfig.serverCa,
            key: connectionConfig.clientKey,
            cert: connectionConfig.clientCert
          }
        : connectionConfig.ssl
    },
    migrations: {
      directory: migrationDir,
      extension: "js",
      tableName: "migration"
    }
  });

  return knexions[name];
};
