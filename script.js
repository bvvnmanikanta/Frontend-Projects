const username = "bvvnmanikanta";
const repo = "Frontend-Projects";

fetch(`https://api.github.com/repos/${username}/${repo}/contents`)
  .then(response => response.json())
  .then(data => {
    const fileList = document.getElementById("file-list");
    const ul = document.createElement("ul");

    data.forEach(item => {
      if (item.type === "file" && item.name.endsWith(".html")) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `https://github.com/${username}/${repo}/blob/master/${item.path}`;
        a.textContent = item.name;
        li.appendChild(a);
        ul.appendChild(li);
      }
    });

    fileList.appendChild(ul);
  })
  .catch(error => {
    console.error(error);
  });
