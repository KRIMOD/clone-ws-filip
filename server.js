import { createServer, Model, Factory } from 'miragejs'
import faker, { lorem } from 'faker'

faker.seed(123)

const articleType = ['project', 'thought', 'stuff']
// const createMirageServer = () => {
const server = createServer({
  timing: 1000,
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
    this.passthrough((request) => {
      if (request.url === '/_next/static/development/_devPagesManifest.json') {
        return true
      }
    })
    this.namespace = 'api'
    this.get('articles')
    this.get('articles/:title', (schema, request) => {
      return schema.articles.findBy({ title: request.params.title })
    })
    this.passthrough()
  },

  seeds (server) {
    server.createList('article', 15)
  }
})
// }

// export default createMirageServer
