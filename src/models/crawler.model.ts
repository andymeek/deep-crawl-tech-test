import { ObjectType, Field } from "type-graphql";
import CrawledUrl from "./crawledUrl.model";

@ObjectType()
class Crawler {
  @Field(() => String)
  url: string;

  @Field(() => [CrawledUrl])
  crawledUrls: CrawledUrl[];
}

export default Crawler;
