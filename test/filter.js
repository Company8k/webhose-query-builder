const Filter = require('../filter')


let filter = new Filter('jj');
filter.thread().section_title('rest')
filter.post().author('somebody').has_video(false)
console.log(filter.query)
