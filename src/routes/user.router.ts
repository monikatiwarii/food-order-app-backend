
import express = require('express')
import { addUsers, allUsers, deletedUser, findUser } from '../controllers/user.controller'
import { fetchAllUser } from '../services/user.service'
const router = express.Router()


router.get('/',allUsers)
    .post('/',addUsers)
    .get('/:id',findUser)
    .delete('/:id',deletedUser)
export default router