
var xhttp;
var dataValue0;
var dataValue1;
var dataValue2;
var dataValue3;
var isoptiontabopen = false;

if (window.XMLHttpRequest) {
  // code for modern browsers
  xhttp = new XMLHttpRequest();
} else {
  // code for old IE browsers
  xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

function upload1(id, val0) {
  dataValue0 = '' + val0;
  dataValue1 = '' + 0;
  dataValue2 = '' + 0;
  dataValue3 = '' + 0;
  let data = '/Web/ComponentUpdate.php?Val0=' + dataValue0 + '&Val1' + dataValue1 + '&Val2=' + dataValue2 + '&Val3=' + dataValue3 + '&UserId=' + userId + '&Port=' + id;
  xhttp.open("GET", data, true);
  xhttp.send();
}

function upload2(id, val0, val1) {
  dataValue0 = '' + val0;
  dataValue1 = '' + val1;
  dataValue2 = '' + 0;
  dataValue3 = '' + 0;
  let data = '/Web/ComponentUpdate.php?Val0=' + dataValue0 + '&Val1' + dataValue1 + '&Val2=' + dataValue2 + '&Val3=' + dataValue3 + '&UserId=' + userId + '&Port=' + id;
  xhttp.open("GET", data, true);
  xhttp.send();
}

function upload3(id, val0, val1, val2) {
  dataValue0 = '' + val0;
  dataValue1 = '' + val1;
  dataValue2 = '' + val2;
  dataValue3 = '' + 0;
  let data = '/Web/ComponentUpdate.php?Val0=' + dataValue0 + '&Val1' + dataValue1 + '&Val2=' + dataValue2 + '&Val3=' + dataValue3 + '&UserId=' + userId + '&Port=' + id;
  xhttp.open("GET", data, true);
  xhttp.send();
}

function upload4(id, val0, val1, val2, val3) {
  dataValue0 = '' + val0;
  dataValue1 = '' + val1;
  dataValue2 = '' + val2;
  dataValue3 = '' + val3;
  let data = '/Web/ComponentUpdate.php?Val0=' + dataValue0 + '&Val1' + dataValue1 + '&Val2=' + dataValue2 + '&Val3=' + dataValue3 + '&UserId=' + userId + '&Port=' + id;
  xhttp.open("GET", data, true);
  xhttp.send();
}

function uploadData(id, val0, val1, val2, val3) {
  dataValue0 = '' + val0;
  dataValue1 = '' + val1;
  dataValue2 = '' + val2;
  dataValue3 = '' + val3;
  let data = '/Web/ComponentUpdate.php?Val0=' + dataValue0 + '&Val1' + dataValue1 + '&Val2=' + dataValue2 + '&Val3=' + dataValue3 + '&UserId=' + userId + '&Port=' + id;
  xhttp.open("GET", data, true);
  xhttp.send();
}

function downloadData(devId) {
  let data = '/Web/compdatagetter.php?Sep=>>&UsId=' + userId + '&Port=' + devId;
  xhttp.open("GET", data, true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let txt = this.responseText;
      txt = txt.trim();
      let datas = txt.split('>>');
      dataValue0 = '' + datas[0];
      dataValue1 = '' + datas[1];
      dataValue2 = '' + datas[2];
      dataValue3 = '' + datas[3];
      alert(datas);

    }
  }
}


var publicDevices = Array();
var thisdescriptor;
//publicDevices.push();
// format to enable calling of a device  
//[<methodtobecalled>,<nametodisplay>,<specificId>, <name>,<details>,<id>,<widows>,<min>,<max>,<steps>]

//******************************************************************************************************************************* */
//*****************************************METHODS & CLASSES********************************************************************* */
//******************************************************************************************************************************* */




function notifier() {
  lastSelectedDevice = '' + this.parentElement.id;
  formId = lastSelectedDevice.slice(1, 5);
  upload1(this);
}


thisdescriptor = ["createBinSwitch", "SlideSwitch", "0000", true, false, true, false, true, true, true];
publicDevices.push(thisdescriptor);

function createBinSwitch(name, id) {
  var theswitch = new binary(id = id, name = name, windows = 1);
  let theContainer = document.createElement("DIV"); //container
  //label
  let label = document.createElement("LABEL");
  label.for = name;
  //class and id 
  theContainer.className = "slideSwitch";
  theContainer.id = id;
  //appending 
  theContainer.appendChild(label);
  theContainer.appendChild(theswitch.slideSwitch(name));
  return theContainer;

}



