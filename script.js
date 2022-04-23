function popupOpenClose(popup) {
  if ($(".wrapper").length == 0) {
    $(popup).wrapInner("<div class='wrapper'></div>");
  }
  $(popup).show();
  /* Close popup if user clicks on background */
  $(popup).click(function (e) {
    if (e.target == this) {
      if ($(popup).is(":visible")) {
        $(popup).hide();
      }
    }
  });
  /* Close popup and remove errors if user clicks on cancel */
  $(popup)
    .find("button[name=close]")
    .on("click", function () {
      if ($(".formElementError").is(":visible")) {
        $(".formElementError").remove();
      }
      $(popup).hide();
    });
}
$(document).ready(function () {
  $("[data-js=open]").on("click", function () {
    popupOpenClose($(".popup"));
  });
});
/* Hamburger mobile menu */
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("active");
});
