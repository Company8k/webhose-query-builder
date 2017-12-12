const { PostFilter } = require('../lib/query/filter/Post');
const { ThreadFilter } = require('../lib/query/filter/Thread');
const { SocialFilter } = require('../lib/query/filter/Social')

let filter1 = new PostFilter({language:['english'], author:'NT'})
let filter2 = new PostFilter({language:['germant','italian'], has_video:true});
console.log(new ThreadFilter({}))
console.log(
  new SocialFilter({}).pinterest(10)
)

console.log('parsed:',filter1, filter2, `${filter1}`, filter2.toString())