package org;

extern class Org {
  function new();
  static function Parser():Void;
  function parse(orgCode:js.node.Buffer):js.node.Buffer;

}
