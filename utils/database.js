// mysql test code
const mysql = require("mysql")
const connection = mysql.createConnection({
  host: "bj-cdb-6blv90ga.sql.tencentcdb.com",
  user: "root",
  password: "2017bjsgg",
  database: "school_info",
  port: 60226,
})

connection.connect((err) => {
  console.log("err: ", err)
})

connection.query("SELECT * from student", (error, results, fields) => {
  if (error) throw error
  console.log("The solution is: ", results[0])
})
