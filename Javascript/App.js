// $(document).ready(function () {
//   // Thêm class 'active' vào hình ảnh đầu tiên
// //   $(".slide-image").first().addClass("active");

//   // Thêm sự kiện để xác định khi slide được chuyển đến
//   $(".carousel").on("slide.bs.carousel", function () {
//     var $current = $(".active");
//     $current.removeClass("active");
//     var $next = $current.next(".slide-image");
//     if ($next.length) {
//       $next.addClass("active");
//     } else {
//       $(".slide-image").first().addClass("active");
//     }
//   });
// });
new WOW().init();
