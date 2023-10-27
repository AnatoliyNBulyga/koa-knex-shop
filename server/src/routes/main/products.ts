import {
  bindRouteActions,
  emptySchema,
  HttpMethod,
  propagateValues,
  route,
  RouteFactory
} from "@lcdev/router";
import * as Knex from "knex";
import { getKnex } from "../../lib/db";

// we'll leave this blank for now
type Dependencies = {
  kx: Knex;
};

const factory: RouteFactory<Dependencies> = {
  getDependencies() {
    // here, we return whatever Dependencies is
    return {
      kx: getKnex()
    };
  },

  create(dependencies) {
    console.log("main route");

    // here, bindRouteActions adds `dependencies` as `this` in actions
    // it's not required (returning an array is fine), but it makes things easier
    return bindRouteActions(dependencies, [
      // here, we'll wrap one of the route definitions in the `route` function
      // route is optional (an object works), but it adds better type inference
      route({
        path: "/test",
        method: HttpMethod.GET,
        async action(ctx) {
          // returning here is the same as setting `ctx.body`
          return { hello: "world!" };
        }
      })
    ]);
  }
};

console.log("factory.create ", factory.create({ kx: getKnex() }));

// important - default export needs to be a RouteFactory or a class implementing it
export default factory;
