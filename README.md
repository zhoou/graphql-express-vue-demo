# graphql-express-vue-demo
> A demo for learn graphql

## build
1、Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.  
`npm install -g nodemon`  

2、install packages  
`npm install`

3、run  
`npm run dev`

## graphql
> GraphQL is a query language designed to build client applications by providing an intuitive and flexible syntax and system for describing their data requirements and interactions.
### basic
facebook: [graphql](https://github.com/facebook/graphql)  

request Headers Settings:
`Content-Type: application/graphql`  
`Accept-Encoding: gzip`

### query
+ no parameter  
query UsersQuery {
  users {
    name,
    sex,
    intro,
    skills
  }
}

+ take parameter  
query UsersQuery {
  user(id: 1){
    name,
    sex,
    intro,
    skills
  }
}

### mutation
mutation create { 
  addUser(name:"test", sex:"女", intro:"阿萨斯", skills:["Java"]){
    name, sex, intro, skills
  }
}