var AlertJs = {};
AlertJs.inject = function(injectEl){
var el = `<div class="success" id="success" style="display:none;">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <div id="message"></div>
</div>
<div class="errModal" id="errModal" style="display:none;">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <div id="errMsg"></div>
</div>
<div class="info" id="info" style="display:none;">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <div id="infoMsg"></div>
</div>
<div class="warning" id="warning" style="display:none;">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <div id="warnMsg"></div>
</div>`;
var style = `.success {
  padding: 20px;
  background-color: #4CAF50;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}

.errModal {
  padding: 20px;
  background-color: #f44336;
  color: white;
}
.info {
  padding: 20px;
  background-color: #2196F3;
  color: white;
}
.warning {
  padding: 20px;
  background-color: #ff9800;
  color: white;
}`;
injectEl.innerHTML = el + '\n<style>' + style + '</style>;
};


AlertJs.success = function(msg){
var success = document.getElementById("success");
var message = document.getElementById("message");
message.innerText = msg;
success.style = "";
}

AlertJs.error = function(msg){
var el = document.getElementById("errModal");
var message = document.getElementById("errMsg");
message.innerText = msg;
el.style = "";
}

AlertJs.inform = function(msg){
var el = document.getElementById("info");
var message = document.getElementById("infoMsg");
message.innerText = msg;
el.style = "";
}

AlertJs.warn = function(msg){
var el = document.getElementById("warning");
var message = document.getElementById("warnMsg");
message.innerText = msg;
el.style = "";
}
