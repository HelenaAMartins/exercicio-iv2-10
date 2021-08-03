export const arrayData = JSON.parse(localStorage.getItem("arrayData")) || [];

export const saveOnStorage = (data) =>
  localStorage.setItem("arrayData", JSON.stringify(data));

export const removeStorage = () => {
  localStorage.removeItem("arrayData");
  window.location.href = "/";
};

