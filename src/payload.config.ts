// DONE REVIEWING: GITHUB COMMIT - 01
import {webpackBundler} from "@payloadcms/bundler-webpack"
import {mongooseAdapter} from "@payloadcms/db-mongodb"
import {slateEditor} from "@payloadcms/richtext-slate"
import dotenv from "dotenv"
import path from "path"
import {buildConfig} from "payload/config"

dotenv.config({path: path.resolve(__dirname, "../.env")})

export default buildConfig({
  serverURL: process.env.APPLICATION_URL as string,
  db: mongooseAdapter({url: process.env.DATABASE_URI as string}),
  typescript: {outputFile: path.resolve(__dirname, "payload-types.ts")},
  admin: {bundler: webpackBundler()},
  editor: slateEditor({}),
  collections: []
})
