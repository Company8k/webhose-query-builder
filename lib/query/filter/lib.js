module.exports = class Filter {
  constructor(...args){
    console.log(this,args)
  }
  
  formatProp(prop, value){
    if(!value){return ''}
    return `${prop}:${value}`;
  }
  formatArrayJoin(prop, value){
    console.log(value)
    if(!value){return}
    console.log(value.length)
    if(value.length == 1){
      return `${prop}:${value[0]}`
    }
    let result = '(';
    for( let val of value){
      console.log(val, value.indexOf(val), value.length)
      result += `${prop}:${val}`;
      if( value.indexOf(val) < value.length-1){
        result += ' OR '
      }
    }
    return result += ')'
  }
  /**
   * @return {String}
   */
  get [Symbol.toStringTag]() {
    return 'Filter'
  }
}