
/**
 * shows an element of given id and hides another one
 */
function showElement(show, hide) {
  document.getElementById(hide).style.display = "none";
  document.getElementById(show).style.display = "inline-block";
}

function getRadioVal(name) {
  var val;
  // get list of radio buttons with specified name
  var radios = document.getElementsByName(name);

  // loop through list of radio buttons
  for (var i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) { // radio checked?
      val = radios[i].value; // if so, hold its value in val
      break; // and break out of for loop
    }
  }
  return val; // return value of checked radio or undefined if none checked
}
/**
 * hide question and shows the results
 * 
 */
function showResults(hide, show) {
  calculateResults()
  document.getElementById(hide).style.display = "none";
  document.getElementById(show).style.display = "inline-block";

}

function calculateResults() {

  let total = Number(getRadioVal('quest1')) + Number(getRadioVal('quest2')) + Number(getRadioVal('quest3')) + Number(getRadioVal('quest4')) + Number(getRadioVal('quest5'));

  if (total <= 9) {
    msg = "<h2>The Nature Lover</h2><br>The great outdoors is what it’s all about for the Nature Lovers.They can think of nothing better than feeling the fresh air in their hair and also believe that it's important to travel sustainably where possible.";
  } else if (10 <= total && total <= 14) {
    msg = "<h2>Anxious Traveller</h2><br>(47%) admit to paying eagle eyed attention to reviews at the moment, ensuring that businesses are staying as safe as possible. They are also most likely to consider bringing their own cleaning products to help get things ship shape on arrival. More women than men fall into this category. ";
  } else if (15 <= total && total <= 19) {
    msg = "<h2>The Pics or it didn’t happen</h2>You will most likely find a Pics or it Didn’t Happen traveller at the local beauty spot, attempting to get the best picture in order to update their various social media profiles. Members of this group say they specifically visit places to get a picture when on holiday and even plan their outfits in advance. Perhaps unsurprisingly, most of these travellers identify as millennials.";
  } else if (20 <= total && total <= 24) {
    msg = "<h2>The Go with the Flow</h2>It’s hard to ruffle the feathers of a Go with the Flow traveller. Even amid a pandemic they admit they’re able to completely switch off and enjoy their time away. They also agree that too much pre-planning has the potential to ruin a holiday.";
  } else if (total = 25) {
    msg = "<h2>The Perfect Planner</h2>Next is the Perfect Planner. Perfect Planners tend to have most details of their trip decided in advance - especially helpful amid a pandemic where booking beforehand is encouraged. They also agree that it’s easy to waste time on holiday if you are not careful. That means they are likely to be up and exploring early in the morning.";
  }
  document.getElementById("result").innerHTML = msg

}


