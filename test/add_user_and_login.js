process.env.LOG_LEVEL = process.env.LOG_LEVEL || 'off';

var username = require('sillyname')().split(' ').join('@').toLowerCase() + '.net';
var password = 'xxx';

var happner = require('happner');

// https://github.com/happner/happner/blob/feature/login/docs/client.md

var MeshClient = happner.MeshClient;
var adminClient = new MeshClient(/* {hostname: port:} */);
var userClient = new MeshClient();


describe('Add User', function() {


  before('start a mesh node', function(done) {
    var _this = this;
    happner.create(require('../config'))
    .then(function(mesh) {
      _this.mesh = mesh;
      done();
    }).catch(done);
  });

  after(function(done) {
    this.mesh.stop(done);
  });



  context('connect and login as admin', function() {


    before(function(done) {

      // same as browser

      adminClient.login({
        username: '_ADMIN',
        password: 'happn',
      });

      adminClient.on('login/allow', function() {
        done();
      });

      adminClient.on('login/deny', function() {
        done(new Error('Access Denied'));
      });

      adminClient.on('login/error', function(e) {
        done(e);
      })
    });


    context('create a user called: \'' + username + '\'', function() {


      before(function(done) {

        var security = adminClient.exchange.security;

        security.upsertUser({

          username: username,
          password: password,
          custom_data: {
            something: 'usefull'
          }

        }, {overwrite: false}, function(e, user) {
          if (e) return done(e);
          done();
        });

      });


      it('can login as \''+username+'\'', function(done) {

        // another way to login (using the promise)

        userClient.login({username: username, password: password})

        .then(function() {

          // login success

          done();

        })

        .catch(function(e) {
          // AccessDenied or Error
          done(e);
        });

      });


    })


  });

});

