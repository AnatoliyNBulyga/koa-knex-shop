import * as Koa from "koa";
import { R, G, B, P, Y, W } from "../../../lib/tools/console/clr";
// import { err } from "@lcdev/router";

export const customRequestInfo = async (ctx: Koa.Context, next: Koa.Next) => {
  try {
    // ctx.state.method = () => { return {}; }
    let ip =
      ctx.headers["x-forwarded-for"] ||
      ctx.headers["x-real-ip"] ||
      ctx.request.ip ||
      "n/a";

    try {
      // is double:string[] ip [ip,ip]
      if (Array.isArray(ip) && ip.length >= 1) {
        ip = ip[0];
      } else if (ip.indexOf(",") !== -1) {
        // is double:string ip [ip,ip]
        if (ip.indexOf(":") === -1) {
          // not ipv6
          ip = ip.toString().split(",")[0].trim();
        }
      }
    } catch (e: any) {
      console.error(` #middleware (custom-request-info): ip: ${e.message} `);
    }

    let error = false;
    const start = Date.now();
    try {
      await next(); // wait for request to propogate and find target if any
    } catch (e: any) {
      e.status = e.statusCode || e.status || 500;
      console.log(`#${R(e.status)}: ${Y(e.message)}`);
      error = true;
    }
    const duration = +(Date.now() - start).toFixed(3);
    const success = +ctx.response.status === 200;

    const method =
      ctx.method.toUpperCase() === "GET" ? B(ctx.method) : G(ctx.method);

    const { status, message } = success
      ? {
          status: G(ctx.response.status),
          message: G(ctx.response.message)
        }
      : {
          status: R(ctx.response.status),
          message: R(ctx.response.message)
        };

    console.log(
      `#${method}: [${W(ip)}] ${P(ctx.request.path)}: ${status} ${W(
        "=>"
      )} [${message}] (${P(`${duration} msec)`)}`
    );
  } catch (e: any) {
    console.error(` #middleware (custom-request-info): ${e.message} `);
  }
};