function createVarSwitch(id, name, windows, min, max, step) {
  let theInput = document.createElement("INPUT");
  theInput.setAttribute("type", "range");
  theInput.name = name;
  theInput.min = min;
  theInput.max = max;
  theInput.step = step;
  theInput.addEventListener("change", () => { lastSelectedDevice = '' + (theInput.parentElement).id; formId = lastSelectedDevice; upload1(theInput); });
  return theInput;



}







thisdescriptor = ['createHSlider', 'sliderH', '0000', true, false, true, false, true, true, true];
publicDevices.push(thisdescriptor);

function createHSlider(name, id, min, max, steps) {

  let incontainer = document.createElement("DIV");
  let outslider = document.createElement("DIV");
  let label = document.createElement("P");
  let slider = document.createElement("DIV");
  // let node = document.createTextNode("0");
  let node = document.createElement("P");
  node.innerText = "0";
  incontainer.setAttribute("class", "inContainer");
  slider.setAttribute("class", "slider");
  outslider.setAttribute("max", max);
  outslider.setAttribute("min", min);
  outslider.setAttribute("step", steps);
  outslider.setAttribute("id", "" + id);
  //alert(outslider.getAttributeNode("max"));
  outslider.setAttribute("class", "outslider");
  label.style = "width: 20%;height:100% ;padding: 10px;align-items: center;";
  incontainer.style = "min-width: 400px;width: 30%;height: 100px;left: 20%;padding: 10px;margin:10px;display: flex;border: 2px dashed white;";
  outslider.style = "display:relative;width:60%;height: 20px;align-self:center;margin: 0px;border-radius: 8px;border: 2px solid salmon; margin-right:0px;background-color: rgb(231, 218, 210);";
  slider.style = "top: -100%;width: 20px;height: 60px;border-radius: 10px;border:2px solid black;background-color: aquamarine;position: relative;";
  node.style = "float:left;width: 20%;height:100% ;padding-top: 6%;margin-left:6%;align-items: center;";
  label.innerText = name;
  outslider.appendChild(slider);
  outslider.addEventListener("click", sliderHnewpositionchild);
  slider.addEventListener("drag", sliderHnewposition);
  slider.addEventListener("dragend", sliderHnewposition);
  slider.draggable = true;
  incontainer.appendChild(label);
  incontainer.appendChild(outslider);
  incontainer.appendChild(node);

  return incontainer;
}

thisdescriptor = ["createJustValue", "textField", "0000", true, false, true, false, false, false, false];
publicDevices.push(thisdescriptor);

function createJustValue(name, id) {
  let y = new variable(id = id, name = name, windows = 1);
  let theContainer = document.createElement("DIV");
  theContainer.className = "textField";
  theContainer.id = id;
  theContainer.appendChild(y.textField(name));
  return theContainer;
}


function createMaptracker(name) {
  let newElement = document.createElement("IFRAME");
  let mapSpacestyle = " min-width: 100px;max-width: 80%;min-height: 150px;max-height: 10%;width: 200px;height: 100px;background: white;border: 3px solid black; ";
  newElement.style = mapSpacestyle;
  newElement.setAttribute("src", "www.googlemap.com");
  newElement.setAttribute("name", name);
  let thisdevId = newElement.parentElement.id;
  // let dataList = {"","","",""};
  newElement.addEventListener("hover", () => { newElement.style.transform = "scale(1.3)"; });

}


//element.insertBefore(para,child);

/*

 *********************************************************************************************************************************************
 ********************************** BEGINING OF DEVICES DEFINITION ***************************************************************************
 *********************************************************************************************************************************************

*/

class binary {
  constructor(id = 0, name = "", windows = 1) {
    this.name = name;
    this.port = id;
    this.windows = windows;
  }

  slideSwitch(name) {
    let theInput = document.createElement("INPUT");
    theInput.setAttribute("type", "range");
    theInput.style.cursor = "pointer";
    theInput.name = name;
    theInput.min = "0";
    theInput.max = "1";
    theInput.step = "1";
    theInput.addEventListener("change", () => { let lastSelectedDevice = '' + (theInput.parentElement).id; upload1(lastSelectedDevice, theInput); });
    return theInput;


  }
  toggleSwitch() {

  }
  buttonSwitch() {

  }

}

class variable {
  constructor(id = 0, name = "", windows = 1) {
    this.name = name;
    this.port = id;
    this.windows = windows;
  }

