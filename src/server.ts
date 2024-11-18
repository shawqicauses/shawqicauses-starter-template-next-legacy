// DONE REVIEWING: GITHUB COMMIT
import dotenv from "dotenv"
import express from "express"
import nextBuild from "next/dist/build"
import path from "path"
import {nextApplication, nextRequestHandler, port} from "./next"
import {initPayload} from "./payload"

dotenv.config({path: path.resolve(__dirname, "../.env")})

const app = express()

const start = async function start(): Promise<void> {
  const payload = await initPayload({
    seed: process.env.PAYLOAD_SEED === "true",
    initOptions: {
      express: app,
      async onInit(cms) {
        cms.logger.info(`Payload Admin URL: ${cms.getAdminURL()}`)
      }
    }
  })

  if (process.env.NEXT_BUILD) {
    app.listen(port, async () => {
      payload.logger.info(`Next.JS application is now building...`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, "../"))
      payload.logger.info(`Next.JS application has been built successfully.`)
      process.exit()
    })

    return
  }

  app.use((request, response) => nextRequestHandler(request, response))

  nextApplication.prepare().then(() => {
    payload.logger.info(`Next.JS application has been started successfully.`)

    app.listen(port, () => {
      payload.logger.info(`Next.JS application is ready to serve requests.`)
      payload.logger.info(`Next.JS Application URL: ${process.env.APPLICATION_URL}`)
    })
  })
}

start()
