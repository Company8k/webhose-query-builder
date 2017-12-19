const { formatProp } = require('../lib');
/** A thread contains global information about the content of the whole page and its content. A thread can contain multiple posts grouped together.*/
class ThreadFilter{
  constructor({
    title, section_title, url, spam_score, published, crawled
  }){
    this.thread = { title, section_title, url, published };
    this.spam_score = spam_score;
    this.crawled = crawled;
  }
  * props(){
    yield* ['thread.title','thread.url','thread.published','spam_score','crawled']
  }
  
  get ['thread.title'](){ return this.thread.title}
  get ['thread.url'](){ return this.thread.url }
  get ['thread.published'](){ return this.thread.published}
  
  toString(){
    let result = '';
    if(this.thread.section_title !== undefined){
      result += ' AND thread.section_title:'.concat(this.thread.section_title);
    }
    for( let prop of this.props()){
      if(this[prop] === undefined)continue;
      switch(prop){
        case 'thread.url':
          result += formatProp(prop, this[prop].replace(/(:|\/)/g,'\\$1')); break;
        case 'thread.title':
          this[prop].forEach( (val) => {
            result += val.startsWith('-') ? formatProp('-'.concat(prop),val.substr(1)) : formatProp(prop,val);
          });break;
        default:
          result += formatProp(prop, this[prop]);
      }
    }
    return result;
  }
  
}

module.exports = ThreadFilter;