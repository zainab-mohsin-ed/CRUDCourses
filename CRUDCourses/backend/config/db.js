const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Microservices*00",
database:"CoursesContent" 
})

module.exports = db;