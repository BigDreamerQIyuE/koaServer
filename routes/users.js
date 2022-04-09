const router = require("koa-router")()
const db = require("../utils/database")
router.prefix("/user")

router.get("/getallstudent", async (ctx, next) => {
  const allStudent = await db.queryAllStudent()
  ctx.body = allStudent
  await next()
})

router.post("/signup", async (ctx, next) => {
  const body = ctx.request.body

  const sql =
    "insert into student(name,grade,phone_number,enter_year,wechat_number,age,stu_id) values (?,?,?,?,?,?,?)"
  await db.syncQuery(sql, [
    body.name,
    body.grade,
    body.phone_number,
    body.enter_year,
    body.wechat_number,
    body.age,
    body.stu_id,
  ])

  ctx.body = { msg: "success" }
  await next()
})

router.get("/getNameById", async (ctx, next) => {
  const reqId = ctx.query.id
  const dbres = await db.queryStuNameById(reqId)
  if (dbres.length == 1) {
    ctx.body = Object.assign({ msg: "success" }, dbres[0])
  } else {
    ctx.body = { msg: "notfound person" }
  }
  await next()
})

router.post("/updateNameById", async (ctx, next) => {
  const reqBody = ctx.request.body
  const reqId = reqBody.id
  const reqName = reqBody.name

  await db.updateNameById(reqId, reqName)
  ctx.body = { msg: "success" }

  await next()
})

module.exports = router
