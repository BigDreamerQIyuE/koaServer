// mysql test code
const mysql = require("mysql")
const config = require("../config")
const connection = mysql.createConnection(getStartEnv())

// 数据库工具函数
function connectDB() {
  connection.connect((err) => {
    if (err) {
      console.log("err: ", err)
    } else {
      console.log("db connect success")
    }
  })
}

function getStartEnv() {
  console.log(process.env.npm_lifecycle_event)

  const env = process.env.npm_lifecycle_event
  const devHostname = "bj-cdb-6blv90ga.sql.tencentcdb.com"
  const prdHostname = "172.21.16.13"

  return {
    host: env == "dev" || "start" ? devHostname : prdHostname,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: "school_info",
    port: env == "dev" || "start" ? "60226" : "3306",
  }
}

function syncQuery(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, res) => {
      if (err) reject(err)
      console.log(res)
      resolve(res)
    })
  })
}

// 业务逻辑函数
function signupUser(name, age) {}

async function queryAllStudent() {
  const res = await syncQuery("SELECT * from student", [])
  return res
}

async function queryStuNameById(id) {
  const sql = "SELECT name FROM `student` WHERE `stu_id` = ? LIMIT 50 OFFSET 0"
  const res = await syncQuery(sql, [id])
  return res
}

async function updateNameById(id, newName) {
  const sql = "update student set name = ? where stu_id = ?"
  const res = await syncQuery(sql, [newName, id])
  return res
}

exports.connectDB = connectDB
exports.queryAllStudent = queryAllStudent
exports.queryStuNameById = queryStuNameById
exports.updateNameById = updateNameById
exports.syncQuery = syncQuery
