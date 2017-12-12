const Filter = require('./lib')
/** Post Filter Content */
class PostFilter extends Filter{
  constructor({
    language, author, text, has_video, external_links, is_first, rating, published
  }){
    super(language, author, text, has_video, external_links, is_first, rating, published);
    this._has_video = has_video;
    this._language = language;
    this._author = author;
    this._is_first = is_first;
  }
  /**
   * The language of the post. The default is any.
   */
  get language(){ return super.formatArrayJoin('language', this._language)}
  /**
   * Return posts written by a specific author
   */
  get author(){ return super.formatProp('author', this._author) }
  /**
   * A textual Boolean query describing the keywords that should (or shouldn’t) appear in the post text.
   */
  get text(){ return `text: `}
  /**
   * A Boolean parameter that specifies if to search only for posts that contain a video.
   */
  get has_video(){ return super.formatProp('has_video', this._has_video)}
  /**
   * Search for posts that included links to another site.
   */
  get external_links(){ return `external_links:`}
  /**
   * A Boolean parameter that specifies if to search only on the first post (exclude the comments)
   */
  get is_first(){ return super.formatProp('is_first', this._is_first)}
  /**
   * For review posts, the rating parameter provides the star rating for the review, a floating number between 0.0 to 5.0.
   */
  get rating(){ return `rating:>`}
  /**
   * A time-stamp (in milliseconds) enable you to filter posts that were published before or after certain date/time.
   */
  get published(){ return `published:>`}
  toString(){
    return `${this.language} ${this.author} ${this.has_video}`;
  }
}

module.exports = {
  PostFilter
}
/*
(language:french OR language:italian)

text:(apple OR android)

external_links

Search for posts that linked to LinkedIn (note that both the slashes and colons are prefixed by a backslash):
external_links:https\:\/\/www.linkedin.com*
is_first

is_first:true
rating

Return all the posts with rating greater than 0:
rating:>0
published

Return posts published after Thu, 30 Mar 2017 09:16:28 GMT:
published:>1490865388
 */