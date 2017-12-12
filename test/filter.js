const { PostFilter } = require('../lib/query/filter/Post');

let filter1 = new PostFilter({language:['english'], author:'NT'})
let filter2 = new PostFilter({language:['germant','italian'], has_video:true});

console.log('parsed:',filter1, filter2, `${filter1}`, filter2.toString())