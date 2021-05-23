const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool ({
    database: 'full-stack-react',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
});

pool.on('connect', () => {
    console.log('Connected to the DB');
});

pool.on('error', (error) => {
    console.log('Error with DB pool', error);
});

module.exports = pool;