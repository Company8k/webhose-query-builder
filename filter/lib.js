/** @enum {String} */
const COMPARATOR = { GT: '>', EQ: '=', LT: '<' }
const arrayOrString = (val) => Array.isArray(val) ? val : [val]

const formatProp = (prop, value) => ` ${prop}:${value}`;
const formatArray = (p,v) => v.length == 1 ? formatProp(p,v) : ` ${p}:(${v.join(' OR ')})`;

const formatArrayJoin = (p,v) => {
  if(v.length ==1) return formatProp(p,v);
  let result = ' (';
  for( let val of v){
    result += `${p}:${val}`;
    if( v.indexOf(val) < v.length-1){
      result += ' OR '
    }
  }
  return result += ')'
}

module.exports = {
  COMPARATOR, arrayOrString, formatProp, formatArray, formatArrayJoin
}