const { Filter } = require('../lib');
const { Sentiment } = require('../lib/filter/entitiesSentiment/Filter')

let filter = new Filter('jj');
filter.thread().section_title('rest')
filter.post().author('somebody').has_video(false)
filter.entitySentiment().person(new Sentiment({type:'positiv',value:'obama'}))
console.log(filter.query)
