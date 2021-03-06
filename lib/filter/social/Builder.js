const Filter = require('./Filter');
const { COMPARATOR } = require('../lib');
const FILTER_KEY = Symbol('Filter');
/** Social Filter Builder */
class SocialFilterBuilder{
  constructor(){
    this[FILTER_KEY] = new Filter({});
  }
  /**
   * A virality score for news and blogs posts only.
   * The score ranges between 0-10, where 0 means that the post didn't do well at all, i.e rarely or was never shared, to 10 which means that the post was on fire, shared thousands of times on Facebook. 
   * Search for news or blog posts with performance score higher than 8 (highly viral): apple performance_score:>8
   * @param {Number} score
   * @param {String} comparator
   * @return {this}
   */
  performance_score(s, comp=COMPARATOR.GT){ this[FILTER_KEY].performance_score = comp+s; return this;}
  /**
   * Return posts filtered by the number of Facebook likes. 
   * Return posts with more than 10 Facebook likes: social.facebook.likes:>10 
   * social.facebook.shares 
   * Return posts filtered by the number of Facebook shares. 
   * Return posts with more than 10 Facebook shares: social.facebook.shares:>10 
   * social.facebook.comments 
   * Return posts filtered by the number of Facebook comments. 
   * Return posts with more than 10 Facebook comments: social.facebook.comments:>10
   * @param {Object}
   * @return {this}
   */
  facebook(f){ this[FILTER_KEY].social.facebook = f; return this}
  /**
   * Return posts filtered by the number of Google Plus shares. 
   * Return posts with more than 10 Google Plus shares: social.gplus.shares:>10
   * @param {Number} shares
   * @param {String} comparator
   * @return {this}
   */
  gplus(s, comp=COMPARATOR.GT){
    let shares = comp.concat(s)
    this[FILTER_KEY].social.gplus ? this[FILTER_KEY].social.gplus.shares = shares : this[FILTER_KEY].social.gplus = { shares };
    return this
  }
  /**
   * Return posts filtered by the number of Pinterest shares. 
   * Return posts with more than 10 Pinterest shares: social.pinterest.shares:>10
   * @param {Number} shares
   * @param {String} comparator
   * @return {this}
   */
  pinterest(s, comp=COMPARATOR.GT){
    let shares = comp.concat(s);
    this[FILTER_KEY].social.pinterest ? this[FILTER_KEY].social.pinterest.shares = shares : this[FILTER_KEY].social.pinterest = { shares };
    return this;
  }
  /**
   * Return posts filtered by the number of Linkedin shares. 
   * Return posts with more than 10 Linkedin shares: social.linkedin.shares:>10
   * @param {Number} shares
   * @param {String} comparator
   * @return {this}
   */
  linkedin(s, comp=COMPARATOR.GT){
    let shares = comp.concat(s);
    this[FILTER_KEY].social.linkedin ? this[FILTER_KEY].social.linkedin.shares = shares : this[FILTER_KEY].social.linkedin = { shares };
    return this;
  }
  /**
   * Return posts filtered by the number of Stumbledupon shares. 
   * Return posts with more than 10 Stumbledupon shares: social.stumbledupon.shares:>10
   * @param {Number} shares
   * @param {String} comparator
   * @return {this}
   */
  stumbledupon(s, comp=COMPARATOR.GT){
    let val = comp.concat(s);
    this[FILTER_KEY].social.stumbledupon ? this[FILTER_KEY].social.stumbledupon.shares = shares : this[FILTER_KEY].social.stumbledupon = { shares };
    return this;
  }
  /**
   * Return posts filtered by the number of VK shares. 
   * Return posts with more than 10 VK shares: social.vk.shares:>10
   * @param {Number} shares
   * @param {String} comparator
   * @return {this}
   */
  vk(s, comp=COMPARATOR.GT){
    let shares = comp.cocnat(s);
    this[FILTER_KEY].social.vk ? this[FILTER_KEY].social.vk.shares = val : this[FILTER_KEY].social.vk = { shares };
    return this;
  }
  /**
   * @return {Filter}
   */
  build(){ return this[FILTER_KEY];}
}

module.exports = SocialFilterBuilder;