const db = require('../db')

class postController {
    async createDialog(req, res) {
        const { senderLogin, userId } = req.body
        const newPost = await db.query(`INSERT INTO dialogs (senderLogin, user_id) values ($1, $2) RETURNING *`, [senderLogin, userId])
        console.log(newPost)
        res.json(newPost.rows[0])
    }
    async getDialogsByUser(req, res) {
        const id = req.query.id
        const posts = await db.query(`SELECT * FROM dialogs where user_id = $1`, [id])

        res.status(200).json(posts.rows)
    }
    async deleteDialog(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM dialogs where id = $1`, [id])
        res.json(user.rows[0])

    }
    async getOneDialog(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM dialogs where id = $1`, [id])
        res.json(user.rows[0])
    }
}

module.exports = new postController()
