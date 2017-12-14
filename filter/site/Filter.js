const { formatProp, formatArrayJoin } = require('../lib');
/** Site Filter */
module.exports = class {
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