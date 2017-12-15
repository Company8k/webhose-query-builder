const { arrayOrString, COMPARATOR } = require('../lib');
const Filter = require('./Filter');
module.exports = class {
  constructor(){
    this.filter = new Filter({});
  }
  /**
   * The language of the post. The default is any.
   *  Find posts in French or Italian: (language:french OR language:italian)
   * @param {Array|String}
   * @return {this}
   */
  language(lang){ this.filter.language = arrayOrString(lang); return this}
  // Maximum call stack, but dont want _Props ;--; get language(){ returnArrayOrString(this.language) }
  /**
   * Return posts written by a specific author
   * Find posts written by Admin: author:Admin
   * @param {String} author
   * @return {this}
   */
  author(a){ this.filter.author = a; return this};
  //TODO get method, and above concat with text, or maybe not needed. Depends on formatter
  /**
   * A textual Boolean query describing the keywords that should (or shouldn’t) appear in the post text. text:(apple OR android)
   * @param {String|Array} text
   * @return {this}
   */
  text(t){ this.filter.text = t; return this;}
  /**
   * A Boolean parameter that specifies if to search only for posts that contain a video. has_video:true
   * @param {Boolean} has_vide
   * @return {this}
   */
  has_video(b){ this.filter.has_video = b; return this;}
  /**
   * Search for posts that included links to another site.
   * Search for posts that linked to LinkedIn (note that both the slashes and colons are prefixed by a backslash):
   * external_links:https\:\/\/www.linkedin.com*
   * @param {Array}
   * @return {this}
   */
  external_links(eL){ this.filter.external_links = arrayOrString(eL); return this}
  /**
   * A Boolean parameter that specifies if to search only on the first post (exclude the comments) is_first:true
   * @param {Boolean} is_first
   * @return {this}
   */
  is_first(f){ this.filter.is_first = f; return this}
  /**
   * For review posts, the rating parameter provides the star rating for the review, a floating number between 0.0 to 5.0.
   * Return all the posts with rating greater than 0: rating:>0
   * @param {Number}
   * @param {COMPARATOR}
   * @return {this}
   */
  rating(r,comp=COMPARATOR.GT){ this.filter.rating = `${comp}${r}`; return this}
  /**
   * A time-stamp (in milliseconds) enable you to filter posts that were published before or after certain date/time.
   * Return posts published after Thu, 30 Mar 2017 09:16:28 GMT: published:>1490865388
   * @param {Number|Date}
   * @return {this}
   */
  published(p, comp=COMPARATOR.GT){ this.filter.published = `${comp}${p}`; return this;}
  /**
   * Returns the underlying filter Object
   * @return {Object}
   */
  build(){ return this.filter;}
}