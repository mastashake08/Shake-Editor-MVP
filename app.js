
document.getElementById('run-btn').addEventListener('click', function() {
    let code = document.getElementById('code-editor').value;
    try {
        eval(code);
    } catch (err) {
        console.error(err);
        alert('Error:: ', err)
    }
});
document.getElementById('load-btn').addEventListener('click', function() {
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', function(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function() {
            document.getElementById('code-editor').value = reader.result;
        };
        reader.readAsText(file);
    });
    fileInput.click();
});
document.getElementById('save-btn').addEventListener('click', function() {
    let text = document.getElementById('code-editor').value;
    let blob = new Blob([text], {type: 'text/plain'});
    let anchor = document.createElement('a');
    anchor.download = 'code.js';
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
});