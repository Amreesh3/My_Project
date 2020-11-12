document.body.onload = MainPage();
function MainPage() {
  var createHtml = ` 
  <div id="the">
      <div class="type-text-center">
        <h1 class="type-header-sub-title type-thisisword" id="type-word"></h1>
        <h1 class="type-blink type-thisisword">|</h1>
      </div>
      <div id="same" class="flex-component">
        <div
          id="equalTo"
          class="flex-component-child"
          onclick="handelEqualTo()"
        >
          ==
        </div>
        <div
          id="minusOperator"
          class="flex-component-child flex-component-child-move2"
          onclick="handelMinusOperator()"
        >
          -
        </div>
        <div
          id="xorOperator"
          class="flex-component-child flex-component-child-move12"
          onclick="handelXorOperator()"
        >
          ^
        </div>
      </div>
    </div>

    `;
  document.body.insertAdjacentHTML("afterbegin", createHtml);
}
function handelEqualTo() {
  let createHtml = `<div id='hell'><div id='three' class="nav-box" onclick='handelSim()'>
  <h6 class='hellgoback'>Home</h6>
</div>
<div class="flex-component-workplace">
  <div class="flex-20-box">
    <h2 class="heading">Input</h2>
    <input
      class="input-field"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Enter First Number"
      id="input1"
    />
    <input
      class="input-field"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Enter Second Number"
      id="input2"
    />
    <input
      class="input-submit-field"
      type="submit"
      value="submit"
      onclick="handelSubmit()"
    />
    <h2 class="output" id="output">Output :</h2>
    <div id="theOutput" style="display: none">
      <button class="input-submit-field" onClick="handelPrevious()">
        Previous
      </button>
      <button class="input-submit-field" onClick="handelNext()">Next</button>
    </div>
  </div>
  <div class="flex-40-left-box">
    <h2 class="heading">Code</h2>
    <code class="code-see" id="codeBlock" style="display: none">
      <p class="code-box">
        <span class="code-inside-code">#include "stdio.h"</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code">void main() {</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code"> int int1, int2;</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code"
          >printf("Input the values for Number1 and Number2 : ");</span
        >
      </p>
      <p class="code-box">
        <span class="code-inside-code">scanf("%d %d", &int1, &int2);</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code">if (int1 == int2)</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code"
          >printf("Number1 and Number2 are equal\n");</span
        >
      </p>
      <p class="code-box"><span class="code-inside-code">else</span></p>
      <p class="code-box">
        <span class="code-inside-code"
          >printf("Number1 and Number2 are not equal\n");</span
        >
      </p>
      <p class="code-box"><span class="code-inside-code">}</span></p>
    </code>
  </div>
  <div class="flex-40-right-box">
    <h2 class="heading">Animation</h2>
    <div id="0" style="display: none">
      <div class="animation-div1">
        <p class="animation-text-include">stdio.h</p>
      </div>
      <div class="animation-div2">
        <div class="animation-text-file">file.c</div>
      </div>      
    </div>
    <div id="1" style="display: none">
      <div class="animation-moving-div-datatype">
        <p class="animation-text-include">main()</p>
      </div>        
      <div class="animation-moving-div-main"></div>      
      <div class="animation-text-show">main function push into stack memory</div>
    </div>
    <div id="2" style="display: none">
      <div class="animation-moving-div">
        <p class="animation-text-include" style="margin-right: 1px;">int1</p>
      </div>
      <div class="animation-moving-div">
        <p class="animation-text-include">int2</p>
      </div>
      <div class="animation-stack-box">
        <div class="animation-text-file">memory location</div>
      </div>
      <div class="animation-text-show">allocating memory (4 bytes each) to the integer type variable int1 , int2</div>
    </div>
    <div id="3" style="display: none">
      <p class="animation-text-printf">
        Input the values for Number1 and Number2 :
      </p>
    </div>
    <div id="4" style="display: none">
      <div class="animation-moving-div">
        <p class="animation-text-include" style="margin-right: 1px;">Value1</p>
      </div>
      <div class="animation-moving-div">
        <p class="animation-text-include">Value2</p>
      </div>
      <div class="animation-stack-box">
        <div class="animation-text-file">int1, int2</div>
      </div>
      <div class="animation-text-show">Storing values to int1, int2</div>
    </div>
    <div id="5" style="display: none">
      <div class="animation-ifelse-body">if value1 = = value2</div>
      <div
        style="
          display: inline-block;
          position: relative;
          top: 0px;
          left: 200px;
          background: black;
          color: white;
        "
      >
        true
      </div>
      <div
        style="
          display: inline-block;
          position: relative;
          top: 0px;
          left: 300px;
          background: black;
          color: white;
        "
      >
        false
      </div>
    </div>
    <div id="6" style="display: none">
      <div class="animation-ifelse-body">if value1 = = value2</div>
      <div class="animation-cursor-true">true</div>
      <div class="animation-show-true">Equal</div>
    </div>
    <div id="7" style="display: none"> 
      <div class="animation-ifelse-body">if value1 = = value2</div>
      <div class="animation-cursor-false">false</div>
      <div class="animation-show-false">Not Equal</div>
    </div>
    <div id="8" style="display: none">
      <div class="animation-ifelse-body">if value1 = = value2</div>
      <div class="animation-cursor-false">false</div>
      <div class="animation-show-false">Not Equal</div>  
    </div>
    <div id="9" style="display: none">
      <div class="animation-moving-div-mainup">
        <p class="animation-text-include">main()</p>
      </div>        
      <div class="animation-moving-div-main"></div>      
      <div class="animation-text-show">main function pop from stack memory</div>       
    </div>
  </div>
</div>
</div>
`;

  let el = document.getElementById("the");
  el.remove();
  document.body.insertAdjacentHTML("afterbegin", createHtml);
}
function handelMinusOperator() {
  let createHtml = `<div id='hell'><div id='three' class="nav-box" onclick='handelSim()'>
  <h6 class='hellgoback'>Home</h6>
</div>
<div class="flex-component-workplace">
  <div class="flex-20-box">
    <h2 class="heading">Input</h2>
    <input
      class="input-field"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Enter First Number"
      id="input1"
    />
    <input
      class="input-field"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Enter Second Number"
      id="input2"
    />
    <input
      class="input-submit-field"
      type="submit"
      value="submit"
      onclick="handelSubmit()"
    />
    <h2 class="output" id="output">Output :</h2>
    <div id="theOutput" style="display: none">
      <button class="input-submit-field" onClick="handelPrevious()">
        Previous
      </button>
      <button class="input-submit-field" onClick="handelNext()">Next</button>
    </div>
  </div>
  <div class="flex-40-left-box">
    <h2 class="heading">Code</h2>
    <code class="code-see" id="codeBlock" style="display: none">
      <p class="code-box">
        <span class="code-inside-code">#include "stdio.h"</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code">void main() {</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code"> int int1, int2;</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code"
          >printf("Input the values for Number1 and Number2 : ");</span
        >
      </p>
      <p class="code-box">
        <span class="code-inside-code">scanf("%d %d", &int1, &int2);</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code">if ((int1 - int2) == 0 )</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code"
          >printf("Number1 and Number2 are equal\n");</span
        >
      </p>
      <p class="code-box"><span class="code-inside-code">else</span></p>
      <p class="code-box">
        <span class="code-inside-code"
          >printf("Number1 and Number2 are not equal\n");</span
        >
      </p>
      <p class="code-box"><span class="code-inside-code">}</span></p>
    </code>
  </div>
  <div class="flex-40-right-box">
    <h2 class="heading">Animation</h2>
    <div id="0" style="display: none">
      <div class="animation-div1">
        <p class="animation-text-include">stdio.h</p>
      </div>
      <div class="animation-div2">
        <div class="animation-text-file">file.c</div>
      </div>      
    </div>
    <div id="1" style="display: none">
      <div class="animation-moving-div-datatype">
        <p class="animation-text-include">main()</p>
      </div>        
      <div class="animation-moving-div-main"></div>      
      <div class="animation-text-show">main function push into stack memory</div>
    </div>
    <div id="2" style="display: none">
      <div class="animation-moving-div">
        <p class="animation-text-include" style="margin-right: 1px;">int1</p>
      </div>
      <div class="animation-moving-div">
        <p class="animation-text-include">int2</p>
      </div>
      <div class="animation-stack-box">
        <div class="animation-text-file">memory location</div>
      </div>
      <div class="animation-text-show">allocating memory (4 bytes each) to the integer type variable int1 , int2</div>
    </div>
    <div id="3" style="display: none">
      <p class="animation-text-printf">
        Input the values for Number1 and Number2 :
      </p>
    </div>
    <div id="4" style="display: none">
      <div class="animation-moving-div">
        <p class="animation-text-include" style="margin-right: 1px;">Value1</p>
      </div>
      <div class="animation-moving-div">
        <p class="animation-text-include">Value2</p>
      </div>
      <div class="animation-stack-box">
        <div class="animation-text-file">int1, int2</div>
      </div>
      <div class="animation-text-show">Storing values to int1, int2</div>
    </div>
    <div id="5" style="display: none">
      <div class="animation-ifelse-body">if (int1 - int2) == 0</div>
      <div
        style="
          display: inline-block;
          position: relative;
          top: 0px;
          left: 200px;
          background: black;
          color: white;
        "
      >
        true
      </div>
      <div
        style="
          display: inline-block;
          position: relative;
          top: 0px;
          left: 300px;
          background: black;
          color: white;
        "
      >
        false
      </div>
    </div>
    <div id="6" style="display: none">
      <div class="animation-ifelse-body">if (int1 - int2) == 0</div>
      <div class="animation-cursor-true">true</div>
      <div class="animation-show-true">Equal</div>
    </div>
    <div id="7" style="display: none"> 
      <div class="animation-ifelse-body">if (int1 - int2) == 0</div>
      <div class="animation-cursor-false">false</div>
      <div class="animation-show-false">Not Equal</div>
    </div>
    <div id="8" style="display: none">
      <div class="animation-ifelse-body">if (int1 - int2) == 0</div>
      <div class="animation-cursor-false">false</div>
      <div class="animation-show-false">Not Equal</div>  
    </div>
    <div id="9" style="display: none">
      <div class="animation-moving-div-mainup">
        <p class="animation-text-include">main()</p>
      </div>        
      <div class="animation-moving-div-main"></div>      
      <div class="animation-text-show">main function pop from stack memory</div>       
    </div>
  </div>
</div>
</div>
`;
  let el = document.getElementById("the");
  el.remove();
  document.body.insertAdjacentHTML("afterbegin", createHtml);
}
function handelXorOperator() {
  let createHtml = `<div id='hell'><div id='three' class="nav-box" onclick='handelSim()'>
  <h6 class='hellgoback'>Home</h6>
</div>
<div class="flex-component-workplace">
  <div class="flex-20-box">
    <h2 class="heading">Input</h2>
    <input
      class="input-field"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Enter First Number"
      id="input1"
    />
    <input
      class="input-field"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Enter Second Number"
      id="input2"
    />
    <input
      class="input-submit-field"
      type="submit"
      value="submit"
      onclick="handelSubmit()"
    />
    <h2 class="output" id="output">Output :</h2>
    <div id="theOutput" style="display: none">
      <button class="input-submit-field" onClick="handelPrevious()">
        Previous
      </button>
      <button class="input-submit-field" onClick="handelNext()">Next</button>
    </div>
  </div>
  <div class="flex-40-left-box">
    <h2 class="heading">Code</h2>
    <code class="code-see" id="codeBlock" style="display: none">
      <p class="code-box">
        <span class="code-inside-code">#include "stdio.h"</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code">void main() {</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code"> int int1, int2;</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code"
          >printf("Input the values for Number1 and Number2 : ");</span
        >
      </p>
      <p class="code-box">
        <span class="code-inside-code">scanf("%d %d", &int1, &int2);</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code">if (!(int1 ^ int2))</span>
      </p>
      <p class="code-box">
        <span class="code-inside-code"
          >printf("Number1 and Number2 are equal\n");</span
        >
      </p>
      <p class="code-box"><span class="code-inside-code">else</span></p>
      <p class="code-box">
        <span class="code-inside-code"
          >printf("Number1 and Number2 are not equal\n");</span
        >
      </p>
      <p class="code-box"><span class="code-inside-code">}</span></p>
    </code>
  </div>
  <div class="flex-40-right-box">
    <h2 class="heading">Animation</h2>
    <div id="0" style="display: none">
      <div class="animation-div1">
        <p class="animation-text-include">stdio.h</p>
      </div>
      <div class="animation-div2">
        <div class="animation-text-file">file.c</div>
      </div>      
    </div>
    <div id="1" style="display: none">
      <div class="animation-moving-div-datatype">
        <p class="animation-text-include">main()</p>
      </div>        
      <div class="animation-moving-div-main"></div>      
      <div class="animation-text-show">main function push into stack memory</div>
    </div>
    <div id="2" style="display: none">
      <div class="animation-moving-div">
        <p class="animation-text-include" style="margin-right: 1px;">int1</p>
      </div>
      <div class="animation-moving-div">
        <p class="animation-text-include">int2</p>
      </div>
      <div class="animation-stack-box">
        <div class="animation-text-file">memory location</div>
      </div>
      <div class="animation-text-show">allocating memory (4 bytes each) to the integer type variable int1 , int2</div>
    </div>
    <div id="3" style="display: none">
      <p class="animation-text-printf">
        Input the values for Number1 and Number2 :
      </p>
    </div>
    <div id="4" style="display: none">
      <div class="animation-moving-div">
        <p class="animation-text-include" style="margin-right: 1px;">Value1</p>
      </div>
      <div class="animation-moving-div">
        <p class="animation-text-include">Value2</p>
      </div>
      <div class="animation-stack-box">
        <div class="animation-text-file">int1, int2</div>
      </div>
      <div class="animation-text-show">Storing values to int1, int2</div>
    </div>
    <div id="5" style="display: none">
      <div class="animation-ifelse-body">if !(int1 ^ int2)</div>
      <div
        style="
          display: inline-block;
          position: relative;
          top: 0px;
          left: 200px;
          background: black;
          color: white;
        "
      >
        true
      </div>
      <div
        style="
          display: inline-block;
          position: relative;
          top: 0px;
          left: 300px;
          background: black;
          color: white;
        "
      >
        false
      </div>
    </div>
    <div id="6" style="display: none">
      <div class="animation-ifelse-body">if !(int1 ^ int2)</div>
      <div class="animation-cursor-true">true</div>
      <div class="animation-show-true">Equal</div>
    </div>
    <div id="7" style="display: none"> 
      <div class="animation-ifelse-body">if !(int1 ^ int2)</div>
      <div class="animation-cursor-false">false</div>
      <div class="animation-show-false">Not Equal</div>
    </div>
    <div id="8" style="display: none">
      <div class="animation-ifelse-body">if !(int1 ^ int2)</div>
      <div class="animation-cursor-false">false</div>
      <div class="animation-show-false">Not Equal</div>  
    </div>
    <div id="9" style="display: none">
      <div class="animation-moving-div-mainup">
        <p class="animation-text-include">main()</p>
      </div>        
      <div class="animation-moving-div-main"></div>      
      <div class="animation-text-show">main function pop from stack memory</div>       
    </div>
  </div>
</div>
</div>
`;
  let el = document.getElementById("the");
  el.remove();
  document.body.insertAdjacentHTML("afterbegin", createHtml);
}

