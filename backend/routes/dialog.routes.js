const Router = require('express')
const router = new Router()
const dialogController = require('../controller/dialog.controller')

router.post('/dialogs', dialogController.createDialog )
router.get('/dialogs', dialogController.getDialogsByUser )
router.get('/dialogs/:id', dialogController.getOneDialog )
router.delete('dialogs/:id', dialogController.deleteDialog )

module.exports = router
