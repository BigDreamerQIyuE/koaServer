const Koa = require("koa")
const app = new Koa()
const bodyparser = require("koa-bodyparser")
const logger = require("koa-logger")
const static = require("koa-static")
const db = require("./utils/database")

const index = require("./routes/index")
const users = require("./routes/users")

// middlewares
app.use(bodyparser())
app.use(logger())
app.use(static(__dirname + "/public"))

//静态服务，自动匹配index.html
app.use(static(__dirname + "/dist"))

//日志打印
app.use(async (ctx, next) => {
  console.log("req body :", ctx.request.body)
  console.log("req query :", JSON.stringify(ctx.query))
  await next()
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx)
  ctx.body = "server error"
})

// init database
db.connectDB()
// db.queryAllStudent()

module.exports = app
