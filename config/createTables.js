createTables = () => {
	const db = require('sqlite-sync');

  db.connect('../database.db');
	
	console.log(db.run(`
		CREATE TABLE IF NOT EXISTS usersId(
			pk_id integer primary key autoincrement,
			email text NOT NULL UNIQUE,
			name text NOT NULL,
			password text NOT NULL
		);
	`));

	console.log(db.run(`
		CREATE TABLE IF NOT EXISTS categorys(
			pk_category primary key autoincrement,
			user integer,
			category integer,
			categoryName text NOT NULL		
		);
  `));		

	console.log(db.run(`
		CREATE TABLE IF NOT EXISTS tasks(
			title text NOT NULL, 
			user integer,
			category integer,
			task text,
			status text	
		);
	`));

	//console.log(db.run("INSERT INTO users (name, email, password) VALUES('Bud Powell', 'batata', 'senha');"));

	return db;
}

module.exports = createTables;