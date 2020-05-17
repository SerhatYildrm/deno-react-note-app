
import {Application, send, Router} from "oak";
import config  from './config.js'

const app = new Application();

app.use( async(context) => {
    await send(context, context.request.url.pathname,{
        root: `${Deno.cwd()}/react/`,
        index: "app.html"
    })
})

await app.listen({port : config.PORT})

