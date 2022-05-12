const userName = "Martin Partin";
const userHandle = "pjartin";

const userNameFields = document.querySelectorAll(".userName");
const userHandleFields = document.querySelectorAll(".userHandle");

userNameFields.forEach(field => field.textContent = userName);
userHandleFields.forEach(field => field.textContent = `(@${userHandle})`);