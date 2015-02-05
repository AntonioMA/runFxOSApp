# runFxOSApp
Simple Gruntfile to run a FxOsApp from the command line

Prerequisites:

* Grunt installed and running
* Node
* You'll have to run

npm install

at least once and wait till it downloads half the internet. Sorry about that.

* You should enable "ADB and devtools" on settings->developer

* It doesn't hurt having:

pref("devtools.debugger.prompt-connection", false);
pref("devtools.debugger.forbid-certified-apps", false);

on the Gaia

build/config/custom-prefs.js

file. In fact, the second one is mandatory if you want to debug certified apps, go figure :)

And I think that's it. Oh, I almost forgot, to run this just:

grunt --origin=ftu.gaiamobile.org

or

grunt --origin=whateveroriginyouwish

