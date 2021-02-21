createTables = () => {
	const db = require('sqlite-sync');

  db.connect('../database.db');
	
	console.log(db.run(`
		CREATE TABLE IF NOT EXISTS users(
			pk_id integer primary key autoincrement,
			email text NOT NULL UNIQUE,
			name text NOT NULL,
			password text NOT NULL
		);
	`));

	console.log(db.run(`
		CREATE TABLE IF NOT EXISTS categorys(
			pk_id primary key autoincrement,
			userId integer NOT NULL,
			categoryName text NOT NULL		
		);
  `));		

	console.log(db.run(`
		CREATE TABLE IF NOT EXISTS tasks(
			pk_id integer primary key autoincrement,
			title text NOT NULL, 
			userId integer NOT NULL,
			categoryId integer,
			task text,
			status text	
		);
	`));

	return db;
}

module.exports = createTables;