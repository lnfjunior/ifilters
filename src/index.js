import * as arrayFilters from './array/index'
import * as othersFilters from './others/index'

let iFilters = {
  install: function(Vue) {
    Vue.mixin({
      methods: {
        concat: arrayFilters.concat,
        formatSize: othersFilters.formatSize
      }
    })
  }
}

export default iFilters;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(iFilters);
}
