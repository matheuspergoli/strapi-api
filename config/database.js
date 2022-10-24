module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'heffalump.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'vfvdnrgu'),
      user: env('DATABASE_USERNAME', 'vfvdnrgu'),
      password: env('DATABASE_PASSWORD', 'PUS3mdIMhirSjfgrGx_xpg2fDlCGpXHz'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
