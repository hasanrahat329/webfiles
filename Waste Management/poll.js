function addComment() {
  let text = document.getElementById("comment").value;
  if(text === "") return;

  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = text;

  document.getElementById("commentList").appendChild(li);
  document.getElementById("comment").value = "";
}