import { graphql, GraphQLSchema } from "graphql";
import Maybe from "graphql/tsutils/Maybe";

import { createSchema } from "./createSchema";

type Options = {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
};

let schema: GraphQLSchema;

const graphQL = async ({ source, variableValues }: Options) => {
  if (!schema) {
    schema = await createSchema();
  }
  return graphql({
    schema,
    source,
    variableValues,
  });
};

export default graphQL;