  textField(name) {
    let theInput = document.createElement("INPUT");
    theInput.setAttribute("type", "text");
    theInput.name = name;
    theInput.addEventListener("change", () => { lastSelectedDevice = '' + (theInput.parentElement).id; formId = lastSelectedDevice; upload1(theInput); });
    return theInput;
  }
  knob() { }
  sliderH(name) {


  }
  sliderV() { }




}

class canvas {
  constructor(id = 0, name = "", windows = 1) {
    this.name = name;
    this.port = id;
    this.windows = windows;
  }

  maptracker() {

  }

  threedimensions() {

  }
  animation() {

  }

  graph2D() {

  }

}

class media {
  constructor(id = 0, name = "", windows = 1) {
    this.name = name;
    this.port = id;
    this.windows = windows;
  }
  videoIputUDP() {

  }
  videoIputTCP() {

  }
  videoInputRTSP() {

  }
  audioInputUDP() {

  }
  audioInputTCP() {

  }
  audioInputRTSP() {

  }
  imageFrame() {

  }

}

class indicators extends canvas {
  gauge() {

  }
  speedometer() {

  }
  thermometer() {

  }
  altimeter() {

  }
  gyroscope() {

  }
  dial() {

  }
  ledblue() {

  }
  ledRed() {

  }
  ledGreen() {

  }
  ledYellow() {

  }
  ledCyan() {

  }
  ledMagenta() {

  }
}


class interactive {
  chat() {

  }

  chess() {

  }

  faceChat() {

  }


}

function addObject(device) {
  let devContainer = document.createElement("DIV");
  let dltButton = document.createElement("DIV");
  let theInContainer = device;
  
  devContainer.setAttribute("class", "devContainer");
  theInContainer.draggable = "true";
  dltButton.setAttribute("id", "deleteBtn");
  dltButton.innerHTML = optionsvg;
  dltButton.style = "float:right;transition:0.5s ease-in;left:calc(100% + 10px);background-color:var(--base-color);cursor:pointer;height:calc(100%);text-align:center;line-height:50px;color:white;position:absolute;top:0;margin:1px;border: 1px solid gray;border-radius:5px;right:0px;";
  dltButton.style.height = '50px';
  dltButton.style.width   = "50px";
  devContainer.style = "transition:2s;min-width:50px;width:fit-content;height:fit-content;border:1px solid gray;border-radius:5px; padding:5px;margin:10px;font-size:20px;position: relative;display:flex; ";
  dltButton.addEventListener("click",options);
  devContainer.appendChild(theInContainer);
  devContainer.appendChild(dltButton);
  middleibar.appendChild(devContainer);
  // var theLabel = document.createElement("LABEL");
  // theLabel.htmlfor = '' + about;
  // theLabel.innerText = '' + about + ':';
  // theInContainer.appendChild(theLabel);
  // devContainer.appendChild(deviceObject);
}


function options() {
  let obj  = this;
  let optiontab = document.createElement("DIV");
  optiontab.setAttribute("class", "optionbars");
  optiontab.style = "width:300px;height:300px;top:calc(50vh-50px);left:calc(50vw - 150px);margin:1px;visibility:visible;";
  optiontab.style.transition = "2s";
  // let thisObject = obj;
  let thisparent = obj.parentElement;
  // let thischild = obj.childElements;
  switch (thisparent.lastElementChild.className == "optionbars") {
    case false:
      isoptiontabopen = !(false && isoptiontabopen);
      
      obj.style.borderRadius="25px";
      obj.style.transform = "rotate(180deg)";
      setTimeout(()=>{
        obj.parentElement.appendChild(optiontab);
        obj.innerHTML = unoptionsvg;
      }, 250);
      //addOptions(optiontab);
      obj.style.borderRadius="5px";
      break;
    case true:
      isoptiontabopen = !(true && isoptiontabopen);
      obj.style.borderRadius="25px";
      obj.style.transform = "rotate(-180deg)";
      setTimeout(()=>{
        obj.parentElement.lastElementChild.remove();
        obj.innerHTML = optionsvg;
      }, 250);
      obj.style.borderRadius="5px";
      break;
  }

  return
}



// ****************************************************************************************************************************************/ 
// ******************************* related functions **************************************************************************************/
// ****************************************************************************************************************************************/


