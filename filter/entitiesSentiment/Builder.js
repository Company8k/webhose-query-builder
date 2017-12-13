const Filter = require('./Filter');
/** @const {Symbol} */
const FILTER_KEY = Symbol('Filter');
/**
 * We extract entities such as Persons, Organizations and Locations from all the English news and blog posts we crawl. 
 * We detect the sentiment attached to Persons and Organizations (not Locations) from the top news outlets.
 */
module.exports = class {
  constructor(){ this[FILTER_KEY] = new Filter({});}
  /**
   * Filter by person name. You should use this filter only for disambiguation, otherwise you should use a simple keyword search. person:"barack obama"
   * @param {String|Object}
   * @return {this}
   */
  person(p){ this.person = p; return this;}
  /**
   * Filter by organization/company name. You should use this filter only for disambiguation, otherwise you should use a simple keyword search. organization:"apple"
   * @param {String|Object}
   * @return {this}
   */
  organization(o){ this.organization = o; return this;}
  /**
   * Filter by location name 
   * Important: Don't confuse this with the country filter. If you want to search for sites from a specific country, use the thread.country parameter (explained above).
   * location:"germany"
   * @param {Object|String}
   * @return {this}
   */
  location(l){ this.location = l; return this;}
  //TODO attach entity; but will be formatted as is passed in
  
}