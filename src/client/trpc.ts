// DONE REVIEWING: GITHUB COMMIT - 01
import {createTRPCReact} from "@trpc/react-query"
import {AppRouter} from "../server/api"

const trpc = createTRPCReact<AppRouter>({})
export default trpc
