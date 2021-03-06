const Filter = require('./Filter');
const { COMPARATOR, arrayOrString } = require('../lib');
const FILTER_KEY = Symbol('Filter')
/**A thread contains global information about the content of the whole page and its content. A thread can contain multiple posts grouped together.*/
class ThreadFilterBuilder {
  constructor(){
    this[FILTER_KEY] = new Filter({});
  }
  /**
   * A textual Boolean query describing the keywords that should (or shouldn’t) appear in the thread title.
   * @param {String}
   * @return {ThreadFilter}
   */
  title(t){ this[FILTER_KEY].thread.title = arrayOrString(t); return this;}
  /**
   * A textual Boolean query describing the keywords that should (or shouldn’t) appear in the site’s section where the post was published
   * @param {String}
   * @return {this}
   */
  section_title(s){ this[FILTER_KEY].thread.section_title = s; return this;}
  /**
   * Get all the posts of a specific thread (note that you must escape the http:// part of the URL like so: http\:\/\/).
   * @param {String}
   * @return {this}
   */
  url(u){ this[FILTER_KEY].thread.url = u; return this}
  /**
   * A score value between 0 to 1, indicating how spammy the thread text is.
   * Return threads with spam score lower or equals to 0.8: spam_score:<=0.8
   * @param {Number}
   * @param {String} comparator
   * @return {this}
   */
  spam_score(ss, comp=COMPARATOR.EQ){ this[FILTER_KEY].spam_score = comp.concat(ss); return this}
  /**
   * A time-stamp (in milliseconds) enable you to filter threads that were published before or after certain date/time.
   * Return threads published after Thu, 30 Mar 2017 09:16:28 GMT: thread.published:>1490865388
   * @param {Number|Date}
   * @param {String} comparator
   * @return {this}
   */
  published(p, comp=COMPARATOR.GT){ this[FILTER_KEY].thread.published = comp.concat(p); return this}
  /**
   * A time-stamp (in milliseconds) enable you to filter posts that were crawled before or after certain date/time.
   * Return posts crawled after Thu, 30 Mar 2017 09:16:28 GMT: crawled:>1490865388
   * @param {Number|Date}
   * @param {String} comparator
   * @return {this}
   */
  crawled(c, comp=COMPARATOR.GT){//TODO checking/formating Date
    this[FILTER_KEY].crawled = comp.concat(c); return this}
  /**
   * @return {Filter}
   */
  build(){ return this[FILTER_KEY];}
}

module.exports = ThreadFilterBuilder;