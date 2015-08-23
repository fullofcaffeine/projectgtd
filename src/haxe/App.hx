import tink.*;
import org.Parser;
import js.node.Fs;
import atomshell.Package;

class App implements util.Async {
  var windowWidth = 800;
  var windowHeight = 600;

  static function main() {
    new App();
  }

  public function new() {
    /*var parser = new Parser();
    var err, orgFile = @async Fs.readFile('../test.org', {encoding: 'utf8'});
    if (err != null) {
      trace("error", err);
    } else {
      var test = parser.parse(orgFile);
      untyped console.log(test);
      trace(test);
    }*/

    initializeAtom();
  }

  public function initializeAtom() {
    var app = js.Lib.require('app');
    var BrowserWindow = js.Lib.require('browser-window');

    js.Lib.require('crash-reporter').start();

    app.on('window-all-closed', function() {
      if (untyped process.platform != 'darwin') {
        app.quit();
      }
    });

    app.on('ready', function() {
      var mainWindow = untyped __new__("BrowserWindow",{width: windowWidth, height: windowHeight});

      var dirname = untyped __dirname;
      // and load the index.html of the app.
      mainWindow.loadUrl('file://$dirname/index.html');

      mainWindow.on('closed', function() {
        mainWindow = null;
      });
    });
  }
}
