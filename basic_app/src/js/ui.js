// css 파일 로드
import "../css/ui.css";

$(function () {
  $("#container").addClass("start");
  $("nav li").on("click", function () {
    $("#container").css("mas-width", "100%");
    let id = $(this).attr("data-rol");
    $("nav li").removeClass("on");
    $(this).addClass("on");

    //클릭 시 가지고 있던 클래스를 모두 지운다
    $(".content").removeClass("prev this next");

    //클릭한 메뉴와 매칭 되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev클래스를 지정한다
    $("#" + id)
      .addClass("this")
      .prevAll()
      .addClass("prev");

    //클릭한 메뉴와 매칭 되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다
    $("#" + id)
      .nextAll()
      .addClass("next");
  });

  //로고 클릭 시
  $(".logo_box").on("click", function () {
    $("nav li").removeClass("on");
    $(".content").removeClass("prev this next");
    $("#container").css("max-width", "1200px");
  });

  //롤링배너 왼쪽
  $(".roll_left").on("click", function () {
    $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
  });

  //롤링배너 오른쪽
  $(".roll_right").on("click", function () {
    $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
  });

  //ajax 사용하기
  $(".book_roll li").on("click", function () {
    var _this = $(this);
    var liurl = _this.data("url");
    $(".notebook").html();
    $.ajax({
      type: "get",
      url: "book/" + liurl,
      dataType: "html",
      success: function (data) {
        $(".notebook").html(data);
      },
    });
  });

  //faq 게시판
  $(".accordio_box ol li").on("click", function () {
    $(".accordio_box ol li").removeClass("on");
    $(this).addClass("on");
  });

  //팝업 닫기
  $(".close").on("click", function () {
    $(".thankyou_message").css("display", "none");
  });

  $("#submitbtn").on("click", function (event) {
    $(".thankyou_message").css("display", "block");
  });
});
