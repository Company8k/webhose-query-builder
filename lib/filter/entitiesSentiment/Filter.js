/** Used for Entities with Sentiment */
class Sentiment {
  /**
   * @param {Object} arg
   * @param {String} arg.type - positiv|negativ|neutral
   * @param {String} arg.value - actual value
   */
  constructor({ type, value}){
    this.type = type;
    this.value = value;
  }
}

/** Entites/Sentitmet Filter */
class EntityFilter{
  /**
   * @param {Object} filter - the underlying filter
   * @param {Sentiment} filter.person
   * @param {Sentiment} filter.organization 
   * @param {Sentiment} filter.location
   */
  construcor({ person, organization, location }){
    this.person = person;
    this.organization = organization;
    this.location = location;
  }
  * props(){
    yield* ['person','organization','location']
  }
  /**
   * @return {String} query
   */
  toString(){
    let result = '';
    for( let prop of this.props()){
      if(this[prop] === undefined ) continue;
      result += ` ${prop}.${this[prop].type}="${this[prop].value}"`;
    }
    return result;
  }
}
/**
 * Filter Part
 * @see EntityFilter 
 * @see Sentiment
 * @module filter/entitiesSentiment
 */
module.exports = {
  EntityFilter, Sentiment
}
/*
 * [entity].[sentiment]
 * Find an entity with a sentiment context attached to it.
 * person.positive:"obama"
 * organization.negative:"apple"
 * organization.neutral:"google"
 */
