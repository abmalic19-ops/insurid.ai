function simulateUpload() {
  const fileInput = document.getElementById("fileInput");
  const output = document.getElementById("output");

  if (!fileInput.files.length) {
    output.innerHTML = "No file selected.";
    return;
  }

  const file = fileInput.files[0];

  output.innerHTML = `
    <strong>File received:</strong> ${file.name}<br/>
    <strong>Behavior:</strong> Structured<br/>
    <strong>Explanation:</strong> Generated<br/>
    <strong>Status:</strong> Awaiting human decision<br/><br/>
    <em>INSURID does not decide. It clarifies.</em>
  `;
}
