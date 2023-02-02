CREATE TABLE koala (
    "id" serial PRIMARY KEY,
    "name" varchar(80) NOT NULL,
    "gender" varchar(40),
    "age" integer,
    "ready_to_transfer" BOOLEAN DEFAULT FALSE,
    "notes" varchar(250)
);

INSERT INTO koala (name, gender, age, ready_to_transfer, notes)
VALUES ('Scotty', 'M', 4, 'Y', 'Born in Guatemala'),
('Jean', 'F', 5, 'Y', 'Allergic to lots of lava'),
('Ororo', 'F', 7, 'N', 'Loves listening to Paula (Abdul)'),
('Logan', 'M', 15, 'N', 'Loves the sauna'),
('Charlie', 'M', 15, 'Y', 'Favorite band is Nirvana'),
('Betsy', 'M', 4, 'Y', 'Has a pet iguana');   