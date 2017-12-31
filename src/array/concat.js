import util from '../util/index'
/**
 * Filter filter for arrays
 *
 * @param {Array|Object} arr
 * @param {Object|Array} joined
 * @return {Array}
 */
function concat(arr, joined) {
    if (isUndefined(joined)) return arr;

    if (util.isArray(arr)) {
        return util.isObject(joined)
            ? arr.concat(util.toArray(joined))
            : arr.concat(joined);
    }

    if (util.isObject(arr)) {
        let array = util.toArray(arr);
        return (util.isObject(joined))
            ? array.concat(util.toArray(joined))
            : array.concat(joined);
    }
    return arr;
}