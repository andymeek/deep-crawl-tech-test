import { ObjectType, Field } from "type-graphql";

@ObjectType()
class CrawledUrl {
  @Field()
  linkText: string;

  @Field()
  url: string;
}

export default CrawledUrl;
