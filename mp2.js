const eventListener = () => {
  document
    .querySelector(".btn_back")
    .addEventListener("click", listPageToMainPage);
  document.querySelector(".tableEl").addEventListener("click", onDeleteRow);
};

const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
const feedbacks = JSON.parse(localStorage.getItem("feedbacks"));
console.log(feedbacks);

const onAddWebsite = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  feedbacks.forEach((e) => {
    tbodyEl.innerHTML += `
    <tr>
        <td>${e.name}</td>
        <td>${e.phone}</td>
        <td>${e.email}</td>
        <td><button class="deleteBtn">Delete</button></td>
    <tr>
`;
  });
};

/* for (let i = 0; i < feedbacks.length; i++) {
    tbodyEl.innerHTML += `
        <tr>
            <td>${feedbacks[i].name}</td>
            <td>${feedbacks[i].phone}</td>
            <td>${feedbacks[i].email}</td>
            <td><button class="deleteBtn">Delete</button></td>
        <tr>
  `;
  } 
}; */

onAddWebsite();

const onDeleteRow = (e) => {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }
  const btn = e.target;
  btn.closest("tr").remove();
};

const listPageToMainPage = () => {
  location.href = "/index.html";
};

eventListener();
