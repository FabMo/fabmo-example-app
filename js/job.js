/*
 * JOB SUBMISSION EXAMPLE
 * 
 * Very simple job submission.  Uses form inputs to generate a segmented circle in G-Code and
 * submits that G-Code to the tool as a job.
 *
 */
function makeCircle(cx,cy,d,zpullup,depth,seg_size,feedrate, pass_depth) {
  function f(x) {return x.toFixed(5)}
  var r = d/2.0;
  var seg_size = seg_size/1000.0;
  var feedrate = feedrate*60.0;
  var circ = Math.PI*d;
  var segments = circ/seg_size;
  var dtheta = 2*Math.PI/segments;
  var gcodes = ['(Simple Circle)', 
                '(Center: ' + f(cx) + ',' + f(cy) + ' Diameter: ' + f(d) + ')',
                'G0 Z' + zpullup,
                'G0 X' + f(cx + r) + ' Y' + f(cy),
                'M4',
                'G4 P3.0',
                '(Cut Circle)'];
  plunge = 0;
  pass = 0;
  while(plunge < depth) {
    plunge += 0.125;
    pass += 1;
    if(plunge > depth) { plunge = depth;}
    gcodes.push('(Pass ' + pass + ')');
    gcodes.push('G1 Z-' + f(plunge) + ' F' + f(feedrate))
    var theta = 0.0
    while(theta < (2*Math.PI)) {
      var x = cx + Math.cos(theta)*r;
      var y = cy + Math.sin(theta)*r;
      gcodes.push('G1 X' + f(x) + ' Y' + f(y) + ' F' + feedrate);
      theta += dtheta;
    }
    gcodes.push('G1 X' + f(cx + r) + ' Y' + f(cy) + ' F' + feedrate);
  }
    gcodes.push('G0 Z' + f(zpullup));
    gcodes.push('(Spindle Off)')
    gcodes.push('M8');
    gcodes.push('(Jog Home)')
    gcodes.push('G0 X0 Y0');

  return gcodes.join('\n');
}
// When the submit button is pressed, validate the inputs and submit the job. (if valid)
$("#job-go").click(function(evt) {
    var cx = validateInput($("#job-input-cx"));
    var cy = validateInput($("#job-input-cy"));
    var d = validateInput($("#job-input-d"));
    var zpullup = validateInput($("#job-input-zpullup"));
    var depth = validateInput($("#job-input-depth"));
    var seg_size = validateInput($("#job-input-segsize"));
    var feedrate = validateInput($("#job-input-feedrate"));
    var passdepth = validateInput($("#job-input-passdepth"));

    code = makeCircle(cx,cy,d,zpullup,depth,seg_size,feedrate, passdepth);
    fabmoDashboard.submitJob(code, {filename : 'example-circle.nc',
                                    name : d + '" Diameter Circle',
                                    description : d + '" diameter circle centered at ' + cx + ',' + cy + ' at a depth of ' + depth + '"' 
    })
    evt.preventDefault();
});

