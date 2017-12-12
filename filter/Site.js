/** @const {RegExp} */
const TEST_TYPE = /(blog|news|discussions)/

/** Class for Site params */
class SiteFilter {
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
  /** @param {Array|String} site_type */
  type(type){
    Array.isArray(type) ? this.site_type.concat(type) : this.site_type.push(type);
    return this;
  }
  /**
   * Limit the results to a specific site or sites.
   * @param {String}
   * @return {SiteFilter}
   */
  site(s){ this.site.push(s); return this; }
  /**
   * Limit the results to a specific site suffix
   * @param {String} site_suffix
   * @return {SiteFilter}
   */
  suffix(s){ this.site_suffix = suffix; return this; }
  /**
   * Webhose.io uses heuristics to determine the country origin of a site, by taking into account the site's IP, TLD and language.
   * Many times the country origin isn't conclusive so it isn't set, therefor filtering by country may result in much less data than when filtering by language.
   * @param {String}
   * @return {SiteFilter}
   */
  country(cc){ this.thread.country = cc; return this; }
  /**
   * Filter sites based on the domain and optionally by their sub-domain
   * @param {String}
   * @return {SiteFilter}
   */
  full(domain){ this.site_full = domain; return this;}
  /**
   * Limit the results to posts originating from sites categorized as one (or more) of the following.
   * @param {Array|String}
   */
  category(c){ Array.isArray(c) ? this.site_category.concat(c) : this.site_category.push(c); return this; }
  /**
   * A rank that specifies how popular a domain is (by monthly traffic)
   * @param {Number}
   * @return {SiteFilter}
   */
  rank(r){ this.domain_rank = r; return this;}
}
