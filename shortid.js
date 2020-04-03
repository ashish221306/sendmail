const shortid=require('shortid');
 var students=['Ashish','manish','satish'];
 students.forEach((i)=>{
     console.log(`Id for users ${i} is ${shortid()}`);
 })
 