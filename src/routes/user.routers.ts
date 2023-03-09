
import express from 'express'
import { addUsers, allUsers, deletedUser, findUser } from '../controllers/user.controller'

const router = express.Router()

router.get('/',allUsers)
      .post('/',addUsers)
      .get('/:id',findUser)
      .delete('/:id',deletedUser)
export default router