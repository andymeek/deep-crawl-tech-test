import { buildSchema } from "type-graphql";
import CrawlerResolver from "../resolvers/crawler";

export const createSchema = () =>
  buildSchema({
    resolvers: [CrawlerResolver],
  });
