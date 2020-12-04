# Getting started with SpaceX Launch Programs Application

## Intro

SpaceX Launch Programs is a web application allows you to see all the information related to rockets launched by SpaceX. You can use filters in the application to find specific rocket launches by year, successful launch and successful landing.

This is an ISOMORPHIC React application which is initially rendered on server-side and all the later user-interactions are handled client-side.

## How to RUN this application

Follow below mentioned steps to RUN this application on local environment

1. Clone this repository to you local disk space.
2. Navigate inside the repository and run `npm install`
3. Once the npm dependencies are resolved, go ahead and run `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to BUILD this application

Follow below mentioned steps to BUILD this application as production ready

1. Run `npm run build`
2. Builds the app for production to the `build` folder.
3. It correctly bundles App in production mode and optimizes the build for the best performance.
4. Your app is ready to be deployed!
5. You can also run this application as production ready app by saying `npm run start:prod`

## Code quality checks

1. Source code is enabled with eslint along with `.eslintrc` configuration file to check for errors.
2. Loaded with husky hooks library to check for linting errors before every commit / push to repository.
3. Prettier extension with configuration file to auto indent code.

## Supports containerized deployment for clean production

Repository also contains docker scripts to generate a container
Run `npm run docker` script and rest is taken care by the script.

## Fully responsive UI with Mobile first approach

This application was built as a mobile first approach - responsive design using media queries.
Design Breakpoints :

1. 700px and less for mobile phones with single column approach
2. 700px to 1024px for tablets and landscape mobile with 2 column card approach
3. 1024px to 1440px for desktop with 4 column card approach
4. 1440px and above for extra large screens with 4 columns centerized card approach.

## Let's talk about performance benchmarks and more!

Application is build with best practices to keep the lighthouse scores at par.

1. Performance: 96/100
2. Accessibility: 97/100
3. SEO: 100/100

![Image of Lighthouse Performance](https://github.com/divakarrana/spacex-launch-programs/blob/master/public/images/SpaceXLighthouse.PNG)

## Currently deployed on

## Future prospect

- [ ] Add unit testing
- [ ] Upgrade UI to look more subtle
