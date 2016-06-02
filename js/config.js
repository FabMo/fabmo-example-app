fabmo.getConfig(function(err, cfg) {
	$('#config-system-config').text(JSON.stringify(cfg));
});