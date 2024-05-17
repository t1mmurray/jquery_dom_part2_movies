// Fires the Submit button
$("#submit").on("click", function (e) {
  e.preventDefault();
  // Throws an error if the movie title is less than two characters long
  if ($("#title-input").val().length < 2) {
    throw new Error("Title must be two characters or longer");
  }
  // Adds a list item submission which contains the inputted movie title and rating data
  $("ol").append(
    "<li data-value=" +
      $("#scale-input").val() +
      "> <p>" +
      $("#title-input").val() +
      " ---> " +
      $("#scale-input").val() +
      "</p> <button class=delete>X</button> </li>"
  );
});

//Delete button functionality for each submission
$("ol").on("click", ".delete", function () {
  $(this).parent().remove();
});

// Sorting the submissions based on their inputted rating (data-value attribute contains equivalent value)
$("#sort-rating").on("click", function (e) {
  e.preventDefault();
  let items = $("ol li").get();
  items.sort(function (a, b) {
    return $(b).data("value") - $(a).data("value");
  });
  $.each(items, function (i, item) {
    $("ol").append(item);
  });
});
