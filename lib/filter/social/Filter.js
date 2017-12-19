const { formatProp } = require('../lib');
/**Social Filters*/
class SocialFilter{
  /**
   * @param {Object} filter The underlying filter object
   * @param {String} filter.performance_score 
   * @param {Object} filter.social
   * @param {Object} filter.social.facebook
   * @param {String} filter.social.facebook.likes - {@link COMPARATOR} + the actual value
   * @param {String} filter.social.facebook.shares - {@link COMPARATOR} + the actual value
   * @param {String} filter.social.facebook.comments - {@link COMPARATOR} + the actual value
   * @param {String} filter.social.gplus.shares - {@link COMPARATOR} + the actual value
   * @param {String} filter.social.pinterest.shares - {@link COMPARATOR} + the actual value
   * @param {String} filter.social.linkedin.shares - {@link COMPARATOR} + the actual value
   * @param {String} filter.social.stumbledupon.shares - {@link COMPARATOR} + the actual value
   */
  constructor({
    performance_score, social
  }){
    this.performance_score = performance_score;
    this.social = social || {};
  }
  
  * props(){
    yield* ['performance_score','social.facebook.likes','social.facebook.shares','social.facebook.comments',
    'social.gplus.shares','social.pinterest.shares','social.linkedin.shares','social.stumbledupon.shares',
    'social.vk.shares']
  }
  /**
   * @return {String} query
   */
  toString(){
    let result = '';
    for( let prop of this.props()){
      let [ root, network, value ] = prop.split('.');
      if(network !== undefined && value !== undefined){
        let socialObject = this[root][network];
        if(socialObject && socialObject[value]){
          result += formatProp(prop, socialObject[value]);
        }
      } else if(this[prop] !== undefined){
        result += formatProp(prop,this[prop]);
      }
    }
    return result;
  }
}

module.exports = SocialFilter;