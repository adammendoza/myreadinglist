
var since = null;

$(document).ready( function() {
	if (localStorage['authDone'] == "true") {
		getReadingList();
	}
});

function getReadingList() {
	if (localStorage['authDone'] == "true") {
		$('#title').append(localStorage['username']);
		var params = 'username='+ localStorage['username'] + '&password=' + localStorage['password'] + '&apikey=' + localStorage['apikey'];
		params = params + '&state=unread';
		
		var jsonString = '{"status":"1", "since":"1245626956', "list":{ "93817":{ "item_id":"93817" "url":"http://url.com", "title":"Page Title", "time_updated":"1245626956", "time_added":"1245626956", "tags":"comma,seperated,list", "state":"0", }, "935812":{ "item_id":"935812", "url":"http://google.com", "title":"Google", "time_updated":"1245626956", "time_added":"1245626956", "tags":"comma,seperated,list", "state":"1", } } }';
		updateDisplay(JSON.parse(jsonString));
		//if (since)
		//	params = params + '&since=' + since;
		//$.ajax({
		//	type: "GET",
		//	url: "https://readitlaterlist.com/v2/get",
		//	data: params,
		//	success: function(data, status, XMLHttpRequest) {
		//		var result = JSON.parse(data);
		//		updateDisplay(result);
		//	},
		//	error: function(xhr, errorStatus, errorThrown) {
		//		$('#list').hide();
		//	}
		});
	}
}

function updateDisplay(result) {
	since = result['since'];
	for (var key in result.list) {
		
	}
}