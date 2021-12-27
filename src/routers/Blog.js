const router = require('express').Router();
const {index, read, search} = require('../controllers/Blog');

router.get('/', index);
router.get('/:id', read);
router.post('/',search);


module.exports = router;