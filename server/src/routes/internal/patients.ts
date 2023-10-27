import {
  bindRouteActions,
  bodyparser,
  emptySchema,
  err,
  HttpMethod,
  propagateErrors,
  propagateValues,
  route,
  RouteFactory
} from "@lcdev/router";
import { getKnex } from "../../lib/db";
import * as Knex from "knex";

type Dependencies = {
  kx: Knex;
};

const factory: RouteFactory<Dependencies> = {
  prefix: "/patients",

  getDependencies() {
    return {
      kx: getKnex()
    };
  },

  middleware: ({ kx }) => [
    propagateErrors(true),
    propagateValues(),
    bodyparser({
      jsonLimit: "40mb",
      formLimit: "40mb"
    })
  ],

  create(dependencies: Dependencies) {
    console.log("internal route");
    return bindRouteActions(dependencies, [
      route({
        path: "/status-options",
        method: HttpMethod.GET,
        schema: emptySchema(),
        async action(ctx) {
          try {
            console.log("run code");
            return "run code";
          } catch (error: any) {
            console.error(error);
            if (error.statusCode) {
              throw error;
            }
            throw err(
              500,
              "We encountered an error when getting the states codes options list. Please try again."
            );
          }
        }
      })
    ]);
  }
};

export default factory;