function handelSim() {
  let el = document.getElementById("hell");
  el.remove();
  MainPage();
  nextPreviousCounter = -1;
  wordtypingEffect();
}

// simulator functions
var nextPreviousCounter = -1;
var npCounter = 0;
var qwe = 0;
var animationCount = "";
var inequal = [0, 1, 2, 3, 4, 5, 6, 9];
var innotEqual = [0, 1, 2, 3, 4, 5, 7, 8, 9];
function handelPrevious() {
  if (nextPreviousCounter >= 1) {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    nextPreviousCounter -= 1;
    if (input1 == input2) {
      npCounter = inequal[nextPreviousCounter];
    } else {
      npCounter = innotEqual[nextPreviousCounter];
    }
    handelCode();
  }
}
function handelNext() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  nextPreviousCounter += 1;
  if (input1 == input2) {
    npCounter = inequal[nextPreviousCounter];
  } else {
    npCounter = innotEqual[nextPreviousCounter];
  }
  handelCode();
}
function handelCode() {
  console.log(npCounter);
  if (npCounter <= 9) {
    if (qwe) {
      qwe.style = "background: none; color: black;";
    }
    var tagname = document.getElementsByTagName("span");
    tagname[npCounter].style = "background: brown; color: white;";
    qwe = tagname[npCounter];
    handelAnimation();
  }
}
function handelAnimation() {
  animationCount.style = "display: none;";
  let animationId = document.getElementById(npCounter);
  animationId.style = "display: block;";
  animationCount = animationId;
}
function handelSubmit() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  if (input1 && input2) {
    if (input1 == input2) {
      let output = document.getElementById("output");
      output.innerHTML = "Output : Equal";
      let theOutput = document.getElementById("theOutput");
      theOutput.style = "display: block;";
      let codeBlock = document.getElementById("codeBlock");
      codeBlock.style = "display: block;";
    } else {
      let output = document.getElementById("output");
      output.innerHTML = "Output : Not Equal";
      let theOutput = document.getElementById("theOutput");
      theOutput.style = "display: block;";
      let codeBlock = document.getElementById("codeBlock");
      codeBlock.style = "display: block;";
    }
  } else {
    let output = document.getElementById("output");
    output.innerHTML = "Output : Error";
  }
}
// type functions
const typewords = [
  "Hello, User",
  "Please Select Any Operator",
  "To Start The Simulator",
];
let typei = 0;
let typetimer;

function wordtypingEffect() {
  let typeword = typewords[typei].split("");
  var wordloopTyping = function () {
    if (typeword.length > 0) {
      document.getElementById("type-word").innerHTML += typeword.shift();
    } else {
      worddeletingEffect();
      return false;
    }
    typetimer = setTimeout(wordloopTyping, 100);
  };
  wordloopTyping();
}

function worddeletingEffect() {
  let typeword = typewords[typei].split("");
  var wordloopDeleting = function () {
    if (typeword.length > 0) {
      typeword.pop();
      document.getElementById("type-word").innerHTML = typeword.join("");
    } else {
      if (typewords.length > typei + 1) {
        typei++;
      } else {
        typei = 0;
      }
      wordtypingEffect();
      return false;
    }
    typetimer = setTimeout(wordloopDeleting, 100);
  };
  wordloopDeleting();
}

wordtypingEffect();
