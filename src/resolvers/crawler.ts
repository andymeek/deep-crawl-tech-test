import { Arg, Mutation, Resolver, Query } from "type-graphql";

import isValidUrl from "../utils/isValidUrl";
import fetchData from "../utils/fetchData";
import websiteUrlCrawler from "../utils/websiteUrlCrawler";

import Crawler from "../models/crawler.model";
import { CrawledUrl } from "../interfaces/crawledUrl.interface";

interface Results {
  [url: string]: CrawledUrl[];
}

@Resolver()
class CrawlerResolver {
  private results: Results = {};

  @Query(() => Crawler)
  crawler(@Arg("url", () => String) url: string): { url: string; crawledUrls: CrawledUrl[] } {
    const crawledUrls = this.results[url];

    return {
      url,
      crawledUrls: crawledUrls || [],
    };
  }

  @Mutation(() => Boolean)
  async crawlUrl(@Arg("url") input: string): Promise<boolean> {
    const url = isValidUrl(input);

    const fetchedDataFromUrl = await fetchData(url);

    if (!fetchedDataFromUrl) {
      return false;
    }

    const crawledData = websiteUrlCrawler(fetchedDataFromUrl);

    if (crawledData.length > 0) {
      this.results[input] = crawledData;

      return true;
    }

    return false;
  }
}

export default CrawlerResolver;
