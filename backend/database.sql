
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
    dialogId varchar(255),
    message varchar(2000),
    senderId varchar(255),
    recipientId varchar(255)
);

create TABLE dialogs(
    id SERIAL PRIMARY KEY,
    senderLogin varchar(255),
    lastMessage varchar(255),
    user_id varchar(255)
);

create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(2000),
    user_id varchar(255)
);



