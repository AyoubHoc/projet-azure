module.exports = async function (context, req) {
    context.log("hello function processed a request.");
    context.res = {
      body: { msg: "Hello Azure depuis Function !" }
    };
  };
  