module.exports = {
  name: 'happner-cloud',
  datalayer: {
    log_level: 'info|error|warning',
    persist:true
  },
  modules: {
    'happner-security-user': {
      construct:{
        name:"UserManager"
      },
      path: __dirname + '/node_modules/happner-security/index.js'
    },
    'happner-security-network': {
      construct:{
        name:"NetworkManager"
      },
      path: __dirname + '/node_modules/happner-security/index.js'
    },
    'happner-security-group': {
      construct:{
        name:"GroupManager"
      },
      path: __dirname + '/node_modules/happner-security/index.js'
    },
    'happner-user-management': {
      path: __dirname + '/node_modules/happner-user-management/index.js'
    }
  },
  components:{
    'happner-user-management': {
      moduleName:"happner-user-management",
      startMethod:"initialize",
      schema:{
        "exclusive":false
      },
      web:{
        routes:{
         "static":"app"
        }
      }
    },
    'happnerSecurityNetwork': {
      accessLevel:"mesh",
      startMethod: "start",
      moduleName:"happner-security-network",
      schema:{
        "exclusive":false,//means we dont dynamically share anything else
        "methods":{
          "start":{
            type:"async",
            parameters:[
             {"required":true, "value":{/*TODO - configuration goes here*/}}  
            ]
          }
        }
      }
    },
    'happnerSecurityUser': {
      accessLevel:"mesh",
      startMethod: "start",
      moduleName:"happner-security-user",
      schema:{
        "exclusive":false,//means we dont dynamically share anything else
        "methods":{
          "start":{
            type:"async",
            parameters:[
             {"required":true, "value":{/*TODO - configuration goes here*/}}  
            ]
          }
        }
      }
    },
    'happnerSecurityGroup': {
      accessLevel:"mesh",
      startMethod: "start",
      moduleName:"happner-security-group",
      schema:{
        "exclusive":false,//means we dont dynamically share anything else
        "methods":{
          "start":{
            type:"async",
            parameters:[
             {"required":true, "value":{/*TODO - configuration goes here*/}}  
            ]
          }
        }
      }
    }
  }
}
