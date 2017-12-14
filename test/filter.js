const PostFilter = require('../filter/post/Filter');
const ThreadFilter = require('../filter/thread/Filter');
const SocialFilter = require('../filter/social/Builder');
const SiteFilter = require('../filter/site/Builder')

let filter1 = new PostFilter({language:['english'], author:'NT'})
let filter2 = new PostFilter({language:['germant','italian'], has_video:true});
console.log(new ThreadFilter({}))
console.log(
  new SocialFilter({}).pinterest(10).build().toString()
)