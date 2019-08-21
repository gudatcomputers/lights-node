module.exports =  [
  { address: '192.168.1.1',
    headers:
    { '$': 'HTTP/1.1 200 OK',
      'CACHE-CONTROL': 'max-age=600',
      DATE: 'Tue, 14 Feb 2017 04:42:37 GMT',
      EXT: ' ',
      LOCATION: 'http://192.168.1.1:1990/WFADevice.xml',
      SERVER: 'POSIX UPnP/1.0 UPnP Stack/7.14.124.5204',
      ST: 'upnp:rootdevice',
      USN: 'uuid:402dc477-325c-94d1-b383-21ac79148fc5::upnp:rootdevice' },
    expire: 1566409069655,
    description:
    { '$': { xmlns: 'urn:schemas-upnp-org:device-1-0' },
      specVersion: { major: '1', minor: '0' },
      device:
        { deviceType: 'urn:schemas-wifialliance-org:device:WFADevice:1',
          friendlyName: 'ASUS WPS Router',
          manufacturer: 'ASUSTeK Corporation',
          manufacturerURL: 'http://www.asus.com',
          modelDescription: 'ASUS WPS Router',
          modelName: 'WPS Router',
          modelNumber: 'X1',
          serialNumber: '0000001',
          UDN: 'uuid:402dc477-325c-94d1-b383-21ac79148fc5',
          serviceList: [Object] } },
  },
  { 
    address: 'my-bridge-address',
    headers:
    { '$': 'HTTP/1.1 200 OK',
      HOST: '239.255.255.250:1900',
      'CACHE-CONTROL': 'max-age=100',
      LOCATION: 'http://192.168.1.100:80/description.xml',
      SERVER: 'Linux/3.14.0 UPnP/1.0 IpBridge/1.33.0',
      'HUE-BRIDGEID': '001788FFFE4192D1',
      ST: 'upnp:rootdevice',
      USN: 'uuid:2f402f80-da50-11e1-9b23-0017884192d1::upnp:rootdevice' },
    expire: 1566408570303,
    description:
    { '$': { xmlns: 'urn:schemas-upnp-org:device-1-0' },
      specVersion: { major: '1', minor: '0' },
      URLBase: 'http://192.168.1.100:80/',
      device:
        { deviceType: 'urn:schemas-upnp-org:device:Basic:1',
          friendlyName: 'Philips hue (192.168.1.100)',
          manufacturer: 'Royal Philips Electronics',
          manufacturerURL: 'http://www.philips.com',
          modelDescription: 'Philips hue Personal Wireless Lighting',
          modelName: 'Philips hue bridge 2015',
          modelNumber: 'BSB002',
          modelURL: 'http://www.meethue.com',
          serialNumber: '0017884192d1',
          UDN: 'uuid:2f402f80-da50-11e1-9b23-0017884192d1',
          presentationURL: 'index.html',
          iconList: [Object] } },
  }
]
 