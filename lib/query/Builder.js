/** Builder for Query */
class QueryBuilder {
  /**
   * @param {String} q - initial query
   */
  constructor(q){
    this.query = { q: q}
  }
  /**
   * @return {String} formated Query
   */
  build(){
    
  }
  /**
   * @param {String} sort
   * @return {QueryBuilder} 
   */
  sort(sort){ this.query.sort = sort; return this}
  /**
   * If you choose to order the posts by any of the above numeric sort values, you can choose in what order you want to get them:
   * asc (default)
   * desc
   * 
   * @param {String} order
   * @return {QueryBuilder}
   */
  order(order){ this.query.order = order; return this}
  /**
   * A paging parameter that works only when you don't sort the data by crawl date.
   * @param {Number} from
   * @return {QueryBuilder}
   */
  from(from){ this.query.from = from; return this}
  /**
   * The "ts" (timestamp) parameter is telling the system to return results that were crawled after this timestamp (Unix Timestamp in milliseconds).
   * When not specified the default is the past 3 days.
   * 
   * @param {Number} ts
   * @return {QueryBuilder}
   */
  timestamp(ts){ this.query.ts = ts; return this}
  /**
   * The output format of the results set. It can be either:
   * json
   * xml
   * rss
   * excel
   * 
   * @param {String} format
   * @return {QueryBuilder}
   */
  format(format){ this.query.format = format; return this}
  /**
   * The total number of posts returned per request, ranges between 1 to 100 (default is 100)
   * @param {Number} size
   * @return {QueryBuilder}
   */
  size(size){ this.query.size = size; return this;}
  /**
   * Return only posts with high extraction accuracy, but removes about 30% of the total matching posts (with lower confidence).
   * 
   * @param {String} accuracy_confidence
   * @return {QueryBuilder}
   */
  accuracy_confidence(accuracy_confidence){ this.query.accuracy_confidence = accuracy_confidence; return this;}
  /**
   * Return the fragments in the post that matched the textual Boolean query. The matched keywords will be surrounded by <em/> tags.
   * @param {String} highlight
   * @return {QueryBuilder}
   */
  highlight(highlight){ this.query.highlight = highlight; return this;}
  /**
   * This will return the latest 100 crawled posts matching your query.
   * It's NOT recommended to use this feature as it may result in you missing important posts.
   * @param {Boolean} latest
   * @return {QueryBuilder} 
   */
  latest(latest){ this.query.latest = latest; return this}
}