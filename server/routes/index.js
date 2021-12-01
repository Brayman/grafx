const Router = require('express');
const UserController = require('../controllers/user');
const ScheduleController = require('../controllers/schedule')
const router = new Router();


const midl = function (req, res, next) {
    const TokenService = require('../service/token');
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
          console.log(authHeader);
        console.error('Пользователь не авторизован');
      }
      const accessToken = authHeader.split(' ')[1];
      if (!accessToken) {
        console.error('Пользователь не авторизован');
      }
      const userData = TokenService.valAccessTok(accessToken);
      req.user = userData;
      next();
    } catch (error) {
      console.error('Пользователь не авторизован');
    }
  }

router.post('/registration', UserController.registration);
router.post('/schedule', ScheduleController.set_schedule);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);
router.get('/user',midl , UserController.getUser);


module.exports = router;