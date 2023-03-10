const router = require("express").Router();
const { User } = require("../models");

// // Prevent non logged in users from viewing the homepage
// router.get("/", async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("homepage", {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//http://localhost:3001/
router.get('/',(req,res) => {
  session=req.session;
  // if(session != null && session.userid){
      res.render('homepage');
  // }else
  // res.render('login',{root:__dirname})
});


//http://localhost:3001/login
router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

  res.render("login");
});


//http://localhost:3001/dashboard
router.get('/dashboard',(req,res) => {
  session=req.session;
  // if(session != null && session.userid){
      res.render('dashboard');
  // }else
  // res.render('login',{root:__dirname})
});

//http://localhost:3001/DailyConsumption
router.get('/DailyConsumption',(req,res) => {
  session=req.session;
  // if(session != null && session.userid){
      res.render('DailyConsumption');
  // }else
  // res.render('login',{root:__dirname})
});


module.exports = router;


