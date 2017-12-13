/** Site Filter */
module.exports = class {
  constructor({
    type, site, country, suffix, full, category, rank
  }){
    this.site_type = type || [];
    this.site = site || [];
    this.thread = country ? { country } : {};
    this.site_suffix = suffix;
    this.site_full = full;
    this.site_category = category || [];
    this.domain_rank = rank;
  }
  
  * props(){
    yield* ['site_type','site','thread.country','site_suffix','site_full','site_category','domain_rank']
  }
  
  toString(){
    let result = '';
    return result;
  }
}