const startConf = () => {
  const feedbacks =
    localStorage.getItem("feedbacks") == null
      ? localStorage.setItem("feedbacks", JSON.stringify([]))
      : localStorage.getItem("feedbacks");
};

startConf();

const eventListeners = () => {
  document.querySelector(".fb_form").addEventListener("submit", addFeedback);
  document
    .querySelector(".btn_list")
    .addEventListener("click", firstPageToListPage);
};

const formValidation = (nameVal, emailVal, phoneVal, messageVal) => {
  console.log(nameVal);

  if (nameVal.length == 0) {
    toastr.error("Name section cannot be empty", "Access Denied");
    return false;
  } else if (emailVal.length == 0) {
    toastr.error("Phone section cannot be empty", "Access Denied");
    return false;
  } else if (phoneVal.length == 0) {
    toastr.error("Email section cannot be empty", "Access Denied");
    return false;
  } else if (messageVal.length < 10) {
    toastr.error(
      "Message cannot be shorter than 10 characters",
      "Access Denied"
    );
    return false;
  } else {
    toastr.success("You have submitted your feedback", "Submit taken");
    return true;
  }
};

const addFeedback = (e) => {
  e.preventDefault();

  const nameVal = document.querySelector("#textIp").value;
  const emailVal = document.querySelector("#emailIp").value;
  const phoneVal = document.querySelector("#phoneIp").value;
  const messageVal = document.querySelector("#messageIp").value;

  const validation = formValidation(nameVal, emailVal, phoneVal, messageVal);

  if (!validation) {
    return;
  }

  const feedBackObj = {
    name: nameVal,
    email: emailVal,
    phone: phoneVal,
    message: messageVal,
  };

  const feedbacks = JSON.parse(localStorage.getItem("feedbacks"));
  feedbacks.push(feedBackObj);
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  console.log(feedbacks);
};

const firstPageToListPage = () => {
  location.href = "/index2.html";
};

eventListeners();
