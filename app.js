var editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow_night");
    // editor.getSession().setMode("ace/mode/ruby");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setReadOnly(false);



document.getElementById("myBtn").addEventListener("click", save);
document.getElementById("myBtn2").addEventListener("click", set);

function save() {
  var myStuff = editor.getValue();

      console.log(myStuff);
}

function set() {
 editor.setValue('holla');
}