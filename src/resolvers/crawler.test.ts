import "reflect-metadata";
import graphql from "../utils/testUtils";

let mockConsole: any;

beforeEach(() => {
  mockConsole = jest.spyOn(console, "error").mockImplementation(() => { });
});

afterEach(() => {
  mockConsole.mockRestore();
});

describe("GIVEN a web crawler", () => {
  describe("WHEN I make a request to the crawler with http://www.google.com", () => {
    test("THEN I should crawl the website and return true", async () => {
      const response = await graphql({
        source: `
        mutation CrawlUrl {
          crawlUrl(url: "http://google.com")
        }
        `,
      });

      const crawlUrl = response.data?.crawlUrl;

      expect(crawlUrl).toBe(true);
      expect(response.errors).toBeUndefined();
    });
  });

  describe("WHEN I make a request to the crawler with http://www.gooddfsfdfgle.ca", () => {
    test("THEN I should NOT crawl the website and return false", async () => {
      const response = await graphql({
        source: `
        mutation CrawlUrl {
          crawlUrl(url: "http://www.gooddfsfdfgle.ca")
        }
        `,
      });

      const crawlUrl = response.data?.crawlUrl;

      expect(crawlUrl).toBe(false);
    });
  });

  describe("WHEN I make a request to crawlUrl with http://www.google.com", () => {
    test("THEN I should return the crawled URLs", async () => {
      const response = await graphql({
        source: `
          query Crawler {
            crawler(url: "http://google.com") {
              url
              crawledUrls {
                linkText
                url
              }
            }
          }
        `,
      });

      const crawler = response.data?.crawler;

      expect(crawler.url).toBe("http://google.com");
      expect(crawler.crawledUrls.length).toBeGreaterThan(0);
      expect(response.errors).toBeUndefined();
    });
  });

  describe("WHEN I make a request to the crawler with http://www.google.c", () => {
    test("THEN I should NOT crawl the website and return false", async () => {
      const response = await graphql({
        source: `
          mutation CrawlUrl {
            crawlUrl(url: "http://google.c')
          }
        `,
      });

      expect(response.errors).toBeDefined();
    });
  });

  describe("WHEN I make a request to crawlUrl with http://www.google.c", () => {
    test("THEN I should return 0 crawled URLs", async () => {
      const response = await graphql({
        source: `
          query Crawler {
            crawler(url: "http://google.c") {
              url
              crawledUrls {
                linkText
                url
              }
            }
          }
        `,
      });

      const crawler = response.data?.crawler;

      expect(crawler.url).toBe("http://google.c");
      expect(crawler.crawledUrls.length).toBe(0);
    });
  });
});
