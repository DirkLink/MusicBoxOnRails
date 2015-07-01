$(document).on("ready", function(){
  $(".upvote").on("click", function() {
    var votes = $(this).parent().children(".voter")
    $.ajax("/vote", {
        method: "POST",
        data: {
          song_title: $(this).data().songTitle,
          value: $(this).data().voteValue 
        },
        error: function(data) {
          alert(data.error_message)
        },
        success: function(data) {
          votes.text(data.total_votes) 
        }
     })
  })

  $(".downvote").on("click", function() {
    var votes = $(this).parent().children(".voter")
    $.ajax("/vote", {
        method: "POST",
        data: {
          song_title: $(this).data().songTitle,
          value: $(this).data().voteValue 
        },
        error: function(data) {
          alert(data.error_message)
        },
        success: function(data) {
          votes.text(data.total_votes) 
        }
     })
  })
})