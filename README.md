# DeepCrawl take-home task for Senior Software Engineer (API)

Technical exercise submission for Deep Crawl.

In order to run the application, run the following from your terminal:

```
npm install
npm build
npm test
npm start
```

This will install the dependencies, build, test, and start the application.

To run the GraphQL Playground, visit http://localhost:4000/graphql in your browser. 

You will now be able to run a new website crawl by using the example mutation & query below.

Note: execute the mutation first, followed by the query.

## Example crawl

Start the website crawl:
```
mutation CrawlUrl {
  crawlUrl(url: "https://www.deepcrawl.com")
}
```

View the results of the crawl:
```
query Crawler {
  crawler(url: "https://www.deepcrawl.com") {
    url
    crawledUrls {
      linkText
      url
    }
  }
}
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode, with watch.

### `npm build`

Builds the app for production to the `build` folder.

### `npm start`

Runs the app.

### `npm test`

Launches the test runner.

