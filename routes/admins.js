import { Router } from 'express'
import * as adminCtrl from '../controllers/admins.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes =========
router.post('/login', adminCtrl.login)

// ========= Protected Routes =========
// ========= TODO:  Add Authentication =======
router.use(decodeUserFromToken)
router.get('/', checkAuth, adminCtrl.index)
router.post('/create', checkAuth, adminCtrl.create)
// router.get('/:id', adminCtrl.show)
//
//router.put('/:id', checkAuth, postCtrl.update)
//router.delete('/:id', checkAuth, postCtrl.delete)
// Comments
//router.post('/:id/comments', checkAuth, postCtrl.createComment)
//router.delete('/:postId/comments/:commentId', checkAuth, postCtrl.deleteComment)

export {
    router
}