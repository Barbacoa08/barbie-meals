// import { Context, Callback, APIGatewayEvent } from "aws-lambda";

// exports.handler = function (
//   _event: APIGatewayEvent,
//   _context: Context,
//   callback: Callback
// ) {
//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({ message: `ping: ${Math.random()}` }),
//   });
// };

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `ping ${Math.floor(Math.random() * 10)}`,
    }),
  };
}
