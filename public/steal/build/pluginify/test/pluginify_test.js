// load('steal/compress/test/run.js')
/**
 * Tests compressing a very basic page and one that is using steal
 */
load('steal/rhino/steal.js')
steal.plugins('steal/test','steal/build/pluginify').then( function( s ) {
	STEALPRINT = false;
	s.test.module("steal/build/pluginify")
	
	s.test.test("getFunctions", function(t){
		
		var js = readFile('steal/build/pluginify/test/test_steals.js');
		var firstFunc = steal.build.pluginify.getFunction(js, 0);
		
		t.equals(firstFunc, readFile('steal/build/pluginify/test/firstFunc.js'));
		
		var secondFunc = steal.build.pluginify.getFunction(js, 1);
		
		t.equals(secondFunc, readFile('steal/build/pluginify/test/secondFunc.js'))
		
	})
	s.test.test("getFunctions2", function(t){
		
		var js = readFile('jquery/view/micro/micro.js');
		var firstFunc = steal.build.pluginify.getFunction(js, 0);
		//print(firstFunc);
	})
	s.test.test("parse", function(t){
		var js = readFile('jquery/class/class.js');
		var tokens = js.tokens('=<>!+-*&|/%^', '=<>&|');
		
		var js = readFile('jquery/view/ejs/ejs.js');
		var tokens = js.tokens('=<>!+-*&|/%^', '=<>&|');
		
		var js = readFile('jquery/lang/vector/vector.js');
		var tokens = js.tokens('=<>!+-*&|/%^', '=<>&|');
		
		var js = readFile('jquery/dom/fixture/fixture.js');
		var tokens = js.tokens('=<>!+-*&|/%^', '=<>&|');
		
		var js = readFile('jquery/view/view.js');
		var tokens = js.tokens('=<>!+-*&|/%^', '=<>&|');
		
		var js = readFile('jquery/lang/json/json.js');
		var tokens = js.tokens('=<>!+-*&|/%^', '=<>&|');
		
		js = readFile('steal/build/pluginify/test/weirdRegexps.js');
		var tokens = js.tokens('=<>!+-*&|/%^', '=<>&|');
		
	});
	
	s.test.test("pluginify with views")	
	
});