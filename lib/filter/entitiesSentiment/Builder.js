const { EntityFilter } = require('./Filter');
const FILTER_KEY = Symbol('Filter');
/**
 * We extract entities such as Persons, Organizations and Locations from all the English news and blog posts we crawl. 
 * We detect the sentiment attached to Persons and Organizations (not Locations) from the top news outlets.
 */
class EntitySentimentFilterBuilder {
  /**
   * Creates internal { @link EntityFilter } object
   */
  constructor(){ this[FILTER_KEY] = new EntityFilter({});}
  /**
   * Filter by person name. You should use this filter only for disambiguation, otherwise you should use a simple keyword search. person:"barack obama"
   * @param {Sentiment}
   * @return {this}
   */
  person(p){ this[FILTER_KEY].person = p; return this;}
  /**
   * Filter by organization/company name. You should use this filter only for disambiguation, otherwise you should use a simple keyword search. organization:"apple"
   * @param {Sentiment}
   * @return {this}
   */
  organization(o){ this[FILTER_KEY].organization = o; return this;}
  /**
   * Filter by location name 
   * Important: Don't confuse this with the country filter. If you want to search for sites from a specific country, use the thread.country parameter (explained above).
   * location:"germany"
   * @param {Sentiment}
   * @return {this}
   */
  location(l){ this[FILTER_KEY].location = l; return this;}
  /**
   * @return {EntityFilter}
   */
  build(){ return this[FILTER_KEY]}
}
/**
 * Builder Part
 * @see EntitySentimentFilterBuilder
 * @module filter/entitiesSentiment
 */ 
module.exports = EntitySentimentFilterBuilder;