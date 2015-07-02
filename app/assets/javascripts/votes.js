  var vote_function = function() {
    var votes = $(this).parent().children(".voter")
     console.log($(this).data())
     console.log(this)
     window.jd = this
      $.ajax("/vote", {
          method: "POST",
          data: {
            song_title: $(this).data().songTitle,
            value: $(this).data().voteValue 
          },
          success: function(data) {
            votes.text(data.total_votes)
            if (typeof data.error_message != 'undefined') {
              alert(data.error_message)
            } 
          }
       })
  }
$(document).on("ready", function(){
  $(".upvote").on("click", vote_function)
  $(".downvote").on("click", vote_function)
})