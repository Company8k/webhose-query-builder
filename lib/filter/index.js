const PostBuilder = require('./post/Builder');
const SiteBuilder = require('./site/Builder');
const SocialBuilder = require('./social/Builder');
const ThreadBuilder = require('./thread/Builder');
/** @module filter */
module.exports = class {
  constructor(q){
    this.q = q;
    this.postBuilder = new PostBuilder({});
    this.siteBuilder = new SiteBuilder({});
    this.socialBuilder = new SocialBuilder({});
    this.threadBuilder = new ThreadBuilder({});
  }
  /** @return {PostBuilder}*/
  post(){ return this.postBuilder }
  /** @return {SiteBuilder} */
  site(){ return this.siteBuilder }
  /** @return {SocialBuilder} */
  social(){ return this.socialBuilder }
  /** @return {ThreadBuilder} */
  thread(){ return this.threadBuilder }
  /** @return {String} query */
  get query(){
    //TODO initial query
    return `${this.q}\
${this.threadBuilder.build()}\
${this.postBuilder.build()}\
${this.siteBuilder.build()}\
${this.socialBuilder.build()}`
  }
}
