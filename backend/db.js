const Pool = require('pg').Pool
const pool = new Pool({
    user: "DICKSUCKER3000",
    password: "1",
    host: "localhost",
    port: "5432",
    database: "casereact"
})

module.exports = pool
