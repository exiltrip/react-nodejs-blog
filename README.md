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
    surname VARCHAR(255)
);

create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

###good luck whore


