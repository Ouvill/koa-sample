import Koa from "koa";
import logger from "koa-logger";
import router from "./routes/basic";

const app = new Koa();

//error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = ctx.status || 500;
    ctx.body = error.message;
    ctx.app.emit("error", error, ctx);
  }
});

if (process.env.NODE_ENV !== "production") {
  app.use(logger());
}

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});

export default server;
