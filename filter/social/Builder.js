const Filter = require('./Filter');
/** @const {Symbol} */
const FILTER_KEY = Symbol('Filter');
/** Social Filter Builder */
module.exports = class {
  constructor(){
    this[FILTER_KEY] = new Filter({});
  }
  /**
   * A virality score for news and blogs posts only.
   * The score ranges between 0-10, where 0 means that the post didn't do well at all, i.e rarely or was never shared, to 10 which means that the post was on fire, shared thousands of times on Facebook. 
   * Search for news or blog posts with performance score higher than 8 (highly viral): apple performance_score:>8
   */
  performance_score(s){ this.performance_score = s; return this;}
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
  facebook(f){ this.social.facebook = f; return this}
  /**
   * Return posts filtered by the number of Google Plus shares. 
   * Return posts with more than 10 Google Plus shares: social.gplus.shares:>10
   * @param {Number}
   * @return {this}
   */
  gplus(shares){
    this.social.gplus ? this.social.gplus.shares = shares : this.social.gplus = { shares }; return this
  }
  /**
   * Return posts filtered by the number of Pinterest shares. 
   * Return posts with more than 10 Pinterest shares: social.pinterest.shares:>10
   * @param {Number}
   * @return {this}
   */
  pinterest(shares){
    this.social.pinterest ? this.social.pinterest.shares = shares : this.social.pinterest = { shares }; return this;
  }
  //TODO gt,lt as param
  /**
   * Return posts filtered by the number of Linkedin shares. 
   * Return posts with more than 10 Linkedin shares: social.linkedin.shares:>10
   * @param {Number}
   * @return {this}
   */
  linkedin(shares){
    this.social.linkedin ? this.social.linkedin.shares = shares : this.social.linkedin = { shares }; return this;
  }
  /**
   * Return posts filtered by the number of Stumbledupon shares. 
   * Return posts with more than 10 Stumbledupon shares: social.stumbledupon.shares:>10
   * @param {Number}
   * @return {this}
   */
  stumbledupon(shares){
    this.social.stumbledupon ? this.social.stumbledupon.shares = shares : this.social.stumbledupon = { shares }; return this;
  }
  /**
   * Return posts filtered by the number of VK shares. 
   * Return posts with more than 10 VK shares: social.vk.shares:>10
   * @param {Number} shares
   * @return {this}
   */
  vk(shares){
    this.social.vk ? this.social.vk.shares = shares : this.social.vk = { shares }; return this;
  }
  
}