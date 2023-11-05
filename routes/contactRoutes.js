const express = require('express')//CRUD
const router = express.Router();
const { getContacts, createContact, getContact, deleteContact, updateContact } = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

// router.route('/').get(getContacts)
// router.route('/').post(createContact)
// router.route('/:id').get(getContact)
// router.route('/:id').delete(deleteContact)
// router.route('/:id').put(updateContact)

router.use(validateToken);
router.route('/').get(getContacts).post(createContact)
router.route('/:id').get(getContact).delete(deleteContact).put(updateContact)

module.exports = router;