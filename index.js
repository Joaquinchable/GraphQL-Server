import express from 'express';

// GraphQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';




const app = express();

const port = process.env.PORT || 8000;



app.get('/', (req, res) =>{
  res.send('Everything is fine')

});


// RESOLVER

const root ={ cliente: ()=> {

  return {

    "id": 234567899098765,
    "nombre": "Joaquin Alberto",
    "apellido": "Chable Rodriguez",
    "empresa": "BEDUTech",
    "email": "joaquinchable9@gmail.com"


  }
  
}};


app.use('/graphql', graphqlHTTP ({
  // what Schema going to use 
  schema ,
  // the resolver is passed as rootValue
  rootValue: root,
  //use graphiql
  graphiql: true 

}));


app.listen(port, () => {
    console.log(`The server is Working now ${port}`);
  });