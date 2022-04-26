const { executeQuery } = require("../connection/connectionPostgres")

//Function to mount the date to SQL
const getDateFormated=()=>{
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()

  return `${year}-${month}-${day}`
}

//ALL scripts thats was needed to CRUD
const crud = {
  select : function(values) {
    return `SELECT name,quantity,"user" FROM rawmaterials WHERE name ILIKE '%${values}%'`;
  },
  selectUser:function(values){
    return `select * from requestsMaterial where "user" ilike '%${values}%'`;
  },
  insert : function(values) {
    const [name,quantity,user] = values
    return `insert into rawmaterials (name,quantity,"user",created_date) values ('${name}',${quantity},'${user}','${getDateFormated()}')`
  },
  delete : function(values) {
  },
  update : function(values) {
    const {productId,user} = values
    const update = `update rawmaterials set quantity = quantity-1 where id = ${productId};`; 
    const insertIntoRequestMaterial = `insert into requestsMaterial (id_rawMaterials,quantity,"user") values (${productId},1,'${user}');`;
    return `${update} ${insertIntoRequestMaterial}`
  },
}

//METHOD THAT RECIVES THE SQL METHOD AND THE PARAMS , THEN EXECUTE QUERY
const runQuery= async (method,values=[]) => {
  const query = crud[method](values)
  const result = await executeQuery(query) 
  return result
}

module.exports = {crud,runQuery}