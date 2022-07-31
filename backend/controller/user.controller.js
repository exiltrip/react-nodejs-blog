const db = require('../db')

class UserController {

    async createUser(req, res) {
        const { name, surname } = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson.rows[0])
    };

    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
    };

    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person where id = $1`, [id])
        res.json(user.rows[0])
    };

    async updateUser(req, res) {
        const { id, name, surname } = req.body
        const user = await db.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`, [name, surname, id])
        res.json(user.rows[0])
    };

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM person where id = $1`, [id])
        res.json(user.rows[0])

    };

    async loginUser(req, res) {
        const { login, password } = req.body;
        try {
            if (login && password) {
                const user = await db.query(`SELECT ID, NAME, SURNAME, LOGIN, EMAIL FROM person where login = $1 and password = $2`, [login, password])
                if (user.rows.length === 1) {
                    res.status(200).json(user.rows[0])
                } else {
                    res.status(404).json();
                }
            } else {
                res.status(404).json();
            }
        } catch (error) {
            console.log(error);
            res.status(500).json();
        }
    };

    async registrationUser(req, res) {
        const { login, password, name, surname, email } = req.body;
        try {
            const newUser = await db.query(`INSERT INTO person (name, surname, login, password, email) values ($1, $2, $3, $4, $5) RETURNING *`, [name, surname, login, password, email])
            if (newUser.rows.length === 1) {
                delete newUser.rows[0].password;
                res.status(201).json(newUser.rows[0]);
            } else {
                res.status(500).send();
            }
        } catch (error) {
            console.log(error);
            res.status(500)
        }
    };
}

module.exports = new UserController()
