
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})


// JavaScript code for the code editor component
class CodeEditor {
  constructor(element, title) {
    this.element = element;
    this.title = title;
    this.init();
  }
  
  
  init() {
    this.titleEl = this.element.querySelector('.code-editor__title');
    this.runBtn = this.element.querySelector('.code-editor__run-btn');
    this.fullscreenBtn = this.element.querySelector('.code-editor__fullscreen-btn');
    this.inputEl = this.element.querySelector('.code-editor__input');
    this.outputIframe = this.element.querySelector('.code-editor__output-iframe');

    this.titleEl.textContent = this.title;

    this.runBtn.addEventListener('click', () => {
      this.outputIframe.contentWindow.document.open();
      this.outputIframe.contentWindow.document.write(this.inputEl.value);
      this.outputIframe.contentWindow.document.close();
    });

    this.fullscreenBtn.addEventListener('click', () => {
      if (!this.isFullscreen) {
        this.element.requestFullscreen();
        this.isFullscreen = true;
      } else {
        document.exitFullscreen();
        this.isFullscreen = false;
      }
    });

    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement === this.element) {
        this.fullscreenBtn.innerHTML = 'Exit Fullscreen';
      } else {
        this.fullscreenBtn.innerHTML = 'Fullscreen';
      }
    });
  }
}
const codeEditors = document.querySelectorAll('.code-editor');
  codeEditors.forEach(editor => new CodeEditor(editor, 'Code Editor'));

// const runBtn = document.getElementById('run-btn');
// const fullscreenBtn = document.getElementById('fullscreen-btn');
// const codeInput = document.getElementById('code-input');
// const outputIframe = document.getElementById('output-iframe');

// runBtn.addEventListener('click', () => {
//   outputIframe.contentWindow.document.open();
//   outputIframe.contentWindow.document.write(codeInput.value);
//   outputIframe.contentWindow.document.close();
// });


// // full screen
// let isFullscreen = false;

// fullscreenBtn.addEventListener('click', () => {
//   if (!isFullscreen) {
//     outputIframe.requestFullscreen();
//     isFullscreen = true;
//   } else {
//     document.exitFullscreen();
//     isFullscreen = false;
//   }
// });

// document.addEventListener('fullscreenchange', () => {
//   if (document.fullscreenElement) {
//     fullscreenBtn.innerHTML = 'Exit Fullscreen';
//   } else {
//     fullscreenBtn.innerHTML = 'Fullscreen';
//   }
// });

// This function is called when a tab button is clicked
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Get all elements with the class "tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Get all elements with the class "tablinks" and remove the "active" class from them
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Show the tab content element corresponding to the clicked tab button
  // Add the "active" class to the clicked tab button
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// This code ensures that the page is loaded before the JavaScript is executed
document.addEventListener("DOMContentLoaded", function(event) { 
  // Here you can add any initialization code that you need
  
  // Get the first tab button and simulate a click on it to show its tab content
  document.getElementsByClassName("tablinks")[0].click();
});






function runCode(button) {
  // Get the corresponding elements for the current editor
  var editor = button.previousElementSibling;
  var output = button.nextElementSibling;

  try {
    // Redirect console.log to the output element
    var outputText = "";
    var originalConsoleLog = console.log;
    console.log = function (message) {
      outputText += message + "<br>";
    };

    // Execute the code from the current editor
    eval(editor.value);

    // Restore console.log
    console.log = originalConsoleLog;

    // Display the output in the corresponding output element
    output.innerHTML = "Output:<br>" + outputText;
  } catch (error) {
    // Display any errors in the corresponding output element
    output.innerHTML = "Error: " + error.message;
  }
}











