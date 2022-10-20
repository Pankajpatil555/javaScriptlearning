const gradeSystem=function(score){
    var marks=score
        if(score<0){
            console.log(`score ${score} is below 0 enter right score`);
            console.log("****************************************");
        }
        while(score>0&&score<100)  {  
        if (score<35 ) {
            console.log(`marks:${marks} you are fail`);
            console.log("****************************************");

        }
        else if(score>35 )     {
               console.log(`marks:${marks} you are pass`);

        }
         if(score>35 && score<=60 ){
            console.log(` Grade:your grade is C `);
            console.log("****************************************");
        } 
        if(score>60 && score<=75){
            console.log(` Grade: your grade B `);
            console.log("****************************************");
        }
        if(score>75 && score<=90){
            console.log(` Grade:  your grade A `);
            console.log("****************************************");
        }
        if(score>90 && score<=100){
            console.log(` Grade: your grade a+ `);
            console.log("****************************************");
        }
       
        if(score== null){
            console.log(` null or indefined `);
            console.log("****************************************");
        }
    }
    if(score>100 ){
        console.log(` Please enter valid number its above 100 `);
        console.log("****************************************");
    }
   
   
        

    
}
gradeSystem(52)
gradeSystem(85)
gradeSystem(702)
gradeSystem(-25)
gradeSystem("jhghg")
gradeSystem()
