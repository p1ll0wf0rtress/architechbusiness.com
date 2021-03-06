const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h
const serializers = {
  types: {
    code: props => (
      h('pre', {className: props.node.language},
        h('code', props.node.code)
      )
    )
  }
}

var blocks = function(res){
    return blocksToHtml({
        blocks: res.body,
        serializers: serializers,
        projectId: 'gtb605x1',
        dataset: 'production',
    });
}


export default blocks;