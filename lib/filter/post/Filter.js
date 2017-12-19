const { formatProp, formatArray, formatArrayJoin } = require('../lib');
/**
 * Post Filter Content
 */
class PostFilter{
  constructor({
    language, author, text, has_video, external_links, is_first, rating, published
  }){
    this.has_video = has_video;
    this.language = language;
    this.author = author;
    this.is_first = is_first;
    this.text = text;
    this.external_links = external_links;
    this.rating = rating;
    this.published = published;
  }
  
  * props(){ yield* ['has_video','language', 'author', 'is_first', 'text', 'external_links', 'rating', 'published'];}

  toString(){
    let result = '';
    for( let prop of this.props()){
      if(this[prop] === undefined)continue;
      switch(prop){
        case 'text':
          result += formatArray(prop, this[prop]); break;
        case 'language':
          result += formatArrayJoin(prop, this[prop]); break;
        case 'external_links':
          result += formatProp(prop, this[prop].replace(':','\:').replace('/','\/')); break;
        default:
          result += formatProp(prop, this[prop]);
      }
    }
    return result;
  }
}

module.exports = PostFilter