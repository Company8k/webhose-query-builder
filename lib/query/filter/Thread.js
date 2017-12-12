/** A thread contains global information about the content of the whole page and its content. A thread can contain multiple posts grouped together.*/
class ThreadFilter{
  constructor({
    title, section_title, url, spam_score, published, crawled
  }){
    this.thread = { title, section_title, url, published };
    this.spam_score = spam_score;
    this.crawled = crawled;
  }
  /**
   * A textual Boolean query describing the keywords that should (or shouldn’t) appear in the thread title.
   * @param {String}
   * @return {ThreadFilter}
   */
  title(t){ this.thread.title = t; return this;}
  /**
   * A textual Boolean query describing the keywords that should (or shouldn’t) appear in the site’s section where the post was published
   * @param {String}
   * @return {this}
   */
  section_title(s){ this.thread.section_title = s; return this;}
  /**
   * Get all the posts of a specific thread (note that you must escape the http:// part of the URL like so: http\:\/\/).
   * @param {String}
   * @return {this}
   */
  url(u){ this.thread.url = u; return this}
  /**
   * A score value between 0 to 1, indicating how spammy the thread text is.
   * Return threads with spam score lower or equals to 0.8: spam_score:<=0.8
   * @param {Number}
   * @return {this}
   */
  spam_score(ss){ this.spam_score = ss; return this}
  /**
   * A time-stamp (in milliseconds) enable you to filter threads that were published before or after certain date/time.
   * Return threads published after Thu, 30 Mar 2017 09:16:28 GMT: thread.published:>1490865388
   * @param {Number|Date}
   * @return {this}
   */
  published(p){ this.thread.published = p; return this}
  /**
   * A time-stamp (in milliseconds) enable you to filter posts that were crawled before or after certain date/time.
   * Return posts crawled after Thu, 30 Mar 2017 09:16:28 GMT: crawled:>1490865388
   * @param {Number|Date}
   * @return {this}
   */
  crawled(c){//TODO checking/formating Date
    this.crawled = c; return this}
  
}
//TODO negative titles
module.exports = {
  ThreadFilter
}

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