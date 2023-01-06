
const routes ={
    'Paris':'Skopje',
    'Zurich':'Amsterdom',
    'Prague':'Zurich',
    'Barcelona':'Berlin',
    'Kiev':'Prague',
    'Skopje':'Paris',
    'Amsterdom':'Barcelona',
    'Berlin':'Kiev'
}; 

const totalRoute = 8;
console.log(totalRoute);
const start = 'Kiev'; 

let firstCity = start ;

let count = 0;



let travelledRoutes = [];

for( let i=1; i<=totalRoute; i++){

    let trainRoute = routes[firstCity]; 
    
    travelledRoutes.push(trainRoute); 
    firstCity = trainRoute;
   
    if (firstCity ==='Kiev') count++ ; 

    if (count === 2) break;


};



const finalRoutes = travelledRoutes.join(' - '); 
console.log(`The son travelled Route is ${finalRoutes}`);