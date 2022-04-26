const {Client} = require("pg")

//SET CONFIG POSTGRESDB
const client = new Client({
  host:"localhost",
  port:5432,
  user:"postgres",
  password:"postgres",
  database:"crudNode"
})

client.connect()

//METHOD RECIVES A QUERY RUN AND RETURN THE ROWS
const executeQuery = async (query) => {
  const {rows} = await client.query(query)
  return rows;
}

module.exports = {executeQuery}