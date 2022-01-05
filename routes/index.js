const router = require("koa-router")()

router.get("/render", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  })
})

router.get("/page2", async (ctx, next) => {
  console.log("test console:", ctx.host)
  ctx.body = "koa2 string"
})

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  }
})

router.post("/string", async (ctx, next) => {
  console.log("post test :", ctx.request.body)
  console.log("post test :", ctx.bodytype)
  ctx.body = "test"
})

module.exports = router
