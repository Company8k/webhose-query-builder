const { formatProp, formatArray, formatArrayJoin } = require('../lib');
/**
 * Post Filter Content
 * @class
 */
module.exports = class {
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