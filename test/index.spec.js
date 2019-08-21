const http = require('http')
const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect;
const td = require('testdouble')

describe('index router', () => {
  let server
  let upnp

  beforeEach(() => {
    process.env.DISCOVERY_TIMEOUT = 1
    chai.use(chaiHttp)
    upnp = td.replace('node-upnp-utils')
    const app = require('../app');
    server = http.createServer(app);
    server.listen(7001);
  })

  afterEach(() => {
    td.reset()
    server.close()
  })

  describe('index', () => {
    let response, activeDeviceFixture

    beforeEach(() => {
      activeDeviceFixture = require('./activeDeviceResponse')

      td
        .when(upnp.stopDiscovery(td.callback))
        .thenCallback()
    })

    context('when a Phillips Hue bridge is found', () => {
      beforeEach((done) => {
        td
          .when(upnp.getActiveDeviceList())
          .thenReturn(activeDeviceFixture)

        chai.request("http://localhost:7001")
          .get('/')
          .end((err, res) => {
            response = res
            done()
          })
      })

      it('starts the discovery of devices', () => {
        td.verify(upnp.startDiscovery())
      })

      it('returns the IP of the bridge', () => {
        expect(response.body).to.eql({ 'address': 'my-bridge-address' })
      })
    })

    context('when NO Phillips Hue bridge is found', () => {
      beforeEach((done) => {
        td
          .when(upnp.getActiveDeviceList())
          .thenReturn([
            {
              description: {
                device: { modelName: 'Bogey' }
              }
            }
          ])

        chai.request("http://localhost:7001")
          .get('/')
          .end((err, res) => {
            response = res
            done()
          })
      })

      it('starts the discovery of devices', () => {
        td.verify(upnp.startDiscovery())
      })

      it('returns the IP of the bridge', () => {
        expect(response.body).to.eql({})
        expect(response.status).to.eq(404)
      })
    })
  })
})