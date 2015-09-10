module.exports = {
  name: 'happner-cloud',
  datalayer: {
    log_level: 'info|error|warning',
    persist:true
  },
  modules: {
    'happner-security-user': {
      create:{
        name:"user"
      },
      path: __dirname + '/node_modules/happner-security/index.js'
    },
    'happner-security-network': {
      create:{
        name:"network"
      },
      path: __dirname + '/node_modules/happner-security/index.js'
    },
    'happner-security-group': {
      create:{
        name:"group"
      },
      path: __dirname + '/node_modules/happner-security/index.js'
    },
    'happner-user-management': {
      path: __dirname + '/node_modules/happner-user-management/index.js'
    }
  },
  components:{
    'www': {
      moduleName:"happner-user-management",
      schema:{
        "exclusive":false
      },
      web:{
        routes:{
         "global":[],
         "static":"static"
        }
      }
    },
    'happnerSecurityNetwork': {
      moduleName:"happner-security-network",
      schema:{
        "exclusive":false
      }
    },
    'happnerSecurityUser': {
      moduleName:"happner-security-user",
      schema:{
        "exclusive":false
      }
    },
    'happnerSecurityGroup': {
      moduleName:"happner-security-group",
      schema:{
        "exclusive":false
      }
    }
  }
}
