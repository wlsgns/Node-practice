const User = require('../models/user');

exports.follow = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) { // req.user.id가 followerId, req.params.id가 followingId
      await user.addFollowing(parseInt(req.params.id, 10));
      res.send('success');
    } else {
      res.status(404).send('no user');
    }
    
  } catch (error) {
    console.error(error);
    next(error);
  }

};
exports.unfollow = async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { id: req.user.id } });
      if (user) { // req.user.id가 followerId, req.params.id가 followingId
        await user.removeFollowing(parseInt(req.params.id, 10));
        res.send('success');
      } else {
        res.status(404).send('no user');
      }
      
    } catch (error) {
      console.error(error);
      next(error);
    }
  
  };

  exports.name_fix = async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { id: req.user.id } });
      if (user) { // req.user.id가 followerId, req.params.id가 followingId
          let new_nick = req.body.new_nick;

          await User.update({ nick: new_nick }, { where: { id: req.user.id } });

        res.redirect('/profile_fix');
      } else {
        res.status(404).send('no user');
      }
      
    } catch (error) {
      console.error(error);
      next(error);
    }
  
  };

  