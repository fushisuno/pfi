module.exports = {
  userSection: (req, res) => {
    if(req.session.sessionUser){
      res.render('pug/pages/login', {isUser: true});
      return;
    }
    
    res.render('pug/pages/login', {isUser: false});
      return;
  }
}