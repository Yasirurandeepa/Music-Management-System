var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var UserController = require('./controllers/user.controller');
var HallController = require('./controllers/hall.controller');
var ClassController = require('./controllers/class.controller');
var StudentController = require('./controllers/student.controller');


var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server working....");
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});

//------------------------------user entity-----------------------------------------------------------------------------
app.post("/get_user", (req, res) => {   //  get specific user according to username and password
  UserController.getUser(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/get_user_detail", (req, res) => {   //  get specific user according to username ( not include password, include user type)
  UserController.getUserDetail(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/get_users", (req, res) => {   //  get every user (admins and teachers)
  UserController.getUsers().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/get_admins", (req, res) => {   // get every user who are admins
  UserController.getAdmins().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/get_teachers", (req, res) => {   // get every user who are teachers
  UserController.getTeachers().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

//------------------------------hall entity-----------------------------------------------------------------------------

app.post("/get_hall", (req, res) => {   //  get every hall
  HallController.getHall(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/get_halls", (req, res) => {   //  get every hall
  HallController.getHalls().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/get_ID", (req, res) => {   //  get every hall
  HallController.getNextId().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/add_new_hall", (req, res) => {
  HallController.addNewHall(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/update_hall", (req, res) => {
  HallController.updateHall(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/remove_hall", (req, res) => {
  HallController.removeHall(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

//------------------------------class entity-----------------------------------------------------------------------------

app.post("/get_class", (req, res) => {   //  get every hall
  ClassController.getClass(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/get_classes", (req, res) => {   //  get every hall
  ClassController.getClasses().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/get_c_ID", (req, res) => {   //  get every hall
  ClassController.getNextId().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/add_new_class", (req, res) => {
  ClassController.addNewClass(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/update_class", (req, res) => {
  ClassController.updateClass(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/remove_class", (req, res) => {
  ClassController.removeClass(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

//------------------------------Student entity-----------------------------------------------------------------------------

app.post("/get_student", (req, res) => {   //  get every hall
  StudentController.getStudent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/get_students", (req, res) => {   //  get every hall
  StudentController.getStudents().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/get_s_ID", (req, res) => {   //  get every hall
  StudentController.getNextId().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/add_new_student", (req, res) => {
  StudentController.addNewStudent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/enroll_student", (req, res) => {
  StudentController.enrollStudent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});


app.patch("/update_student", (req, res) => {
  StudentController.updateStudent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/remove_student", (req, res) => {
  StudentController.removeStudent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
