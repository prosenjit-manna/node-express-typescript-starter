import { cleanEnv, num, str } from 'envalid';

export const appEnv = cleanEnv(process.env, {
  APPLICATION_PORT: num({ default: 4000 }),
  APPLICATION_URL: str({ default: 'localhost' }),
  DATABASE_URL: str({ desc: 'DB URL' }),
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'], default: 'development' }),
});
