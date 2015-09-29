
#### Getting Going

```bash

### find an empty folder to clone into and:

git clone https://github.com/happner/happner-cloud.git && cd happner-cloud && npm install && node cloud-service

### LOG_LEVEL=debug node cloud-service.js
### node_modules/.bin/happner --conf config.js

```

the mesh is instantiated by: https://github.com/happner/happner-cloud/blob/master/cloud-service.js

with the following config: https://github.com/happner/happner-cloud/blob/master/config.js

you can now navigate to http://localhost:55000/happner-user-management

just log in - the credentials are defaulted

now you can pretend search for and edit users and groups, the data is not being stored in happner yet, but we have exposed the api for working with the data as an angular service:

https://github.com/happner/happner-cloud/blob/master/node_modules/happner-user-management/static/js/happner-angular.js

the service is wrapping the internal happner security component - see how in the config (https://github.com/happner/happner-cloud/blob/master/config.js), and providing 3 managers

1. the groupManager, which is for group crud and permissions management
2. the userManager, for user crud and group management
3. the networkManager, which synchronizes the distributed security directory, and provides events, so applications are updated when the security directory changes

to see in full what these managers can do - have a look at their action component code (there is some mocking in there -  will be replaced by the real thing over time)

* groupManager https://github.com/happner/happner-cloud/blob/master/node_modules/happner-security/lib/group.js
* userManager https://github.com/happner/happner-cloud/blob/master/node_modules/happner-security/lib/user.js
* networkManager https://github.com/happner/happner-cloud/blob/master/node_modules/happner-security/lib/network.js

See `config.js` for loaded components.

See `node_modules/happner-security` and `node_modules/happner-user-management` for their definitions.


