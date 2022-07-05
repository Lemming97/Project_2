const router = require('express').Router();
const { Comment } = require('../../models');
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'comment_text', 'user_id', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(dbPostData);
      res.render('edit-comments', { comments, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // check the session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbCommentData => {
          if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
          }
          res.json(dbCommentData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Comment.findByPk(req.params.id, {
    attributes: [
      'id', 
      'comment_text', 
      'post_id', 
      'user_id', 
      'created_at'],
    include: {
      model: User,
      attributes: ['username']
    },
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render('edit-comments', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/post.id/:id', withAuth, async (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'comment_text', 'user_id', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })

    const postedBy = req.userId;
    const comment = await CommentSchema.findById({ _id: comment.id });
    console.log(comment, postedBy);
  })


module.exports = router;