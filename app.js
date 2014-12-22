window.addEventListener("load", function() {
    document.location.href = "#panel4";
});

var buttons = document.getElementsByClassName('note')
var viewHeight = document.getElementsByClassName('bb-tabpanel')[0].scrollHeight;
for (var i=0; i<buttons.length; i++) {
 buttons[i].style["height"] = Math.round((viewHeight - 31) / 13) + "px";
}
var audio_context, oscillator, filterNode, delayNode;
  audio_context = new window.AudioContext;

$(".note").click(function() {
  oscillator = audio_context.createOscillator();
  filterNode = audio_context.createBiquadFilter();
   oscillator.connect(filterNode);
  delayNode = audio_context.createDelay();
   filterNode.connect(delayNode);
  filterNode.connect(audio_context.destination);
  delayNode.connect(audio_context.destination);
  oscillator.frequency.value = this.value;
  oscillator.start(0);
  filterNode.frequency = 22050;
  filterNode.type = 'lowpass';
  delayNode.delayTime = 0.2;
  oscillator.stop(audio_context.currentTime + 0.2);
});