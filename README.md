# FE live coding exercise (Vue.js)

In this exercise you will be extending an existing Vue.js application by completing three tasks.

The goal of this exercise is NOT to complete all the tasks in the shortest possible time, but to have a conversation about frontend, Vue.js, JavaScript, CSS, HTML, good coding practices and your experience.

Everything (well, almost) is allowed - googling, using StackOverflow, external libraries, asking your interviewer for help or even pair programming with them.

The only thing we require is that while you go through the exercise you also narrate your thoughts - what do you think the problem is, how are you planning to approach things, etc. 

## Running the app

`yarn install && yarn serve`

The app will be available on the `http://localhost:3000`.
Once you open that URL, you will see a list of real estate properties (a.k.a. listings).

## Task 1: Navigating to property details

Make it possible to navigate from the homepage to the page displaying the individual listing details.

NOTE: Component `ListingDetails.js` already exists in `components` folder.

## Task 2: Displaying details of a single listing

Now that we can navigate to the listing details page, let's display the data of the individual listing:
- a picture
- a title
- listing description

Full data for the single listing can be obtained from this endpoint: `{BASE_URL}/prod/listings/{listingId}`

Add some minimal styling (design and layout is up to you).

## Task 3: Displaying similar listings

Some listings from our list have related listings. Let's display them on the listing detail page too. 

IDs of the similar listings can be obtained from this endpoint: `{BASE_URL}/prod/listings/{listingId}/similar`

For each of the similar listings display a picture and a title.

Add some minimal styling (design and layout is up to you).
