const Filter = require('./Filter');
const { arrayOrString, COMPARATOR } = require('../lib');
const FILTER_KEY = Symbol('Filter')
/** Builder for {@link SiteFilter} */
class SiteFilterBuilder{
  constructor(){
    this[FILTER_KEY] = new Filter({});
  }
  /**
   * What type of sites to search in (the default is any). Available Types:
   * news
   * blogs
   * discussions
   * Only news: site_type:news
   * News & Blogs: (site_type:news OR site_type:blogs)
   * @param {(String|Array)} t - formats type
   * @return {this}
   */
  type(t){
    let type = arrayOrString(t);
    console.log(this[FILTER_KEY].site_type, t, type);
    this[FILTER_KEY].site_type = this[FILTER_KEY].site_type === undefined ? type : this[FILTER_KEY].site_type.concat(type);
    return this;
  }
  /**
   * Formats specific site query
   * @param {(String|Array)} s - Limit the results to a specific site or sites
   * @return {SiteFilterBuilder} this
   */
  site(s){
    let site = arrayOrString(s);
    this[FILTER_KEY].site = this[FILTER_KEY].site === undefined ? site : this[FILTER_KEY].site.concat(site)
    return this
  }
  /**
   * Webhose.io uses heuristics to determine the country origin of a site, by taking into account the site's IP, TLD and language.
   * Many times the country origin isn't conclusive so it isn't set, therefor filtering by country may result in much less data than when filtering by language.
   * Return posts from sites from Hong Kong: thread.country:HK
   * To get the full country code list, visit countrycode.org.
   * @param {String}
   * @return {this}
   */
  country(c){ this[FILTER_KEY].thread.country = c; return this}
  /**
   * Limit the results to a specific site suffix
   * Return posts from sites where their top level domain (TLD) ends with .fr:
   * @param {String}
   * @return {this}
   */
  suffix(s){ this[FILTER_KEY].site_suffix = s; return this}
  /**
   * Filter sites based on the domain and optionally by their sub-domain
   * Return posts from Yahoo answers: site_full:answers.yahoo.com
   * @param {String}
   * @return {this}
   */
  full(f){ this[FILTER_KEY].site_full = f; return this}
  /**
   * Limit the results to posts originating from sites categorized as one (or more) of the following.
   * Return posts from sites categorized as sports or games related: (site_category:sports OR site_category:games)
   * @param {(String|Array)}
   * @return {this}
   */
  category(c){
    let cat = arrayOrString(c);
    this[FILTER_KEY].site_category = this[FILTER_KEY].site_category === undefined ? cat : this[FILTER_KEY].site_category.concat(cat);
    return this
  }
  /**
   * A rank that specifies how popular a domain is (by monthly traffic)
   * Search for posts from the top 1,000 sites: domain_rank:<1000
   * @param {Number}
   * @param {@link COMPARATOR}
   * @return {this}
   */
  domainRank(d, comp=COMPARATOR.LT){ this[FILTER_KEY].domain_rank = `${comp}${d}`; return this}
  /**
   * @return {Filter}
   */
  build(){ return this[FILTER_KEY];}
}

module.exports = SiteFilterBuilder;