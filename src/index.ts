import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import CrawlerResolver from "./resolvers/crawler";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CrawlerResolver],
    validate: false,
  });

  const server = new ApolloServer({ schema });
  const { url } = await server.listen(4000);

  console.log(`Server started on ${url}graphql`);
}

bootstrap();
