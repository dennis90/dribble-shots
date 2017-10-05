import {Factory} from 'rosie'

export const ShotFactory = new Factory()
  .sequence('id')
  .sequence('title', index => `Shot #${index}`)
  .sequence('description', index => `Shot Description #${index}`)
  .attrs({
    images: {
      hidpi: 'https://dribbble/images/hidpi',
      normal: 'https://dribbble/images/normal',
    },
    views_count: 100,
    likes_count: 100,
  })
  .attr('user', ['user'], user => UserFactory.build(user))

export const UserFactory = new Factory()
  .sequence('name', index => `User #${index}`)
  .attrs({
    avatar_url: 'https://dribbble.com/user/avatar.png',
    html_url: 'https://dribbble.com/user/',
  })
