$("document").ready(function() {
  $(":header").each(function(id) {
    var el = $(this);
    if (el.attr("id") !== undefined) {
      el.html("<a role='scroller' href='#"+ el.attr("id") +"'>#</a>" + el.html());
    }
  });

  $("a").each(function(id) {
    $(this).on("click", function(el) {
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        el.preventDefault();

        // Store hash
        var hash = this.hash;

        // console.log(hash);

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html').animate({
          scrollTop: $(hash).offset().top - 95
        }, 500, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          var currentElement = $(hash);
          var id = currentElement.attr("id");
          currentElement.removeAttr("id");
          history.replaceState(undefined, undefined, hash)
          currentElement.attr("id", id);
        });
      }
    });
  });

  // $("div[class='toc']").children().children().each(function (id) {
  //   let a = $(this).children();
  //   // console.log(a);
  //   a.text(a.text().replace("#", ""));
  // });
});
