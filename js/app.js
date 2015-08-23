(function () { "use strict";
var util_Async = function() { };
util_Async.__name__ = true;
var App = function() {
	var parser = new org_Parser();
	(Fs__0||require("fs")).readFile("../test.org",{ encoding : "utf8"},function(err,orgFile) {
		if(err != null) haxe_Log.trace("error",{ fileName : "App.hx", lineNumber : 14, className : "App", methodName : "new", customParams : [err]}); else {
			var test = parser.parse(orgFile);
			console.log(test);
			haxe_Log.trace(test,{ fileName : "App.hx", lineNumber : 18, className : "App", methodName : "new"});
		}
	});
};
App.__name__ = true;
App.__interfaces__ = [util_Async];
App.main = function() {
	new App();
};
Math.__name__ = true;
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_Node = function() { };
js_Node.__name__ = true;
var js_node_events_IEventEmitter = function() { };
js_node_events_IEventEmitter.__name__ = true;
var js_node_stream_IReadable = function() { };
js_node_stream_IReadable.__name__ = true;
js_node_stream_IReadable.__interfaces__ = [js_node_events_IEventEmitter];
var js_node_stream_IWritable = function() { };
js_node_stream_IWritable.__name__ = true;
js_node_stream_IWritable.__interfaces__ = [js_node_events_IEventEmitter];
var org_Parser = require("org").Parser;
var util_AsyncBuilder = function() { };
util_AsyncBuilder.__name__ = true;
String.__name__ = true;
Array.__name__ = true;
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
