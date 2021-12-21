const Koa = require("koa")
const bodyparser = require("koa-bodyparser")

const app = new Koa()

app.use(bodyparser())

app.use(async (ctx, next) => {
  await next()

  ctx.append("Access-Control-Allow-Origin", "*")
  ctx.append("Access-Control-Allow-Headers", "Content-Type")

  ctx.body = { name: "luchang", age: 24, resData: "niubi" }
})

app.listen(3001)
