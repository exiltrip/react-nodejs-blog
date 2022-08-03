# sap motherfucker, this is fucking documentation that no one reads on the fucking commands of this GREATEST project. below you can get acquainted with peace of bullshit which you already know very well

## Available Scripts

In the directory of this GREATEST project, you can run:

### `npm start`

start this whole bullshit

### `npm test`

incomprehensible bullshit

### `npm run build`

upload this shit to production





And, one more thing (really important). in order for everything to work, you need to enter this shit through postgre: 


create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    password VARCHAR(255),
    login VARCHAR(255),
    email VARCHAR(255)
);

create TABLE message(
    id SERIAL PRIMARY KEY,
    content VARCHAR(2000),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(2000),
    user_id varchar(255)
);


### good luck whore


