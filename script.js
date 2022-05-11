const userName = "Martin Jarneid";
const userHandle = "mjartin";

const userNameFields = document.querySelectorAll(".userName");
const userHandleFields = document.querySelectorAll(".userHandle");

userNameFields.forEach(field => field.textContent = userName);
userHandleFields.forEach(field => field.textContent = `(@${userHandle})`);