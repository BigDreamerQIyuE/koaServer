// mysql test code
const mysql = require("mysql")
const connection = mysql.createConnection(getStartEnv())

function connectDB() {
  connection.connect((err) => {
    if (err) {
      console.log("err: ", err)
    } else {
      console.log("db connect success")
    }
  })
}

function queryAllStudent() {
  connection.query("SELECT * from student", (error, results, fields) => {
    if (error) throw error
    console.log("The solution is: ", results[0])
  })
}

function signupUser() {}

exports.connectDB = connectDB
exports.queryAllStudent = queryAllStudent

function getStartEnv() {
  console.log(process.env.npm_lifecycle_event)

  const env = process.env.npm_lifecycle_event
  const devHostname = "bj-cdb-6blv90ga.sql.tencentcdb.com"
  const prdHostname = "172.21.16.13"

  return {
    host: env == "dev" || "start" ? devHostname : prdHostname,
    user: "koa",
    password: "2017bjsgg",
    database: "school_info",
    port: env == "dev" || "start" ? "60226" : "3306",
  }
}
