This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Thumbnails are 270 pixels wide for editorials, 400 pixels wide for still lifes (why?), full size are whatever the image requires but we're trying to keep the size under 1MB each.


## To Do
Remove lazy image load (component is not unmounting properly and is throwing an error).

Should add some image processing to further optimize the images.

Update dependencies (should fix that dependabot error) 

During build process we need to create spacers for each of the images so the lazy loader can do its thing. That means taking image properties then calculating height for each of the spacers.On page load, these spacers then get replaced with the actual images (which should be seemless if the math is correct). Use an on scroll listener to programatically load in images when the user scrolls down the page.