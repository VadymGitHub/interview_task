import {request} from "@playwright/test"

export const getApps = async () => {
    const apiRequest = await request.newContext()
    const response = await apiRequest.get('https://dummyjson.com/products', {
        failOnStatusCode: true,
    })
    return response?.json()
}
