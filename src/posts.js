import _ from 'lodash'
import all from '../posts/*.md'

export const posts = _.chain(all)
  .map(transform)
  .orderBy('date', 'desc')
  .value()

export function findPost(permalink) {
  return _.find(posts, {permalink})
}

export function findByTag(tag) {
  return posts.filter(post => post.tags.includes(tag))
}

function transform({filename, metadata, html}) {
  const permalink = metadata.permalink || filename.replace(/.md$/, '')
  const date = new Date(metadata.date)
  let tags = []

  if (metadata.tags) {
    tags = metadata.tags.split(',').map(str => str.trim())
  }

  return {...metadata, filename, permalink, html, date, tags}
}
