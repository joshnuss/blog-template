import _ from 'lodash'
import all from '../posts/*.md'

export const posts = _.chain(all)
  .map(transform)
  .orderBy('date', 'desc')
  .value()

export function findPost(permalink) {
  return _.find(posts, {permalink})
}

function transform({filename, metadata, html}) {
  const permalink = filename.replace(/.md$/, '')
  const date = new Date(metadata.date)

  return {...metadata, filename, permalink, html, date}
}
