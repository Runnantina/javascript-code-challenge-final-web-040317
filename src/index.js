$(document).ready(function(){
  // your code here!

  $('#photo-form').on('submit', function(event){
    event.preventDefault()


    var imageURL = $('#url_input').val()
    var captionInput = $('#caption_input').val()


    var newPost = new Post(imageURL, captionInput)
    var renderImage = newPost.render()
    console.log(renderImage)

    $('#photo-list').append(renderImage)
    $('#url_input').val('')
    $('#caption_input').val('')

  }) // photo-form

  $('body').on('submit', '#comment-form', function(event){
    event.preventDefault()

    var imageComment = $('#image-comment').val()
    var newComment = new Comment(imageComment)
    $('#comment-line').append(newComment.render())


    $('#image-comment').val('')
  })

}) //document
