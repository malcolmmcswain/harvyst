const express = require('express')
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const app = express()
const port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600,
  autoOpen: false
})
const localport = 3000
const parser = new Readline({ delimiter: "\n" })

app.get('/', (req, res) => {
  res.send({'status': 'ok'})
})

app.get('/fan_off', (req, res) => {
  port.open(function (err) {
    if (err) { return console.log('Error opening port: ', err.message) }
    port.write('0', function(err) {
      if (err) {
        res.send({'action': 'fan_off', 'dispatch': 'failed'})
        return console.log('Error on dispatch: ', err.message)
        port.close()
      }
    console.log('FAN_OFF dispatched to serial.')
    res.send({'action': 'fan_off', 'dispatch': 'ok'})
    })
  })

  port.on('error', function(err) {
    console.log('Error: ', err.message)
  })
})

app.get('/fan_on', (req, res) => {
  port.open(function (err) {
    if (err) { return console.log('Error opening port: ', err.message) }
      port.write('1', function(err) {
        if (err) {
          res.send({'action': 'fan_on', 'dispatch': 'failed'})
          return console.log('Error on dispatch: ', err.message)
        }
      console.log('FAN_ON dispatched to serial')
      port.close()
      res.send({'action': 'fan_on', 'dispatch': 'ok'})
      })
  })

  port.on('error', function(err) {
    console.log('Error: ', err.message)
  })
})

app.get('/water_plant1', (req, res) => {
  port.open(function (err) {
    if (err) { return console.log('Error opening port: ', err.message) }
    port.write('2', function(err) {
      if (err) {
        res.send({'action': 'water_plant1', 'dispatch': 'failed'})
        return console.log('Error on dispatch: ', err.message)
        port.close()
      }
    console.log('WATER_PLANT1 dispatched to serial')
    res.send({'action': 'water_plant1', 'dispatch': 'ok'})
    })
  })
  port.on('error', function(err) {
    console.log('Error: ', err.message)
  })
})

app.get('/water_plant2', (req, res) => {
  port.open(function (err) {
    if (err) { return console.log('Error opening port: ', err.message) }
    port.write('3', function(err) {
      if (err) {
        res.send({'action': 'water_plant1', 'dispatch': 'failed'})
        return console.log('Error on dispatch: ', err.message)
        port.close()
      }
    console.log('WATER_PLANT1 dispatched to serial')
    res.send({'action': 'water_plant1', 'dispatch': 'ok'})
    })
  })
  port.on('error', function(err) {
    console.log('Error: ', err.message)
  })
})

app.get('/water_plant3', (req, res) => {
  port.open(function (err) {
    if (err) { return console.log('Error opening port: ', err.message) }
    port.write('4', function(err) {
      if (err) {
        res.send({'action': 'water_plant1', 'dispatch': 'failed'})
        return console.log('Error on dispatch: ', err.message)
        port.close()
      }
    console.log('WATER_PLANT1 dispatched to serial')
    res.send({'action': 'water_plant1', 'dispatch': 'ok'})
    })
  })
  port.on('error', function(err) {
    console.log('Error: ', err.message)
  })
})

app.get('/water_plant4', (req, res) => {
  port.open(function (err) {
    if (err) { return console.log('Error opening port: ', err.message) }
    port.write('5', function(err) {
      if (err) {
        res.send({'action': 'water_plant1', 'dispatch': 'failed'})
        return console.log('Error on dispatch: ', err.message)
        port.close()
      }
    console.log('WATER_PLANT1 dispatched to serial')
    res.send({'action': 'water_plant1', 'dispatch': 'ok'})
    })
  })
  port.on('error', function(err) {
    console.log('Error: ', err.message)
  })
})

app.get('/get_plant1', (req, res) => {
  port.open(function (err) {
    if (err) { return console.log('Error opening port: ', err.message) }
    port.write('6', function(err) {
      if (err) {
        res.send({'action': 'water_plant1', 'dispatch': 'failed'})
        return console.log('Error on dispatch: ', err.message)
        port.close()
      }
    console.log('WATER_PLANT1 dispatched to serial')
    res.send({'action': 'water_plant1', 'dispatch': 'ok'})
    })
  })

  parser.on('data', function(data) {
    console.log(data)
  })
})

app.get('/get_plant2', (req, res) => {
  port.open(function (err) {
    if (err) { return console.log('Error opening port: ', err.message) }
    port.write('7', function(err) {
      if (err) {
        res.send({'action': 'water_plant1', 'dispatch': 'failed'})
        return console.log('Error on dispatch: ', err.message)
        port.close()
      }
    console.log('WATER_PLANT1 dispatched to serial')
    res.send({'action': 'water_plant1', 'dispatch': 'ok'})
    })
  })

  parser.on('data', function(data) {
    console.log(data)
  })
})

app.get('/get_plant3', (req, res) => {
  port.open(function (err) {
    if (err) { return console.log('Error opening port: ', err.message) }
    port.write('8', function(err) {
      if (err) {
        res.send({'action': 'water_plant1', 'dispatch': 'failed'})
        return console.log('Error on dispatch: ', err.message)
        port.close()
      }
    console.log('WATER_PLANT1 dispatched to serial')
    res.send({'action': 'water_plant1', 'dispatch': 'ok'})
    })
  })

  parser.on('data', function(data) {
    console.log(data)
  })
})


app.listen(localport, console.log(`Listening for requests on port ${localport}`))
