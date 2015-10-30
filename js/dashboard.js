
$("#nav-showdro").click(function(evt) {
  fabmoDashboard.showDRO();
});
$("#nav-hidedro").click(function(evt) {
  fabmoDashboard.hideDRO();
});
$("#dash-info").click(function(evt) {
  fabmoDashboard.notify('info', 'Heads Up!');
});
$("#dash-success").click(function(evt) {
  fabmoDashboard.notify('success', 'Great Job!');
});
$("#dash-warning").click(function(evt) {
  fabmoDashboard.notify('warning', 'Uh Oh!');
});
$("#dash-error").click(function(evt) {
  fabmoDashboard.notify('error', 'Epic Fail!');
});

$("#dash-launch-job-manager").click(function(evt) {
  fabmoDashboard.launchApp('job-manager');
});
