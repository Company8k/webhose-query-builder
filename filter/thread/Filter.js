/** A thread contains global information about the content of the whole page and its content. A thread can contain multiple posts grouped together.*/
module.exports = class {
  constructor({
    title, section_title, url, spam_score, published, crawled
  }){
    this.thread = { title, section_title, url, published };
    this.spam_score = spam_score;
    this.crawled = crawled;
  }
  * props(){
    yield* ['thread.title','thread.section_title','thread.url','thread.published','spam_score','crawled']
  }
  
  toString(){
    let result = '';
    return result;
  }
  
}
//TODO negative titles

/*
 * thread.title

Search for posts containing the word "glass" and not "metal" in their title:
thread.title:glass -thread.title:metal
thread.section_title

Search for the posts containing the word food only under sections with a title that contains the word "restaurants":
food AND thread.section_title:restaurants
thread.url

spam_score

thread.published

crawled

 */