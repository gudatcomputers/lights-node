var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  const upnp = require('node-upnp-utils')
  upnp.startDiscovery()
  
  setTimeout(() => {
    upnp.stopDiscovery(() => {
      var device_list = upnp.getActiveDeviceList();
  //     console.log(device_list.length + ' devices (services) were found.');
      for (let index = 0; index < device_list.length; index++) {
        const device = device_list[index]
        const modelName = device['description']['device']['modelName']
        if (modelName.toLowerCase().startsWith('philips hue bridge')) {
          const address = device['address'];
          res.status(200).json({ address })
          return
        }
      }
      
      res.sendStatus(404)
    });
  }, process.env.DISCOVERY_TIMEOUT);
  
})

module.exports = router
