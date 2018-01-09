//server.js
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';

import userSchema from './models/userSchema';
import reportSchema from './models/reportSchema'

import userControl from './controllers/userController'

let app = express();
let PORT = 3000;

//Parse post content as text
app.use(bodyParser.text({ type: 'application/graphql' }));

//测试：http://localhost:3000/graphql （Headers: {Content-Type: application/graphql}, body: { user(id: "3") {name, sex} }）
// app.post('/user', (req, res) => {
//   //GraphQL executor
//   graphql(userSchema, req.body)
//   .then((result) => {
//     res.send(JSON.stringify(result, null, 2));
//   })
// });

app.post('/user', graphqlHTTP({
  schema: userSchema,
  rootValue: userControl,
  graphiql: true,
}));

app.use('/reports', (req, res) => {
  //GraphQL executor
  graphql(reportSchema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result));
  })
});

let server = app.listen(PORT, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});