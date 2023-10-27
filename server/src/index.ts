import { config, loadConfig } from "@lcdev/app-config";
import * as Koa from "koa";
import * as Router from "koa-router";
import { DefaultContext, DefaultState } from "koa";
import * as cors from "koa2-cors";
import * as path from "path";
import { join } from "path";
import * as serve from "koa-static";
import {
  bodyparser,
  Context,
  createRouter,
  createRouterFactories,
  HttpMethod,
  nestedRouter,
  propagateValues
} from "@lcdev/router";
import { connect, Knexion } from "./lib/db";
import { customRequestInfo, pagination } from "./middlewares/common";

async function main() {
  await loadConfig();

  const knex = connect(config.database, Knexion.Defult);
  await knex.migrate.latest();
  await knex.seed.run({
    directory: `${__dirname}/lib/seeds`
  });

  const app: Koa<DefaultState, DefaultContext> = new Koa();
  // const router = new Router();
  //
  // router.prefix("/api");
  //
  // router.get("/products/hello", (ctx, next) => {
  //   ctx.body = "hello";
  // });

  // app
  //   .use(router.routes())
  //   .use(router.allowedMethods())
  //   .use((ctx, next) => {
  //     console.log({
  //       // statusCode: ctx.res.statusCode,
  //       // statusMessage: ctx.res.statusMessage,
  //       repsponse: ctx.response,
  //       request: ctx.request
  //       // res: ctx.res
  //     });
  //   });

  // const rateLimitSettings = {
  //   app,
  //   requestsLimit: 120,
  //   intervalLimitInMSeconds: 60 * 1000,
  //   showRateLimitingHeaders: true,
  //   onErrorBody: {
  //     success: false,
  //     status: 429,
  //     message: "Too Many Requests"
  //   }
  // };
  //
  // rateLimiter(rateLimitSettings);

  // app.use(
  //   bodyparser({
  //     formLimit: "40mb",
  //     jsonLimit: "40mb",
  //     textLimit: "40mb",
  //     onerror(err: any, ctx: Context) {
  //       ctx.throw(422, "body parse error");
  //     }
  //   })
  // );

  const port = 5000;

  const mainApi = nestedRouter(join(__dirname, "routes/main"));
  const internalApi = nestedRouter(
    join(__dirname, "routes/internal"),
    "/api/internal"
  );

  const rootRouter = await createRouterFactories([mainApi, internalApi]);

  app.use(propagateValues());

  app
    .use(rootRouter.routes())
    .use(rootRouter.allowedMethods())
    .use((ctx, next) => {
      console.log({
        // statusCode: ctx.res.statusCode,
        // statusMessage: ctx.res.statusMessage,
        repsponse: ctx.response,
        request: ctx.request
        // res: ctx.res
      });
    });

  // app.use(pagination);
  // app.use(customRequestInfo);
  //
  // app.use(
  //   cors({
  //     credentials: true,
  //     origin: "*"
  //   })
  // );

  app.listen(port, () => console.log(`Server was started on PORT ${port}`));

  // const publicHtml = path.resolve(__dirname, "./dev-console");
  //
  // app.use(
  //   serve(publicHtml, {
  //     maxage: 0,
  //     hidden: false,
  //     index: "index.html",
  //     defer: false,
  //     gzip: true,
  //     brotli: false,
  //     extensions: ["js", "html", "css"]
  //   })
  // );
}

main().catch((err) => {
  console.error("a fatal error occurred", err);
  process.exit(1);
});
