"use client"

// DONE REVIEWING: GITHUB COMMIT - 01

import trpc from "../../client/trpc"

const TRPCBasic = function TRPCBasic() {
  const {isLoading, isError, data, error} = trpc.userRouter.userList.useQuery()
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <ul>
          {data?.map((user) => (
            <li key={user.id}>
              {user.id} - {user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TRPCBasic
