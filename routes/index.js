const router = require("koa-router")()

const profile = {
  name: "luchang",
  age: 33,
  id: 17081103,
  work: "pm",
}

router.get("/ver", async (ctx, next) => {
  ctx.body = { version: "1921" }
  await next()
})

router.get("/getNameById", async (ctx, next) => {
  const reqId = ctx.query.id

  if (reqId == profile.id) {
    ctx.body = {
      success: true,
      name: profile.name,
    }
  } else {
    ctx.body = {
      success: false,
      name: `can't find ${reqId}`,
    }
  }

  await next()
})

router.post("/updateNameById", async (ctx, next) => {
  const reqBody = ctx.request.body
  const reqId = reqBody.id
  const reqName = reqBody.name

  if (reqId == profile.id) {
    profile.name = reqName
    ctx.body = {
      success: true,
      id: profile.id,
      name: profile.name,
    }
  } else {
    ctx.body = {
      success: false,
    }
  }

  await next()
})

module.exports = router
