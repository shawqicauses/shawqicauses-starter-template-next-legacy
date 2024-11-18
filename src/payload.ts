// DONE REVIEWING: GITHUB COMMIT - 01
import dotenv from "dotenv"
import path from "path"
import type {Payload} from "payload"
import payload from "payload"
import type {InitOptions} from "payload/config"

declare global {
  /* eslint-disable-next-line */
  var payload: {
    client: Payload | null
    promise: Promise<Payload> | null
  }
}

// TODO: Enhance through adding database seeding.

dotenv.config({path: path.resolve(__dirname, "../.env")})

let cached = global.payload

if (!cached) {
  global.payload = {client: null, promise: null}
  cached = global.payload
}

interface Args {
  seed?: boolean
  initOptions?: Partial<InitOptions>
}

export const initPayload = async function initPayload({
  seed,
  initOptions
}: Args = {}): Promise<Payload> {
  const secret = process.env.PAYLOAD_SECRET
  if (!secret) throw new Error("PAYLOAD_SECRET environment variable is missing.")

  if (cached.client) return cached.client

  if (!cached.promise) {
    cached.promise = payload.init({
      secret,
      local: !initOptions?.express,
      ...(initOptions || {})
    })
  }

  try {
    process.env.PAYLOAD_DROP_DATABASE = seed ? "true" : "false"
    cached.client = await cached.promise
  } catch (error: unknown) {
    cached.promise = null
    throw error
  }

  return cached.client
}

export default initPayload
