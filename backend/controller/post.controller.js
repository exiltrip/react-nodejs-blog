const db = require('../db')

class postController {
    async createPost(req, res) {
        const {title, content, userId} = req.body
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *` , [title, content, userId])
        res.json(newPost.rows[0])
    }
    async getPostsByUser(req, res) {
        const id = req.query.id
        const posts = await db.query(`SELECT * FROM post where user_id = $1`, [id])

        res.json(posts.rows)
    }
    async deletePost(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM post where id = $1`, [id])
        res.json(user.rows[0])

    }
}

module.exports = new postController()

