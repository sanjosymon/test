import * as Knex from 'knex';

const knexConfig: Knex.Config = {
  client: 'your_database_client', // e.g., 'pg' for PostgreSQL, 'mysql2' for MySQL
  connection: {
    // your database connection configuration
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};

const knex = Knex(knexConfig);

// Users/Customer Table
knex.schema.createTable('Users', (table) => {
  table.increments('user_id').primary();
  table.string('username');
  table.string('email').unique();
  table.string('password_hash');
  table.string('full_name');
  table.string('address');
  table.string('phone_number');
  // Add other relevant columns as needed
}).then(() => {
  console.log('Users table created');
}).catch((error) => {
  console.error('Error creating Users table:', error);
}).finally(() => {
  knex.destroy();
});

// Categories Table
knex.schema.createTable('Categories', (table) => {
  table.increments('category_id').primary();
  table.string('name');
  // Add other relevant columns as needed
}).then(() => {
  console.log('Categories table created');
}).catch((error) => {
  console.error('Error
