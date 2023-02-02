Koala Holla

- [] Database Setup
   - [] create database in positico
   - [] create sql to populate database with current inventory
   - [] Add code to SQL file in project

- [] Server Setup 
	- [] Install extensions/packages
    - [] Init NPM  ----- npm init
    - [] install express
    - [] install pg ----	npm install pg
    - [] optional
        - [] install nodemon

- [] Functionality --- Base
    - [x] HTML file
        - [x] inputs form -- provided
    - [] Client.js File
        - [] function getKoalas() 
            - Create GET ajax.then.catch codeblock
        - [] function saveKoala( newKoala )
            - [] Create POST ajax.then.catch codeblock
                - [] use jquery to catch data from html inputs
        - [] Crete NEW PUT function to update koalas "ready for transfer"
            - [] Create PUT ajax.then.catch codeblock
                - [] use jquery to catch data from html inputs
                - [] create data object
                - [] call ajax with method, url, and data object.
                
    - [] Router File
        - [] DB CONNECTION
            - [] import pg
            - [] create pool object to export
            - [] export/import pool object
        - [] GET -- Link ajax Get from client to koalas from DB
            - [] Create query text
                - [] Query text can be harcoded I think.
                    - [] SELECT * FROM "koalas"
            - [] call pool.queryText.then.catch code block
        - [] POST -- link ajax post from client send new koalas to DB
            - [] Create query text
                - [] Takes query text from ajax post.
                    - [] INSERT INTO "koalas" (...) VALUES ...
                    - [] Use array with ($1 $2) to avoid injection
        - [] PUT -- updates to koalas "Ready for transfer"
            - [] Create query text
                - [] Takes query text from ajax PUT.
                    - [] UPDATE "koalas" SET "ready_to_transfer" = $1 WHERE "id" = $2
                    - [] Use array with ($1 $2) to avoid injection


- [] Stretch
    - [] Delete
        - [] Delete specific koala fro mDB
        - [] Confirmation "Sweet Alert" before deletion
    - [] Make "ready for transfer" a toggle as a oposed to a one way button.
    - [] Add form validation, additional styling and a README.md.
        - [] How to add Form validation?
        - [] Style is simple CSS
        - [] README.md at end 
    - [] Client side filtering with a text box
        - [] Not sure what this means
    - [] Ability to edit other information (Name, Age, Notes) for existing Koalas in the db.
        - [] PUT statements for the all Columns in the database.
        - [] probably similar to homework stretch which I did not do.