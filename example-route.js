module.exports = exampleRoute = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return { message: 'Everything OK.' };
  },
};
