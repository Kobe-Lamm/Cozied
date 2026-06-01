import app from './app'
import { config } from './config/env'

app.listen(config.port , ()=>{
    console.log('Server is starting at ', config.port)
})