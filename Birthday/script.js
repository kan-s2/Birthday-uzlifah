$(document).ready(function(){
  $("#present").addClass("animate__animated animate__bounceInDown");
  $("#present").hover(function(){
      $("#present #top").addClass("animate__animated animate__bounce");
  }, function(){
      $("#present #top").removeClass("animate__animated animate__bounce");
  });
  $("#present").on("click", function(){
    $("#present #top").removeClass("animate__animated animate__bounce");
    $("#present #top").addClass("animate__animated animate__bounceOutUp");
    $(this).unbind("click");
    $(this).unbind("mouseleave");
    setTimeout(function(){
      $("#present #cat").css("top", "-160px");
    }, 1000);
    $("#wish").children("div").each(function(index){
      setTimeout(bounceIn.bind(null, $(this)), 2500+index*100)
    });
  });
  function bounceIn(el){
    el.show().addClass("animate__animated animate__bounceInDown animate__swing");
    setTimeout(function(){
      el.removeClass("animate__bounceInDown").addClass("animate__swing")
    }, 1000);
  }
});