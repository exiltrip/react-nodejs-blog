
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


create TABLE images(
    image VARCHAR(255)
);

