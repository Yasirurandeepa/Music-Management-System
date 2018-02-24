const {connection} = require('../db.connection');

const getClass = (cl) => {        // query a selected hall from the database
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM class WHERE c_no=?", [
      cl.c_no
    ], (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const getClasses = () => {        // query every class from the database
  return new Promise((resolve, reject) => {
    connection.query("select * from class",
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
  });
};

const addNewClass = (cl) => {             // add new class to the database
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO class VALUE(?,?,?,?,?,?,?)", [
        nextId,
        cl.monthly_fee,
        cl.start_date,
        cl.end_date,
        cl.day,
        cl.start_time,
        cl.end_time
      ], (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    }).catch((error) => {
      reject(error);
    });
  });
};

const updateClass = (cl) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE class SET monthly_fee=?, start_date=?, end_date=?, day=?, start_time=?, end_time=?, WHERE c_no=?", [
      cl.monthly_fee,
      cl.start_date,
      cl.end_date,
      cl.day,
      cl.start_time,
      cl.end_time,
      1
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeClass = (cl) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM class WHERE c_no=?", [
      cl.c_no
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const getNextId = () => {             // get next ID of the class
  return new Promise((resolve, reject) => {
    connection.query("SELECT c_no FROM class ORDER BY c_no DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve(parseInt(result[0].c_no)+1);
      } else {
        resolve(1);
      }
    });
  });
};

module.exports = {getNextId, getClasses, addNewClass, removeClass, updateClass, getClass};
