(function () { "use strict";
var util_Async = function() { };
var App = function() {
	this.windowHeight = 600;
	this.windowWidth = 800;
	this.initializeAtom();
};
App.__interfaces__ = [util_Async];
App.main = function() {
	new App();
};
App.prototype = {
	initializeAtom: function() {
		var _g = this;
		var app = require("app");
		var BrowserWindow = require("browser-window");
		require("crash-reporter").start();
		app.on("window-all-closed",function() {
			if(process.platform != "darwin") app.quit();
		});
		app.on("ready",function() {
			var mainWindow = new BrowserWindow({ width : _g.windowWidth, height : _g.windowHeight});
			mainWindow.on("closed",function() {
				mainWindow = null;
			});
		});
	}
};
var js_Node = function() { };
var js_node_events_IEventEmitter = function() { };
var js_node_stream_IReadable = function() { };
js_node_stream_IReadable.__interfaces__ = [js_node_events_IEventEmitter];
var js_node_stream_IWritable = function() { };
js_node_stream_IWritable.__interfaces__ = [js_node_events_IEventEmitter];
var util_AsyncBuilder = function() { };
var Fs__0 = require("fs");
var EventEmitter__1 = require("events").EventEmitter;
var FSWatcher__5 = require("fs").FSWatcher;
var Stats__4 = require("fs").Stats;
var Readable__2 = require("stream").Readable;
var Writable__3 = require("stream").Writable;
js_Node.console = console;
js_Node.process = process;
js_Node.module = module;
js_Node.exports = exports;
js_Node.__filename = __filename;
js_Node.__dirname = __dirname;
js_Node.require = require;
js_Node.setTimeout = setTimeout;
js_Node.setInterval = setInterval;
js_Node.clearTimeout = clearTimeout;
js_Node.clearInterval = clearInterval;
App.main();
})();
