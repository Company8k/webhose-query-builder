/**Social Filters*/
module.exports = class {
  constructor({
    performance_score, social
  }){
    this.performance_score = performance_score;
    this.social = social || {};
  }
  /**
   * @generator
   * @yields {String} prop
   */
  * props(){
    yield* ['performance_score','social.facebook.likes','social.facebook.shares','social.facebook.comments',
    'social.gplus.shares','social.pinterest.shares','social.linkedin.shares','social.stumbledupon.shares',
    'social.vk.shares']
  }
  
  toString(){
    let result = '';
    return result;
  }
}
