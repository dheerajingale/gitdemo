const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project2",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("CONNECTION SUCCESS!!");
  await connection.endAsync();
}

async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection success");

  let sql = `INSERT INTO user(username,password) values(?,?)`;
  await connection.queryAsync(sql, [user.username, user.password]);
  await connection.endAsync();
  console.log("Record Added!!!");
}

async function selectUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  //console.log("connection success");

  let sql = `select * from user`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();

  //console.log(list);
  return list;
}

//selectUser();

module.exports = { selectUser, addUser };

//connectionCheck();
//const user = { username: "dheeraj", password: "gdffbgdfg" };
//addUser(user);
