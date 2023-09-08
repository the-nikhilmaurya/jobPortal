// api to insert,delete and update data
const express  = require('express')
const {Pool} = require('pg')

const cors = require('cors'); // Import the cors middleware


const pool  = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'db',
    password: '1234',
    port: 5432
});

const port = 3000;
const app = express();
app.use(cors())


app.use(express.urlencoded({extended: false})); 
app.use(express.json());



//insert api
app.post('/insert',async (req, res) => {
  console.log("inserting....in jobPortal")
  console.log(req.body)
  try{
    const {email,name,password,usertype } = req.body;
    const insert = `insert into jobportal (email,name,password,usertype) values ($1,$2,$3,$4) RETURNING *`;
    const result = await pool.query(insert,[email,name,password,usertype]);
    console.log('Data inserted successfully');
    res.status(200).json( result.rows[0] );

  }catch(error){
      console.log(error)
      console.error("got error while inserting")
      return res.status(500).json("got error while inserting" );
  }
});


//signIn
app.post('/signIn',async (req, res) => {
    console.log("checking credentials")
    console.log(req.body)
    try{
      const {email,password } = req.body;
      const check = `select * from jobportal where email = $1 and password = $2 ;`
      const result = await pool.query(check,[email,password]);
      if(result.rowCount === 0){  
        console.log("user not found")
        return res.json({isValid:false})
      }
      console.log(result.rows[0])
      return res.status(200).json({isValid:true,data:result.rows[0]})
  
    }catch(error){
        console.log(error)
        console.error("problem with the server")
        return res.json({isValid:false})
    }
  });


  //addjob
  app.post('/addjobs',async (req, res) => {
    console.log("adding job....in jobPortal")
   
    try{
      const {email,jobtitle,salary,location,description} = req.body;
      const insert = `insert into addjob (email,jobtitle,salary,location,description) values ($1,$2,$3,$4,$5) RETURNING *`;
      const result = await pool.query(insert,[email,jobtitle,salary,location,description]);
      console.log('job inserted successfully');
      res.status(200).json( result.rows[0]);
  
    }catch(error){
        console.log(error)
        console.error("got error while inserting")
        return res.status(500).json("got error while inserting" );
    }
  });

  //delete job
  app.delete('/deletejob/:id',async (req, res) => {
    console.log("deleting job....")
  
    try{
      const { id } = req.params;
      console.log("dataa",req.params)
      console.log(id)
      const deleteQuery = 'delete from addjob where id = $1 RETURNING *;' 
      const result = await pool.query(deleteQuery,[id]);
      if(result.rowCount === 0){  
        console.log("employee id not found to delete")
        return res.status(404).json("employee id not found to delete")
      }
      console.log("Deleted successfully",result.rows)
      return res.status(200).json(result.rows)
  
    }catch(error){
      console.log(error)
      console.error("not able to delete ")
      return res.status(500).json("not able to delete" );
    }
    
  });




// show all
app.get('/show', async (req, res) => {
  console.log('show only')
  try{
    const query = ("select * from addjob ;")
    const result = await pool.query(query);
    console.log("data fetched successfully")
    return res.status(200).json(result.rows);
  }catch(error){
    console.log(error)
      console.error("not able to fetch")
      return res.status(500).json({ error: "not able to fetch" });
  }
  
})


//show by id
app.get('/show/:email', async(req, res) => {
    const {email} = req.params;
    console.log("showid "+email)
  try{
    const select = "select * from addjob where email = $1;"
    const result = await pool.query(select,[email]);
    if(result.rowCount === 0){
      return res.status(404).json({error:"employee id not founddd"})
    }
    console.log("data fetched successfully")
    return res.status(200).json(result.rows);
    }catch(error){
        console.log(error)
      console.error("not able to fetch")
      return res.status(500).json({ error: "not able to fetch" });
    }
})


// check email before registration
app.get('/checkemail/:email', async (req, res) => {
    console.log('check email before registration',req.params)

    try{
        console.log("checkemail")
        const {email} = req.params
        console.log(email)
      const query = (`select * from jobportal where email = $1;`)
      const result = await pool.query(query,[email]);
      if(result.rowCount === 0){
        console.log("email not found can log in")
        return res.json({isValid:true})
      }
      console.log("email found")
      return res.json({isValid:false})

    }catch(error){
      console.log(error)
        console.error("not able to fetch")
        return res.json({isValid:false });
    }
    
  })



// update seekeers
app.put('/update/:id', async (req, res) => {
    console.log("updating seekers....");
    const { email } = req.body; // Single email to add
    const {id}  = req.params;
    
    console.log(req.params);
    console.log(req.body);
    try {
  
      const update = `
        UPDATE addjob
        SET seekers = array_append(seekers, $2) 
        WHERE id = $1
        RETURNING *;
      `;
  
      const result = await pool.query(update, [id, email]);
  
      if (result.rowCount === 0) {
        console.log("Data with the specified ID not found");
        return res.status(404).json('Data with the specified ID not found');
      }
  
      console.log('Data updated successfully');
      return res.status(200).json(result.rows);
  
    } catch (error) {
      console.log(error);
      console.error("got error while updating");
      return res.status(500).json("got error while updating");
    }
  });


//   view jobs paricular
app.get('/showone/:id', async(req, res) => {
    const {id} = req.params;
    console.log("showid "+id)
  try{
    const select = "select * from addjob where id = $1 ;"
    const result = await pool.query(select,[id]);
    if(result.rowCount === 0){
        console.log("not found")
      return res.status(404).json({error:"id not founddd"})
    }
    console.log("data fetched successfully")
    return res.status(200).json(result.rows);
    }catch(error){
        console.log(error)
      console.error("not able to fetch")
      return res.status(500).json({ error: "not able to fetch" });
    }
})


// get the list of array
app.get('/getseeker/:id', async(req, res) => {
    const {id} = req.params;
    console.log("showid "+id)
  try{
    const select = "select seekers from addjob where id = $1 ;"
    const result = await pool.query(select,[id]);
    if(result.rowCount === 0){
        console.log("not found")
      return res.status(404).json({error:"id not founddd"})
    }
    console.log("data fetched successfully")
    return res.status(200).json(result.rows[0]);
    }catch(error){
        console.log(error)
      console.error("not able to fetch")
      return res.status(500).json({ error: "not able to fetch" });
    }
})
  
  
//show profile
app.get('/profile/:email', async(req, res) => {
  const {email} = req.params;
  console.log("showid "+email)
try{
  const select = "select name,email from jobportal where email = $1;"
  const result = await pool.query(select,[email]);
  if(result.rowCount === 0){
    return res.status(404).json({error:"user  not founddd"})
  }
  console.log("user profile fetched")
  return res.status(200).json(result.rows);
  }catch(error){
      console.log(error)
    console.error("not able to fetch")
    return res.status(500).json({ error: "not able to fetch" });
  }
})




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

