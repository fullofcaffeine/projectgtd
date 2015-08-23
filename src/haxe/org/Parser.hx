package org;

@:jsRequire('org','Parser')
extern class Parser {
  function new();
  function parse(orgCode:js.node.Buffer):js.node.Buffer;
}
