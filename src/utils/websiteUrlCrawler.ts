import cheerio from "cheerio";

import isValidUrl from "./isValidUrl";
import { CrawledUrl } from "../interfaces/crawledUrl.interface";

const websiteUrlCrawler = (data: string): CrawledUrl[] => {
  const $ = cheerio.load(data);
  const crawledUrls: CrawledUrl[] = [];

  $("a").each(function (this: CheerioElement) {
    const linkText = $(this).first().text();
    const url = isValidUrl($(this).prop("href"));

    if (linkText && url) {
      crawledUrls.push({
        linkText,
        url,
      });
    }
  });

  return crawledUrls;
};

export default websiteUrlCrawler;
