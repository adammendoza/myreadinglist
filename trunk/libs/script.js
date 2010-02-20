
var since = null;

$(document).ready( function() {
	$("#processing16").hide();
	$("#addButton").click(addToList);
});

function addToList() {
	$("#addButton").hide();
	$("#processing16").show();
	chrome.tabs.getSelected(null, addPage)
}

function addPage(tab) {
	var params = 'username='+localStorage['username']+'&password='+localStorage['password']+'&apikey='+localStorage['apikey']+'&url='+tab.url+'&title='+tab.title;
	$.ajax({
		type: "GET",
		url: "https://readitlaterlist.com/v2/add",
		data: params,
		success: function(data, status, XMLHttpRequest) {
			var f = document.getElementById('iframelist');
			f.src = f.src;
			$("#addButton").show();
			$("#processing16").hide();
		},
		error: function(xhr, errorStatus, errorThrown) {
			alert('Failed to add page');
			$("#addButton").show();
			$("#processing16").hide();
		}
	});

}

