sklog is intended to be a lightweight library for console logging.  This was born out of laziness - it's very basic and simple to use.  I didn't need 95% of the functionality in Winston's logger and I don't care about putting logs in a DB, if you need more functionality then check out Winston's great logger - it's full of features and other cool stuff.

Using SKLOG
-----------

From your project directory:
```bash
    $ npm install sklog
```

Within your application:
```javascript
var log = require("sklog");

log("no loglevel");
log(0,"Information");
log(1,"Warning");
log(2,"Error");
log(3,"Non-existant log level");
```

Is this All?
------------
Long answer: yes, what more do you need?


