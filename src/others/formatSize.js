var UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
var STEP = 1024

function formatFileSize(value, power) {
    return (value / Math.pow(STEP, power)).toFixed(2) + UNITS[power]
}

/**
 * Filter filter for size to file input
 *
 * @param {Object} value
 * @return {String}
 */
function formatSize(value) {
    value = parseFloat(value, 10)
    for (var i = 0; i < UNITS.length; i++) {
        if (value < Math.pow(STEP, i)) {
            if (UNITS[i - 1]) {
                return formatFileSize(value, i - 1)
            }
            return value + UNITS[i]
        }
    }
    return formatFileSize(value, i - 1)
}

export default formatSize

