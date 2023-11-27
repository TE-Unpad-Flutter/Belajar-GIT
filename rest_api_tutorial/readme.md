-node js

-postgres :
username = postgres
pw = admin

-dbeaver
-postman



'Arsitekrur Pattern
Models :
View :
Controller :
'
'Object Relational Mapping'
'sync $ async'
'middleware'
'CRUD = > Create , Read, Update, Delete'
'Protocol get-> Read,post-> Create,put -> update,delete ->delete '
'Webstorage'



npx sequelize-cli model:generate --name user --attributes name:string,age:integer,description:string,workId:integer
npx sequelize-cli model:generate --name work --attributes name:string,description:string
npx sequelize-cli model:generate --name userhobby --attributes hobbyId:integer,userId:integer
npx sequelize-cli model:generate --name hobby --attributes name:string,description:string



