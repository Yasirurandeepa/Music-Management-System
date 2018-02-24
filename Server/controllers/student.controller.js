const {connection} = require('../db.connection');


const getStudent = (student) => {        // query a selected student from the database
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM student WHERE s_id=?", [
      student.s_id
    ], (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const getStudents = () => {        // query every student from the database
  return new Promise((resolve, reject) => {
    connection.query("select * from student",
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
  });
};

const addNewStudent = (student) => {             // add new student to the database
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO student VALUE(?,?,?,?,?,CURRENT_DATE)", [
        nextId,
        student.name,
        student.contact,
        student.address,
        student.dob
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

const enrollStudent = (student) => {             // add new student to the database
  return new Promise((resolve, reject) => {
    console.log(student.s_id);
      connection.query("INSERT INTO study VALUE(?,?,?,null,?,?)", [
        student.class_id,
        student.s_id,
        student.start_date,
        student.total,
        student.total
      ], (err, res) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(res);
      }).catch((error) => {
      reject(error);
    });
  });
};

const updateStudent = (student) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE student SET name=?, contact=?, address=?, d_o_b=?, reg_date=CURRENT_DATE WHERE s_id=?", [
      student.name,
      student.contact,
      student.address,
      student.dob,
      student.s_id
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeStudent = (student) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM student WHERE s_id=?", [
      student.s_id
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
    connection.query("SELECT s_id FROM student ORDER BY s_id DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve(parseInt(result[0].s_id)+1);
      } else {
        resolve(150000);
      }
    });
  });
};

module.exports = {getNextId, getStudent, getStudents, addNewStudent, removeStudent, updateStudent, enrollStudent};
