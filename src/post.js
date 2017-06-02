class Post {
  constructor(url, caption){
    this.url = url
    this.caption = caption
  }


  // render(){
  //   // need to render out a new div
  //   return `<div id="image-div"><image src= "${this.url}"><p>${this.caption}</p></div>`
  // }

  render(){
    // need to render out a new div
    return `<div id="image-div"><image src= "${this.url}"><p>${this.caption}</p>Comment:
    <form id="comment-form"><input type='text' id="image-comment"/><div id ="comment-line"></div><br><input type='submit'/>
    </form><br>
    </div>`
  }



}
