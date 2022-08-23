//gets our enviroment variable from .env file and it will
//allow us to pass a json schema and we are going to get a typesafe
//our application wont start if it is missing a env variable
//it ensure typesafe
import { envSchema } from "env-schema";
import { Type, Static } from "@sinclair/typebox";

const schema = Type.Object({
  PORT: Type.Number({
    default: 4000,
  }),
  HOST: Type.String({
    default: "0.0.0.0",
  }),
  DATABASE_URL: Type.String(),
});
type Env = Static<typeof schema>;
export const config = envSchema<Env>({
  schema,
  dotenv: true, //getting our property from env file
});
