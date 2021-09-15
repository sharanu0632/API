//required modules
const express = require('express')
const api=require("./request")
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    var api_res=api.callApi(function(response){

        //Extracting costs from the JSON format

        var usd=String(response.bpi.USD.rate);
        var gbp=String(response.bpi.GBP.rate);
        var eur=String(response.bpi.EUR.rate);

        //Typecasting the extracted cost into Numbers

        var result="";
        usd.split(",").forEach(element=> result+=element);
        usd=Number(result)
        result=""
        gbp.split(",").forEach(element=> result+=element);
        gbp=Number(result)
        result=""
        eur.split(",").forEach(element=> result+=element);
        eur=Number(result)

        //Converting the costs from USD, GBP and EUR to Rupees as mentioned in the assignment

        usd=usd*73.5    //taking 73.5 as the approximate conversion value
        gbp=gbp*101.65  //taking 101.5 as the approximate conversion value
        eur=eur*86.79   //taking 101.5 as the approximate conversion value

        //The above costs are returned as an array

        var arr=[usd,gbp,eur]
        res.json(JSON.stringify(arr))


        // //The below snippet will print the cost in USD, GBP and EUR currrency

        //  res.json({
        //     usd, 
        //     gbp, 
        //     eur
        // });
         

        res.end();
    });
    
})

//Creating a server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})