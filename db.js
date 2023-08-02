import * as sqlite from 'sqlite' ;
import  sqlite3 from 'sqlite3';



const db=await sqlite.open({
    filename:'./101.db',
    driver: sqlite3.Database
});

await db.migrate()

//call the query sing an await
// create a function that returns all the greetings from the db

 export async function getGreetings(){
    const results =await db.all(`select * from greeting`);
    return results;


}


//create a function that delete a specific greeting
//create a function that adds a new greeting

export async function getGreeting(){

      const result = await db.all(`select * from greeting`);
      return result;


}

export async function addGreeting(language, greeting){

     //sql statement type - insert

    const sql =`insert into greeting(language, greeting) values (?,?)`
    await db.run(sql, [language, greeting]);

}

 export async function deleteGreeting(id){
    //
    const sql = `delete from greeting where id = ?`; 
     await db.run(sql, [id]) 
}

 export async function updateGreeting(language, greeting, id){
    const sql = `update greeting set language =?, greeting = ? where id =?`;
    await db.run(sql, [language, greeting, id])
}


