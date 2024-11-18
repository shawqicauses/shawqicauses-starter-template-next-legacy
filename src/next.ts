// DONE REVIEWING: GITHUB COMMIT
import dotenv from "dotenv"
import next from "next"
import path from "path"

dotenv.config({path: path.resolve(__dirname, "../.env")})

export const dev = process.env.NODE_ENV !== "production"
export const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

export const nextApplication = next({dev, port})
export const nextRequestHandler = nextApplication.getRequestHandler()
