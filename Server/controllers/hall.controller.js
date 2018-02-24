const {connection} = require('../db.connection');

const getHall = (hall) => {        // query a selected hall from the database
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM hall WHERE h_no=?", [
      hall.h_no
    ], (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
  });
};

const getHalls = () => {        // query every hall from the database
  return new Promise((resolve, reject) => {
    connection.query("select * from hall",
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
  });
};

const addNewHall = (hall) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO hall VALUE(?,?,?)", [
        nextId,
        hall.size,
        hall.description
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

const updateHall = (hall) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE hall SET size=?, description=? WHERE h_no=?", [
      hall.size,
      hall.description,
      hall.h_no
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeHall = (hall) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM hall WHERE h_no=?", [
      hall.h_no
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const getNextId = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT h_no FROM hall ORDER BY h_no DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve(parseInt(result[0].h_no)+1);
      } else {
        resolve(1);
      }
    });
  });
};

module.exports = {getHalls, addNewHall, updateHall, removeHall, getNextId, getHall};
