import * as arrayFilters from './array/index'

let iFilters = {
  install: function(Vue) {
    Vue.mixin({
      methods: {
        concat: arrayFilters.concat
      }
    })
  }
}

export default iFilters;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(iFilters);
}
