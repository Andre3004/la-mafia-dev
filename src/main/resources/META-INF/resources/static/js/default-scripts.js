if ( typeof dwr !== 'undefined' )
{
	dwr.engine.setTextHtmlHandler(function() {
		window.alert(/*[[#{sessionExpired}]]*/);
		document.location = './';
	});

	dwr.engine.setPreHook( function() {
		NProgress.start();
		NProgress.inc();
	});

	dwr.engine.setPostHook(function() {
    	NProgress.done();
	});
}

//user session
window.user = /*[[${#authentication} ? ${#authentication.principal} : null]]*/ null;

(function() {
    var original = dwr.engine.serialize.convert;
    dwr.engine.serialize.convert = function(batch, directrefmap, otherrefmap, data, name, depth) {
        if(data != null && typeof data == "object" && Object.prototype.toString.call(data) == "[object Date]") {
            var offset = data.getTimezoneOffset()*60*1000;
            var newDate = new Date(data.getTime() - offset);
            original(batch, directrefmap, otherrefmap, newDate, name, depth);
        } else {
            original(batch, directrefmap, otherrefmap, data, name, depth);
        }
    }
})();