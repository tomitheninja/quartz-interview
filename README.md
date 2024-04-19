# Quartz interview takehome

## Tasks

### Create a simple Next.js project from scratch

`npx create-next-app@latest quartz-interview`

### Dev config

I reused a linter config from one of my previous project.

This is probably too much linting for a shelf project, but at least I am familiar with it.

I created a Dockerfile while npm install was running.

## Use the API

I opened the link, checked intro showcase and products rest api/pages.

To discover what platzi is I went to it's home page.

I searched on npm a platzi-api client, but couldn't find one.

However, I found an openapi doc for it so I generated a client using openapi-generator.

I took a longer break here, eat dinner.

## Building the skeleton

I like to use the src directory and inside that move all routable items to a (pages) folder and seperate them from the components.

First I created the main screen, a grid of all avaiable products.

I created a getData function that fetches all data from the API and displays them in JSON format.

Unfortunately the openapi documentation didn't include the response types, so I couldn't use it in this project.

From here I have choosen the rest api method to access the api and created the type definitions manually.

I displayed all products on the main page in a grid.

At this time, I didn't include any fancy styling or pagination to speed up development.

After finishing I copied this file into (/pages/product/[id]/page.tsx) and modified it so it only displays a single product.

To make the two screens different, I trimmed the description of the products on the main screen at the end of the first sentence.

After this I created a new product page. Due to the lack of time, I applied basic components from the chakra-ui docs.

To manage the state of this form I used a useState hook and overwrote it's setter function.

## The end

Because it was almost hour 3 at this point and I didn't test, deploy and document my application I had abort the form.

I added a nav-bar which I wanted to use tailwind-css for to speed things up, but it didn't work and stackoverflow couldn't help me. So I ended up writing common components via chakra.

I also added a Go back button on the product details page.

I pushed the code up to github and deployed to vercel. I didn't use pull requests, because the system doesnt have any online users and I am the only contributor.

The deploz failed because I forgot to generate the openapi client, so I fixed it.

## In the future

1. The create product form is still not functional.
2. Either I should learn chakra or rewrite the whole thing in tailwind (after I fixed tailwind)
3. Fallback image for the product component
4. Refactor product card into it's own component
5. Add chips for all categories and pagination on the main screen
6. Test for functionality and responsiveness
7. Center the product on the product detail screen
