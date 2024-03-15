import { test, expect } from '@playwright/test'

import { getApps } from "../api/productsApi"
import {Product, ProductsResponse} from "../interfaces/product"
import { expectedHighestPrice, expectedLowestPrice } from '../data/expected-prices'

let data: ProductsResponse

test.beforeEach(async ({ page }) => {
    data = await getApps()
})

test.describe('Product Pricing Test.', () => {
    test('Verify highest and lowest priced products', {
        tag: ['@e2e'], annotation: [
            {type: 'test case', description: 'id-002' },
        ],
    }, async ({ page }) => {
        // Check response format
        expect(data).toHaveProperty("products")
        expect(data.products).toBeInstanceOf(Array)

        // Find products with highest and lowest prices
        const highestPriceProduct = data.products.reduce((acc, product: Product) => // Use Product type
            product.price > acc.price ? product : acc, expectedHighestPrice
        )

        const lowestPriceProduct = data.products.reduce((acc, product: Product) => // Use Product type
            product.price < acc.price ? product : acc, expectedLowestPrice
        )

        // Validate highest and lowest price products
        expect(highestPriceProduct.title).toBe(expectedHighestPrice.title)
        expect(highestPriceProduct.price).toBe(expectedHighestPrice.price)
        expect(lowestPriceProduct.title).toBe(expectedLowestPrice.title)
        expect(lowestPriceProduct.price).toBe(expectedLowestPrice.price)

        expect(highestPriceProduct).toMatchObject(expectedHighestPrice)
        expect(lowestPriceProduct).toMatchObject(expectedLowestPrice)

        // Log product titles and prices for reference
        console.log(`Highest Price Product: ${highestPriceProduct.title} (${highestPriceProduct.price})`)
        console.log(`Lowest Price Product: ${lowestPriceProduct.title} (${lowestPriceProduct.price})`)
    })
})
