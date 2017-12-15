/** Entites/Sentitmet Filter */
module.exports = class {
  construcor({ person, organization, location }){
    this.person = person;
    this.organization = organization;
    this.location = location;
  }
  /**
   * @generator
   * @yields {String} prop
   */
  * props(){
    yield* ['person','organization','location']
  }
  /**
   * @return {String}
   */
  toString(){
    let result = '';
    return result;
  }
}
/*
 * [entity].[sentiment]
 * Find an entity with a sentiment context attached to it.
 * person.positive:"obama"
 * organization.negative:"apple"
 * organization.neutral:"google"
 */
