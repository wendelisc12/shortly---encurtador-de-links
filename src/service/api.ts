import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type response = {
    data:{
        tiny_url:string
    }
}

const Api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.tinyurl.com'
    }),
    endpoints: (builder)=> ({
        shortenUrl: builder.mutation<response, string>({
            query: (url) => ({
                url: '/create',
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer Hyl8HzuefkexX0uxoFcgieBhDqW36g983SSyPtHcHbi5IKF29AE6vTieYVi9',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({url})
            }),
        })
    })
})

export const { useShortenUrlMutation } = Api
export default Api