module.exports = {
  name: 'happner-cloud',
  datalayer: {
    log_level: 'info|error|warning',
    persist:true
  },
  modules: {
    'happner-security': {
      path: __dirname + '/node_modules/happner-security/index.js'
    }
  },
   modules: {
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
    'happner-security': {
      schema:{
        "exclusive":false
      },
      web:{
        routes:{
          /*"client":"handleRequest",*/
          "lib":"static"
        }
      }
    }
  }
}