// console.log(window.Date());
function scaler(value, min, max, steps) {
  let stp = steps - 1;
  let change = (max - min) / (steps);
  let values = Array(steps);
  let midvalues = Array(stp);
  for (let i = 0; i < steps + 1; i++) {
    values[i] = min + i * change;
    //alert(values[i] + "");
  }
  for (let i = 0; i < steps; i++) {
    midvalues[i] = (values[i] + values[i + 1]) / 2;
    //alert(midvalues[i] +'');
  }
  if (value <= min || value <= midvalues[0]) {
    return [min, 0];
  }
  if (value >= max) {
    return [max, steps];
  }

  for (let j = 0; j < midvalues.length; j++) {
    //alert("midvalue = " + midvalues[j]);
    if (value <= midvalues[j] && value > values[j]) {
      //alert(value+' < '+midvalues[j]);
      return [values[j], j];
    }
    else if (value > midvalues[j] && value <= values[j + 1] && j < (midvalues.length)) {
      // alert(value+' > '+midvalues[j+1]);
      return [values[j + 1], j + 1];
    }
    else if (value > midvalues[j] && value <= values[j + 1] && j == (midvalues.length)) {
      return [values[j], j];
    }
    else {
      //alert('value = '+value+', max= '+max +'mid = '+values[j+1]);

    }

  }
  alert('scaler fails..');
  return [0, 0];


}


function map(from, fromLow, fromHigh, toLow, toHigh) {
  let toValue = from;
  let mconst = toHigh - ((toHigh - toLow) / (fromHigh - fromLow)) * fromHigh;
  if (from > fromHigh) {
    toValue = fromHigh;
  }
  else if (from < fromLow) {
    toValue = fromLow;
  }

  let value = (((toHigh - toLow) / (fromHigh - fromLow)) * toValue) + mconst;
  console.log("mapping from:" + from + " to :" + value);

  return value;

}

function sliderHnewposition() {
  let outslider = this.parentElement;
  let thenode = outslider.nextSibling;
  let max = outslider.getAttributeNode("max").value;
  let min = outslider.getAttributeNode("min").value;
  let steps = outslider.getAttributeNode("step").value;
  //alert(steps);
  // this.style.top = "" + (lastdragY - 50) + "px";
  let bounds = outslider.getBoundingClientRect();
  console.log(max + ':' + min + ':' + steps);
  console.log(bounds.x);
  let minLeft = bounds.x;
  let maxLeft = bounds.width + bounds.x;
  lastdragX = event.clientX;
  lastdragY = event.clientY;
  //console.log('bounded:'+maxLeft+'>x>'+minLeft+'.x='+lastdragX);


  let lastvaluen = map(lastdragX, minLeft, maxLeft, 0, bounds.width);
  console.log("result : " + lastvaluen);
  let lastvalue = scaler(lastvaluen, 0, bounds.width, steps)[0];
  realValue = scaler(lastvaluen, 0, bounds.width, steps)[1];
  //alert(lastvalue +':'+realValue);
  realValue = Math.floor(map(realValue, 0, steps, min, max));
  //alert(lastdragX +':'+lastvalue);
  thenode.innerText = realValue;
  outslider.setAttribute("data", realValue);
  this.style.left = "" + lastvalue - 10 + "px";
  //console.log("X" + lastdragX + "<br>Y" + lastdragY);
  console.log(outslider.getAttributeNode("data"));
}
function sliderHnewpositionchild() {
  let slider = this.firstChild;

  //console.log(slider);
  let max = this.getAttributeNode("max").value;
  let min = this.getAttributeNode("min").value;
  let steps = this.getAttributeNode("step").value;
  //alert(steps);
  console.log(max + ':' + min + ':' + steps);
  let bounds = this.getBoundingClientRect();
  //console.log(bounds);
  console.log(bounds.x);
  let minLeft = bounds.x;
  let maxLeft = bounds.width + bounds.x;
  // this.style.top = "" + (lastdragY - 50) + "px";
  lastdragX = event.clientX;
  lastdragY = event.clientY;
  //console.log('bounded:'+maxLeft+'>x>'+minLeft+'.x='+lastdragX);
  let lastvaluen = map(lastdragX, minLeft, maxLeft, 0, bounds.width);
  console.log("result : " + lastvaluen);
  lastvalue = scaler(lastvaluen, 0, bounds.width, steps)[0];
  realValue = scaler(lastvaluen, 0, bounds.width, steps)[1];
  //alert(lastvalue +':'+realValue);
  realValue = Math.floor(map(realValue, 0, steps, min, max));
  //alert(lastvaluen +':'+realValue);
  this.nextSibling.innerText = realValue;
  //console.log(this.nextSibling);
  this.setAttribute("data", realValue);
  slider.style.left = "" + lastvalue - 10 + "px";
  // console.log("X" + lastdragX + "<br>Y" + lastdragY);
  console.log(this.getAttributeNode("data"));
}