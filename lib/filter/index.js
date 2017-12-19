const PostBuilder = require('./post/Builder');
const SiteBuilder = require('./site/Builder');
const SocialBuilder = require('./social/Builder');
const ThreadBuilder = require('./thread/Builder');
const EntitySentimentFilterBuilder = require('./entitiesSentiment/Builder')
/**
 * 
 */
class WebhoseQuery{
  /**
   * @param {String} q - Query
   */
  constructor(q){
    this.q = q;
    this.postBuilder = new PostBuilder({});
    this.siteBuilder = new SiteBuilder({});
    this.socialBuilder = new SocialBuilder({});
    this.threadBuilder = new ThreadBuilder({});
    this.entitySentimentBuilder = new EntitySentimentFilterBuilder({});
  }
  /** @return {PostFilterBuilder}*/
  post(){ return this.postBuilder }
  /** @return {SiteFilterBuilder} */
  site(){ return this.siteBuilder }
  /** @return {SocialFilterBuilder} */
  social(){ return this.socialBuilder }
  /** @return {ThreadFilterBuilder} */
  thread(){ return this.threadBuilder }
  /** @return {EntitySentimentFilterBuilder} */
  entitySentiment(){ return this.entitySentimentBuilder }
  /** @return {String} query */
  get query(){
    //TODO initial query
    return `${this.q}\
${this.threadBuilder.build()}\
${this.postBuilder.build()}\
${this.siteBuilder.build()}\
${this.socialBuilder.build()}\
${this.entitySentimentBuilder.build()}`
  }
}
/**
 * Module exports
 * @see filter/entitiesSentiment
 * @module filter
 */
module.exports = WebhoseQuery;