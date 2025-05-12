const sql = require("mssql");

module.exports = async function (context, req) {
  context.log("dbhello function processed a request.");
  const connStr = process.env.SqlConnStr;
  try {
    await sql.connect(connStr);
    const result = await sql.query`SELECT 'Hello from Azure SQL!' AS msg`;
    context.res = { body: result.recordset[0] };
  } catch (err) {
    context.log.error(err);
    context.res = {
      status: 500,
      body: { error: err.message }
    };
  }
};
