// add event handler
function submitComment() {
    // gather data: name and message
    const inputField = document.getElementById("name");
    const name = inputField.value;
    const textArea = document.getElementById("msg");
    const msg = textArea.value;

    // create necessary elements: a section, an h3 heading and a paragraph.
    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // adjust these new elements by adding the data from the form.
    h3.innerHTML = `${name} said:`;
    // Puts quote-marks around the message.
    p.innerHTML = `"${msg}"`;

    // add the stuff to the section called comment: "comment", h3(name) and p(msg)
    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);
    // adds the css class "handwriting" to the p element so it's the right font.
    p.classList.add("handwriting");

    // creating comment section element and adding the comment to it.
    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);

    // empty the form after comment submission
    inputField.value = null;
    textArea.value = null;
}