
  
# ember-cli-highlightjs
Ember-cli Syntax highlighting addon for the Web using HighlightJs

![screen record of preview](https://github.com/shayanypn/ember-cli-highlighjs/blob/master/preview.png)

[Demo](http://ember-cli-highlighjs.shayanypn.ir/)

## Installation
Ember:
`ember install ember-cli-highlightjs`

NPM:
`npm install ember-cli-highlightjs`



## Usage

**Default:**

```hbs
    {{#highlight-code}}
    @font-face {
      font-family: Chunkfive; src: url('Chunkfive.otf');
    }
    body, .usertext {
      color: #F0F0F0; background: #600;
      font-family: Chunkfive, sans;
    }
    @import url(print.css);
    {{/highlight-code}}
```

 
 **Specify Theme:**
```hbs
    {{highlight-code
      theme='agate'
      code='POST /task?id=1 HTTP/1.1
    Host: example.org
    Content-Type: application/json; charset=utf-8
    Content-Length: 137
    
    {
      "status": "ok",
      "extended": true,
      "results": [
        {"value": 0, "type": "int64"},
        {"value": 1.0e+3, "type": "decimal"}
      ]
    }'}}
```
**Specify Code Type:**

```hbs
    {{#highlight-code
      theme='atom-one-light'
      type='javascript'
      }}
    function $initHighlight(block, cls) {
      try {
        if (cls.search(/\bno\-highlight\b/) != -1)
          return process(block, true, 0x0F) +
                 ` class="${cls}"`;
      } catch (e) {
        /* handle exception */
      }
      for (var i = 0 / 2; i &lt; classes.length; i++) {
        if (checkCondition(classes[i]) === undefined)
          console.log('undefined');
      }
    }
    export  $initHighlight;
    {{/highlight-code}}
```

**With Ember V3:**

```hbs
    <HighlightCode>
    @font-face {
      font-family: Chunkfive; src: url('Chunkfive.otf');
    }
    body, .usertext {
      color: #F0F0F0; background: #600;
      font-family: Chunkfive, sans;
    }
    @import url(print.css);
    <HighlightCode>
 ```
for checking all themes and code type please look at [HighlighJs](https://highlightjs.org)




## Contributing
If you find an issue or missing functionality, please don't hesistate to open a pull request.

### Installation
* `git clone https://github.com/shayanypn/ember-cli-highlighjs.git` 
* `npm install`
* `bower install`

### Running
* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests
* `npm test`

### Building
* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).