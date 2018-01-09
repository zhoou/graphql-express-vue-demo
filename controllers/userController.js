// 测试数据
const users = require('../mock/testData.json');

const userControl = {
  // query resolver
  user: function ({id}) {
    return users[id]
  },
  users: function () {
    return users;
  },
  //mutation resolver
  addUser:function({name,sex,intro,skills}){
      var user = {
          name:name,
          sex:sex,
          intro:intro,
          skills:skills
      };
      users.push(user);
      return user;
  },
  addUserByInput:function({userInfo}){
      var user = {
        name:userInfo.name,
        sex:userInfo.sex,
        intro:userInfo.intro,
        skills:userInfo.skills
      };
      users.push(user);
      return user;
  }
}

module.exports = userControl;