// [PAGINATION]
import * as Koa from "koa";

const PAGINATION_OFFSET: Number = 0;
const PAGINATION_LIMIT: Number = 15;
const PAGINATION_ORDER: String = "desc";
const PAGINATION_ORDER_BY: String = "id";

const PAGINATION_ABS_LIMIT: Number = 1000;

interface IPagination {
  offset: Number;
  limit: Number;
  order: String;
  by: String;
  hardLimit: Number | Boolean;
  modelName: String | Boolean;
}

export const pagination = (ctx: Koa.Context, next: Koa.Next) => {
  try {
    ctx.state.getPagination = ({
      offset = 0,
      limit = 15,
      order = "desc",
      by = "id",
      hardLimit = false,
      modelName = false
    }: IPagination) => {
      const q = ctx.request.query;
      const _query = {
        offset:
          q.offset && typeof +q.offset === "number"
            ? +q.offset
            : PAGINATION_OFFSET,
        limit:
          q.limit && typeof +q.limit === "number" ? +q.limit : PAGINATION_LIMIT,
        order:
          q.order && typeof q.order === "string" ? q.order : PAGINATION_ORDER,
        // by: (typeof q.by === "string") ? q.by : PAGINATION_ORDER_BY,
        by: PAGINATION_ORDER_BY // TODO: can be attached to (modelName.<fied: by is required => esle: id as default>)
      };

      const _order =
        typeof _query.order === "string"
          ? _query.order.trim().toLowerCase()
          : typeof order === "string"
          ? order.trim().toLowerCase()
          : PAGINATION_ORDER;

      limit =
        Math.floor(+_query.limit) > 0
          ? Math.floor(+_query.limit)
          : Math.floor(+limit) > 0
          ? Math.floor(+limit)
          : PAGINATION_LIMIT;

      if (Math.floor(+hardLimit) > 0 && hardLimit < limit)
        limit = Number(hardLimit);

      if (Math.floor(+limit) < 0) limit = PAGINATION_LIMIT;

      if (limit > PAGINATION_ABS_LIMIT) limit = PAGINATION_ABS_LIMIT;

      offset =
        Math.floor(+_query.offset) > 0
          ? Math.floor(+_query.offset)
          : Math.floor(+offset) > 0
          ? Math.floor(+offset)
          : PAGINATION_OFFSET;

      if (Math.floor(+offset) < 0) offset = PAGINATION_OFFSET;

      by = (
        typeof _query.by === "string" && _query.by.trim().length
          ? _query.by.trim()
          : PAGINATION_ORDER_BY
      ).replace(/[^\w\d\_\-]/g, "");

      // TODO: if required sorting by table.<key>
      // if( !modelName || !getModel(modelName).allowedSortKey(by) ){
      //   by = PAGINATION_ORDER_BY;
      // }

      const search =
        ctx.query &&
        typeof ctx.query.search === "string" &&
        ctx.query.search.length
          ? ctx.query.search.replace(/[^\w\d\_\.\#\+\?\@\-\=\*]/gi, "").trim()
          : "";

      return {
        offset: offset,
        limit: limit,
        order: _order === "desc" ? "desc" : "asc",
        by,
        search
      };
    };

    return next();
  } catch (e: any) {
    return next();
    console.error(` #middleware (pagination): ${e.message} `);
  }
};
