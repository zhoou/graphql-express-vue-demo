
//schema.js
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList 
} from 'graphql';

// 测试数据
let data = require('../mock/reportData.json');

let recordsType = new GraphQLObjectType({
  name: 'recordsList',
  fields: {
    change: {type: GraphQLString},
    code: {type: GraphQLString},
    codename: {type: GraphQLString},
    cprice: {type: GraphQLString},
    date: {type: GraphQLString},
    dprice: {type: GraphQLString},
    hit: {type: GraphQLString},
    id: {type: GraphQLString}
  }
})

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'ReportQuery',
    fields: {
      H: { 
        type: GraphQLString,
        resolve: function(__, args) {
          return data.H;
        }
      },
      records: {
        type: new GraphQLList(recordsType),
        resolve: function (__, args) {
          return data.records;
        }
      },
      total: { 
        type: GraphQLString,
        resolve: function(__, args) {
          return data.total;
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({ // 修改数据
    name: 'ReportMutationType',
    fields: {
      updateCount: {
        type: GraphQLInt,
        description: 'Update the count',
        resolve: function() {
          count += 1
          return count
        }
      }
    }
  })
});

export default schema;