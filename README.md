*This is app is also deployed on github pages. You may click [this link](https://ypinbong.github.io/image-randomizer/) to checkout the app.*

## Installation

1. Nodejs

Make sure to have node version 18.20 or above.
```bash
# clone and install
git clone https://github.com/ypinbong/image-randomizer.git
npm install
#or
yarn install
# cd to the image-randomizer folder and run the commands below
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. Docker

If you have already installed docker to your device follow the steps below. If you need any help in installation please follow the guide [here](https://nextjs.org/docs/pages/building-your-application/deploying#docker-image).

```bash
# you may replace the name 'image-randomizer' with your preference
docker build -t image-randomizer .
# if success then
docker run -p 3000:3000 image-randomizer
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

