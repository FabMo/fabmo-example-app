/*
* NAVIGATION EXAMPLE
* 
* Very simple navigation script.  When the user clicks the button, the tool is
* moved to the specified position.  (Provided that position is valid)
* 
* Functions are also provided to show and hide the DRO
*
*/

// Validate the input of the provided form (just checks for a valid number, no range check)
// Mark the input as invalid if it contains bad data
// Return the value if it's valid, null otherwise
function validateInput(target) {
  var f = parseFloat(target.val());
  if(isNaN(f) || f === undefined) {
      target.parent().removeClass('has-success');
      target.parent().addClass('has-error');
      return null;
  } else {
      target.parent().removeClass('has-error');
      target.parent().addClass('has-success');
      return f;
  }
}

// When the go button is pressed, validate the inputs and move the tool (if valid)
$("#nav-go").click(function(evt) {
  var x = validateInput($("#ctrl-xinput"));
  var y = validateInput($("#ctrl-yinput"));
  var z = validateInput($("#ctrl-zinput"));
  if((x !== null) && (y !== null) && (z !== null)) {
      var gcode = "G0 X" + x + " Y" + y + " Z" + z;
      fabmo.runGCode(gcode);
  } else {
      alert("Position specified is invalid: " + x + "," + y + "," + z);
  }
  evt.preventDefault();
});

// Trigger a validation every time an input value changes
$(".num-input").change(function(evt) {
    validateInput($(evt.target));
});

// Update the position display every time a status report is recieved
fabmo.on('status', function(status) {
  $('#ctrl-xdisplay').val(status.posx);
  $('#ctrl-ydisplay').val(status.posy);
  $('#ctrl-zdisplay').val(status.posz);
});

fabmo.requestStatus();