'use strict';
const queryString = require('querystring');

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `hola ${event.pathParameters.name}!`,
        event: event,
        context: context
      }
    )
  };
};

module.exports.helloSave = async (event, context) => {
  const body = queryString.parse(event['body']);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Peticion POST!`,
        input: `Hola ${body.name} ${body.lastname}` 
      }
    )
  };
};
