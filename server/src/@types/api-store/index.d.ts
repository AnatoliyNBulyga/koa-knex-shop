// AUTO GENERATED CODE
// Run app-config with 'generate' command to regenerate this file

import '@app-config/main';

export interface Config {
  app: App;
  database: Database;
}

export interface App {
  /**
   * The base URL for each environment
   */
  baseUrl: BaseURL;
  /**
   * Port for each environment
   */
  port: Port;
}

/**
 * The base URL for each environment
 */
export interface BaseURL {
  /**
   * The API Base URL
   */
  api: string;
  /**
   * The Client Base URL
   */
  client: string;
}

/**
 * Port for each environment
 */
export interface Port {
  /**
   * Port
   */
  api: number;
  /**
   * Port
   */
  client: number;
}

export interface Database {
  /**
   * GCP SQL client-cert.pem File
   */
  clientCert?: string;
  /**
   * GCP SQL client-key.pem File
   */
  clientKey?: string;
  /**
   * Database name
   */
  database: string;
  /**
   * Whether we're in debug mode
   */
  debug?: boolean;
  /**
   * Hostname of the database server
   */
  host: string;
  /**
   * Database password
   */
  password: string;
  /**
   * Port of the database server
   */
  port: number;
  /**
   * GCP SQL server-ca.pem File
   */
  serverCa?: string;
  /**
   * Whether to enable ssl when connecting to database
   */
  ssl: boolean;
  /**
   * Database user
   */
  user: string;
}

// augment the default export from app-config
declare module '@app-config/main' {
  export interface ExportedConfig extends Config {}
}
