const router = require("koa-router")()

router.prefix("/users")

router.get("/", async (ctx, next) => {
  ctx.body = "this is a users response!"
  await next()
})

router.get("/bar", async (ctx, next) => {
  ctx.body = "this is a users/bar response"
  await next()
})

router.post("/signup", async (ctx, next) => {
  console.log("sign up")
  await next()
})



module.exports = router
