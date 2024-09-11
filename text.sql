CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (usernames, email) VALUES ('sara_jane', 'sara_jane@nightime.com');
INSERT INTO users (usernames, email) VALUES ('tre_jordan', 'tre_jordan@daytime.com');