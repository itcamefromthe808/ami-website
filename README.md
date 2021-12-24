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
before deploying with new images, run `npm run images` locally to create responsive versions and update meta data