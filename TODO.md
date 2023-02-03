Koala Holla

- [x] Database Setup
   - [x] create database in positico
   - [x] create sql to populate database with current inventory
   - [x] Add code to SQL file in project

- [] Server Setup 
	- [x] Install extensions/packages
    - [x] Init NPM  ----- npm init
    - [x] install express
    - [x] install pg ----	npm install pg
    - [x] optional
        - [x] install nodemon

- [] Functionality --- Base
    - [x] HTML file
        - [x] inputs form -- provided
    - [x] Client.js File
        - [x] function getKoalas() 
            - [x] Create GET ajax.then.catch codeblock
        - [x] function saveKoala( newKoala )
            - [x] Create POST ajax.then.catch codeblock
                - [x] use jquery to catch data from html inputs
        - [x] Crete NEW PUT function to update koalas "ready for transfer"
            - [x] Create PUT ajax.then.catch codeblock
                - [x] use jquery to catch data from html inputs
                - [x] create data object
                - [x] call ajax with method, url, and data object.
        - [x] Render data to the DOM
                
    - [x] Router File
        - [x] DB CONNECTION
            - [x] import pg
            - [x] create pool object to export
            - [x] export/import pool object
        - [x] GET -- Link ajax Get from client to koalas from DB
            - [x] Create query text
                - [x] Query text can be harcoded I think.
                    - [x] SELECT * FROM "koalas"
            - [x] call pool.queryText.then.catch code block
        - [x] POST -- link ajax post from client send new koalas to DB
            - [x] Create query text
                - [x] Takes query text from ajax post.
                    - [x] INSERT INTO "koalas" (...) VALUES ...
                    - [x] Use array with ($1 $2) to avoid injection
        - [x] PUT -- updates to koalas "Ready for transfer" 
            - [x] Create query text
                - [x] Takes query text from ajax PUT.
                    - [x] UPDATE "koalas" SET "ready_to_transfer" = $1 WHERE "id" = $2
                    - [x] Use array with ($1 $2) to avoid injection


- [] Stretch
    - [] Delete
        - [x] Delete specific koala fro mDB
        - [] Confirmation "Sweet Alert" before deletion
    - [] Make "ready for transfer" a toggle as a oposed to a one way button.
    - [] Add form validation, additional styling and a README.md.
        - [] How to add Form validation?
        - [] Style is simple CSS
        - [] README.md at end 
    - [] Client side filtering with a text box
        - [] Need two variables
        - [] User Filter Array.filter
        - [] Gloabl Array on client-Side
    - [] Ability to edit other information (Name, Age, Notes) for existing Koalas in the db.
        - [] PUT statements for the all Columns in the database.
        - [] probably similar to homework stretch which I did not do.