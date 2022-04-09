const router = require("koa-router")()

router.get("/ver", async (ctx, next) => {
  ctx.body = { version: "1921" }
  await next()
})

module.exports = router
