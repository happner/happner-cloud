describe('Add User', function() {

  before(function(done) {

    var _this = this;

    require('happner').create(require('../config'))

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

      var MeshClient = require('happner').MeshClient;

      // below is same as browser

      var admin = new MeshClient(/* {hostname: port:} */)

      admin.login({
        username: '_ADMIN',
        password: 'happn',
      });

      admin.on('login/allow', function() {
        console.log('login ok');
        done();
      });

      admin.on('login/deny', function() {
        done(new Error('Access Denied'));
      });

      admin.on('login/error', function(e) {
        done(e);
      })


    });

    it('can login with client', function(done) {

      done();

    });

  });

});

