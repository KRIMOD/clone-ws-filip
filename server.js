import { createServer, Model, Factory } from 'miragejs'
import faker, { lorem } from 'faker'

faker.seed(123)

const articleType = ['project', 'thought', 'stuff']
const server = createServer({
  // timing: 1000,
  models: {
    article: Model
  },

  factories: {
    article: Factory.extend({
      title () {
        return lorem.word()
      },
      description () {
        return lorem.sentence()
      },
      content () {
        return lorem.text()
      },
      type () {
        return articleType[Math.floor(Math.random() * 3)]
      }
    })
  },

  routes () {
    this.namespace = 'api'
    this.get('articles')

    this.passthrough()
  },

  seeds (server) {
    server.createList('article', 15)
  }
})
