//khai báo
let btn_add_account = document.querySelector(".btn-add-account");
let modal_admin_course = document.querySelector(".modal-admin-course");
let close_btn = document.querySelector(".close-btn");

//gắn sự kiện
btn_add_account.addEventListener("click", function () {
  modal_admin_course.style.display = "block";
});
close_btn.addEventListener("click", function () {
  modal_admin_course.style.display = "none";
});


