sopro-rolepage
=================

An HTML5/angular.js app built to run as a Cambrian App inside the Cambrian GUI.

The rolepage app is a startup page so users can select the role they want to use.

It offers UI's to create new roles, delete roles, manage roles, and select roles.


Usage
----

    $ git clone https://github.com/SocietyPro/sopro-rolepage.git
    $ cd sopro-rolepage
    $ bower install
    $ git submodule update --init

    in Society Pro browser, navigate to the application's index.html file

Tests
-----

Squish GUI tests:

import the suite_startScreenTests suite
modify config.js 
Protractor e2e tests:

    $ cd html5-pollmaster
    $ npm start 
    # that starts an http server. background with &, or use another terminal.
    $ npm test

Karma unit tests:

Note that Karma needs a reference to your browser binary if it's not named
something common. For instance, linux mint/ubuntu use "chromium-browser" instead
of "google-chrome".

To tell Karma where to find the browser:
 
    $ which chromium-browser
    $ export CHROME_BIN=/usr/bin/chromium-browser
    $ #or...
    $ echo "export CHROME_BIN=/usr/bin/chromium-browser" >> ~/.xsession
    $ #or some other appropriate file that is sourced on login

To run the Karma tests:

    $ cd html5-pollmaster
    $ npm run karma
    
