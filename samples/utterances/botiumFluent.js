const fs = require('fs')

const BotDriver = require('../../index').BotDriver
const Capabilities = require('../../index').Capabilities
const Source = require('../../index').Source

const driver = new BotDriver()
  .setCapability(Capabilities.PROJECTNAME, 'Botium Utterances Sample')
  .setCapability(Capabilities.CONTAINERMODE, 'dialogflow')
  .setCapability(Capabilities.DIALOGFLOW_PROJECT_ID, 'jokes-58a2c')
  .setCapability(Capabilities.DIALOGFLOW_CLIENT_EMAIL, 'a-879-798@jokes-58a2c.iam.gserviceaccount.com')
  .setCapability(Capabilities.DIALOGFLOW_PRIVATE_KEY, '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIAKHHwkbDN1Um\n+GZBadwHN221l+VCowrMUwGS0UlXQ2hO/QpZYW7cPqjILhcPfLhEg59M1YrJaBGq\nVGj9RnztqJdByb7hgwRMItO+nGe1mLh7MqJp5VpZD1Kv4fMeCcB5f/68t0ssiwa2\npRCx7U4qj3pPunx6c719a/p9u1zjmNdSuPWgMmttMpSMihAskXAWle80NScCfpV2\nnfkRFcK585514wF3tlRBZd67WXq/uxrYeQIM0Lgj+EH/xLjK7FkIy+MknF0tN9AF\nLW0n6UncpXpdfKiToazEuNZiyUQXWonG+auQBRTeBXMBVgeNDZsNGCtIqg1RKHAT\n5zz4061fAgMBAAECggEABHWV0IOhkjX6ZCp7e9pcBS6jTQKXGdkGdE9ZniGkQ4zu\nG32N2Y0yOVrakUb7ZvqynTmHAD+p+I5hGNqAfOeX3sHfDLHl9SOVh9hiAz43kzd3\nvL2aHHIi/MwYKmDlS8VTjxMF0G+Q3EonzCGYYohHXA5wkr2DJVYSCRgIEw66sujF\nxRMmhlk7kDcARc+xLzkJKsdr9BbzxN5jy1kKzmjkfaB6X4qp0kCpE87F342wimhs\nALBg7fKmZB6mYjTNu5JwskY4+qlri2NjLcAFYrH7hQgqCFPPGeFRCKEWwReWRsaL\nRo5/KYrxeu0ZNCdQ901ILCYabEBm13RK7AicqmKCDQKBgQDp2t1Pl4cYYNj2SOpf\nFZfjTFlJM3y+ZlXEjivKVnJr6ZMlQJTh3QniOElv0ZamJZP+1oZJ3JaQ10+SC+8D\n4ROaYXH+5XmP/anXgp4+ZcL6C2tP4sWeaCh4ISiif5uYXRamPnIZn8YbIL57c5LC\n0MRWFK4Caou69R1CDCqtSHiT5QKBgQDa8RzEt2dqvOZXqhnofU1mWYfKHT8xZw2z\n0bGL9tvB6ytoNH+rSi/HFJ/MIqQ7GmDaBYl7lv52ueuoYUxsXqRSBlaYKxIKRk0I\nLXAtvUpqsInrsmzndDqHwTy+MHMPJTTFsRYKbihELdNtRnv7+Vs/tYqX1QKGf9F2\nldev91Nv8wKBgGhrOKyEXWcuP1JhJn2Ed8ifW7LK0aV2rk9QqA714Kt8pR5aIuBj\nQTmIponOTPUtDFMa2OV8IKLV8QqmV3gk9QrW/f6x2kDIJCE9iokUCSZ7GNSXzmO3\n4HIbZDiCwCgdULK0aWA1rlCIo2UeKubgLvq8yyH7Dx9QuVq3cgrjtCtdAoGBANmz\n0pVQgQbDmo8k1uo0XhgdgkZY2pM3E4rwQYkZB99FBj5xpVkfRW7BdTu4XnFeg1uH\nEfPQamqH6GnfhexkFyRwpP5eJWwOB17QP7FbfXmk3R9+pYdoLSL75HiBGIfAyT6i\nHXZ1nphcsNUBtxsQEcnBrHPZHM+8nP07deLFHTQ9AoGBAJt0jbxUAmerG6D2Mmhf\nEImMpnbLcYveT8Iga56PLwgrIBn5ZuL7NtKppabzycwjiGYZsaVmonHPBZmvpS8b\nGmoaL9aGeL5ZGVipD7WTwI/0MOkd1+4JaWbIQ0EtLwhQCZ6xk1JdCa5l2Yf4UiMU\nh/gShJhaHk77EqMwQnjiRsXH\n-----END PRIVATE KEY-----\n')
  .setCapability(Capabilities.DIALOGFLOW_USE_INTENT, false)

if (!fs.existsSync('botium-utterances-master')) {
  console.log('Please download botium-utterances package from https://github.com/codeforequity-at/botium-utterances and unpack it here.')
  process.exit(1)
}

driver.BuildFluent()
  .ReadScripts('botium-utterances-master/shared')
  .ReadScripts('botium-utterances-master/convos/joke')
  .Start()
  .RunScripts()
  .Exec()
  .then(() => {
    console.log('READY')
  })
  .catch((err) => {
    console.log('ERROR: ', err)
  })
