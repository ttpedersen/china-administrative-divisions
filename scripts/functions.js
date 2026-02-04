function showHideRow(row) {
	$("#" + row).toggle();
}

function showAll() {
	$( "tr[id*='row']" ).toggle();
}
