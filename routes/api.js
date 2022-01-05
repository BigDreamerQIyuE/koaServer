const router = require("koa-router")()

router.prefix("/api")

router.get("/", function (ctx, next) {
  ctx.body = "api response!"
})

router.get("/userinfo", function (ctx, next) {
  ctx.body = { name: "fuck", age: 32 }
})

router.post("/postname", async (ctx, next) => {
  ctx.body = { name: "fuck postname" }
})

module.exports = router
