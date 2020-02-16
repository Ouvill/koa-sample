import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
const app = new Koa();
const router = new Router();

if (process.env.NODE_ENV !== "production") {
  app.use(logger());
}

router.get("/", (ctx, next) => {
  ctx.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});

export default server;
