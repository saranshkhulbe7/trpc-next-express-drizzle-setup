import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema',
  out: './.drizzle/migrations',
  driver: 'mysql2',
  dbCredentials: {
    uri: 'mysql://admin-0ecf:admin123@mysql.gb.stackcp.com:59665/upshot-3136356e74',
  },
} satisfies Config;
