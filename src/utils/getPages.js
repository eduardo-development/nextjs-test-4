import _ from 'lodash';

/**
 * Get all the pages located under the provided `urlPath`.
 * I.e.: All pages having the `urlPath` prefix in their URLs, (excluding the
 * page having URL equal to prefix).
 *
 * @example
 * urlPath => '/posts'
 * pages => [
 *   '/',
 *   '/about',
 *   '/posts',
 *   '/posts/hello',
 *   '/posts/world'
 * ]
 *
 * getPages(pages, urlPath)
 * => [
 *   '/posts/hello',
 *   '/posts/world'
 * ]
 *
 *
 * @param {Array} pages Array of page objects. All pages must have '__metadata' object with 'url' field.
 * @param {string} urlPath The url path to filter pages by
 * @return {Array}
 */
export default function(pages, urlPath) {
    urlPath = _.trim(urlPath, '/');
    const urlPathParts = _.split(urlPath, '/');
    return _.filter(pages, page => {
        const pageUrlPath = _.trim(_.get(page, 'stackbit_url_path'), '/');
        const pageUrlParts = _.split(pageUrlPath, '/');
        return pageUrlParts.length > urlPathParts.length && _.isEqual(pageUrlParts.slice(0, urlPathParts.length), urlPathParts);
    });
}
