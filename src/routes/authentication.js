const express = require('express');
const router = express.Router();
const Swal = require('sweetalert2');
const { body, validationResult } = require('express-validator');
const pool = require('../database');

const passport = require('passport');
const { isLoggedIn,isNotLoggedIn } = require('../lib/auth');

// SIGNUP
router.get('/signup', isNotLoggedIn, (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}));

// SINGIN
router.get('/signin', (req, res) => { 
  res.render('auth/signin');
});




router.post('/signin',isNotLoggedIn, (req, res, next) => {
  body('username', 'Username is Required').isEmail();
  body('password', 'Password is Required').notEmpty();
  const errors = validationResult(req);;
  if (errors.length > 0) {
    req.Swal('message', errors[0].msg);
    res.redirect('/signin');
  }
  passport.authenticate('local.signin', {
    successRedirect: '/principal',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout(req.user, err => {
    if(err) return next(err);
    res.redirect("/signin");
  });
});



module.exports = router;

