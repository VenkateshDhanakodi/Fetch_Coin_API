// coin API document link --> https://docs.coinapi.io/#md-docs
let coinkey = "'X-CoinAPI-Key': '2C3B85E3-E7A7-48E9-8A05-8227A5BC032C'";

`Technical Analysis API`
let techkey = "TJF3VADF73UQPZGU2LBLANOMB6VK55DIEWQEDTDOOUS4F22G";

fetch("https://technical-analysis-api.com/api/v1/analysis/BTC?apiKey=TJF3VADF73UQPZGU2LBLANOMB6VK55DIEWQEDTDOOUS4F22G",{
    method: 'GET',
    headers: {"apiKey" : "TJF3VADF73UQPZGU2LBLANOMB6VK55DIEWQEDTDOOUS4F22G"},
    mode: "no-cors"
})
.then((res)=>{
    console.log(res);
})


// The below API also facing same issue
/////////////////////////
// `Transport_for_Great_Manchester`
// let Primary_key = "3fa84be581dd4ec89893d8ab232b164a";
// let Secondary_key = "91e58fbbfad041a4a5599a8d4b364f47";
// let weburl = "https://api.tfgm.com/odata/TrafficSignals";

// `Fetching the data of TrafficSignals from Great Manchester API`

// let createasync = async (url, key)=>{
//     try{
//         let fetch_traffic = await fetch(url,{
//             method: 'GET',
//             headers: {"Ocp-Apim-Subscription-Key" : "3fa84be581dd4ec89893d8ab232b164a"},
//             mode: "no-cors"
//         });
//         console.log(fetch_traffic.statusText());
//         let traffic_signals = await fetch_traffic.json();
//         console.log('hello');
//         console.log(traffic_signals);
//     }
//     catch(err){
//         //No Operation
//     }
// }
// createasync(weburl, Primary_key)

// let options = {
//         method: 'GET',
//         headers: {"Ocp-Apim-Subscription-Key" : "3fa84be581dd4ec89893d8ab232b164a"},
//         mode: "no-cors"
//     }

// fetch("https://api.tfgm.com/odata/TrafficSignals?$top=50/", options)
// .then((res)=>{
//     console.log(res);
// })

