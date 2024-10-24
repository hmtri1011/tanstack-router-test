import { test, expect } from '@playwright/test'

test.describe('Movie App Integration Tests', () => {
  test('Should display movie list', async ({ page }) => {
    await page.goto('http://localhost:5173')

    // Wait for the movie list to load
    await page.waitForSelector('[data-testid="movie-list"]')

    // Check if the movie list is visible
    const movieList = await page.locator('[data-testid="movie-list"]')
    await expect(movieList).toBeVisible()

    // Check if there are default 10 movie items
    const movieItems = await page.locator('[data-testid="movie-item"]').all()
    expect(movieItems.length).toBe(10)

    // Check if the search input is present
    const searchInput = await page.locator('[data-testid="search-input"]')
    await expect(searchInput).toBeVisible()
  })

  test('movie details route should display correct information', async ({ page }) => {
    // Navigate to the index page first
    await page.goto('http://localhost:5173')

    // Wait for the movie list to load
    await page.waitForSelector('[data-testid="movie-list"]')

    // Click on the first movie item
    const firstMovie = await page.locator('[data-testid="movie-item"]').first()
    const movieTitle = await firstMovie.locator('[data-testid="movie-title"]').textContent()
    await firstMovie.click()

    // Wait for navigation to complete
    await page.waitForURL(/\/movies\/\d+/)

    // Check if we're on a movie details page
    expect(page.url()).toMatch(/\/movies\/\d+/)

    // Check if the movie title is displayed correctly
    const detailsTitle = await page.locator('h1').textContent()
    expect(detailsTitle).toBe(movieTitle)

    // Check if the back button is present
    const backButton = await page.locator('[data-testid="back-button"]')
    await expect(backButton).toBeVisible()

    // Click the back button and ensure we return to the index page
    await backButton.click()
    await page.waitForURL('http://localhost:5173')
    expect(page.url()).toBe('http://localhost:5173/')
  })
})
