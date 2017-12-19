## Install
run `npm install @8k/webhose-query-builder`

### Usage
---
```
const { WebhoseQuery } = require('8k/webhose-query-builder');

let filter = new WebhoseQuery(/*Query*/);
filter.post(); //Post filter builder
filter.thread(); //Thread filter builder
...
let url = `http://url.prefix${filter.query}`;

```
---
see [docs](https://company8k.github.io/webhose-query-builder/) for more info

### Licence
---
[MIT](LICENSE)