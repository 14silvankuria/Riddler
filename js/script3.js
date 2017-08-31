$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var Q1Input = $("input#Q1").val();
    var Q2Input = $("input#Q2").val();
    var Q3Input = $("input#Q3").val();
    var Q4Input = $("input#Q4").val();
    var Q5Input = $("input#Q5").val();
    var Q6Input = $("input#Q6").val();
    var Q7Input = $("input#Q7").val();
    var Q8Input = $("input#Q8").val();
    var Q9Input = $("input#Q9").val();

    $(".Q1").text(Q1Input);
    $(".Q2").text(Q2Input);
    $(".Q3").text(Q3Input);
    $(".Q4").text(Q4Input);
    $(".Q5").text(Q5Input);
    $(".Q6").text(Q6Input);
    $(".Q7").text(Q7Input);
    $(".Q8").text(Q8Input);
    $(".Q9").text(Q9Input);

    event.preventDefault();
  });
});
