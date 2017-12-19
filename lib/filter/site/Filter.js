const { formatProp, formatArrayJoin } = require('../lib');
/** Site Filter */
class SiteFilter {
  /**
   * @param {Object} filter - the underlying filter object
   * @param {(String|Array)} filter.type 
   * @param {(String|Array)} filter.site 
   * @param {Object} filter.thread 
   * @param {String} filter.thread.country 
   * @param {String} filter.suffix
   * @param {String} filter.full 
   * @param {(String|Array)} filter.category 
   * @param {String} filter.rank - {@link COMPARATOR} + the actual value
   */
  constructor({
    type, site, country, suffix, full, category, rank
  }){
    this.site_type = type;
    this.site = site;
    this.thread = country ? { country } : {};
    this.site_suffix = suffix;
    this.site_full = full;
    this.site_category = category;
    this.domain_rank = rank;
  }
  
  get ['thread.country'](){ return this.thread.country}
  
  * props(){
    yield* ['site_type','site','thread.country','site_suffix','site_full','site_category','domain_rank']
  }
  /**
   * @return {String} query
   */
  toString(){
    let result = '';
    for( let prop of this.props()){
      if(this[prop] === undefined) continue;
      switch(prop){
        case 'site_type':
        case 'site':
        case 'site_category':
          result += formatArrayJoin(prop, this[prop]); break;
        default:
          result += formatProp(prop, this[prop]);
      }
    }
    return result;
  }
}

module.exports = SiteFilter;