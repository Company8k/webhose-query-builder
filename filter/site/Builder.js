const Filter = require('./Filter');
/** Site Filters */
module.exports = class {
  constructor(){
    this.filter = new Filter({});
  }
  /**
   * What type of sites to search in (the default is any). Available Types:
   * news
   * blogs
   * discussions
   * Only news: site_type:news
   * News & Blogs: (site_type:news OR site_type:blogs)
   * @param {String|Array}
   * @return {this}
   */
  type(t){ this.filter.site_type = t; return this}
  /**
   * Limit the results to a specific site or sites.
   * Limit the results to posts from Yahoo or CNN: (site:yahoo.com OR site:cnn.com)
   * @param {String|Array}
   * @return {this}
   */
  site(s){ this.filter.site = s; return this;}//TODO proper handlig of Array vs String
  /**
   * Webhose.io uses heuristics to determine the country origin of a site, by taking into account the site's IP, TLD and language.
   * Many times the country origin isn't conclusive so it isn't set, therefor filtering by country may result in much less data than when filtering by language.
   * Return posts from sites from Hong Kong: thread.country:HK
   * To get the full country code list, visit countrycode.org.
   * @param {String}
   * @return {this}
   */
  country(c){ this.filter.thread.country = c; return this}
  /**
   * Limit the results to a specific site suffix
   * Return posts from sites where their top level domain (TLD) ends with .fr:
   * @param {String}
   * @return {this}
   */
  suffix(s){ this.filter.site_suffix = s; return this}
  /**
   * Filter sites based on the domain and optionally by their sub-domain
   * Return posts from Yahoo answers: site_full:answers.yahoo.com
   * @param {String}
   * @return {this}
   */
  full(f){ this.filter.site_full = f; return this}
  /**
   * Limit the results to posts originating from sites categorized as one (or more) of the following.
   * Return posts from sites categorized as sports or games related: (site_category:sports OR site_category:games)
   * @param {String|Array}
   * @return {this}
   */
  category(c){this.filter.site_category = c; return this}
  /**
   * A rank that specifies how popular a domain is (by monthly traffic)
   * Search for posts from the top 1,000 sites: domain_rank:<1000
   * @param {Number}
   * @return {this}
   */
  domainRank(d){ this.filter.domain_rank = d; return this}
  /**
   * @return {Filter}
   */
  build(){ return this.filter;}
}