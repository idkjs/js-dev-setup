/* eslint-disable no-undef */

/* check if query param is userMockAPI, if so use 3001, if not use '/' as base url */
export default function getBaseUrl() {
  return getQueryStringParameterByName('userMockApi') ? 'http://localhost:3001/' : 'https://idkjs-dev-env.herokuapp.com/';
}

/* pure js method for getting query string parameter to avoid using dep.
 * Lets use switch between mockApi and real api by adding useMockAPi to query string */
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, "\\$&")
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}
