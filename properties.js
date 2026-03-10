const properties = [

{
id:1,
title:"Luxury Villa",
location:"Mumbai",
price:12000000,
beds:4,
sqft:3200,
type:"sale",
coords:{lat:19.0760,lng:72.8777},
images:[
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
"https://images.unsplash.com/photo-1568605114967-8130f3a36994",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},

{
id:2,
title:"Hill Cottage",
location:"Shimla",
price:9000000,
beds:3,
sqft:1800,
type:"sale",
coords:{lat:31.1048,lng:77.1734},
images:[
"https://images.unsplash.com/photo-1449844908441-8829872d2607",
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511"
]
},

{
id:3,
title:"Sea View Apartment",
location:"Goa",
price:8500000,
beds:3,
sqft:2100,
type:"buy",
coords:{lat:15.2993,lng:74.1240},
images:[
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
]
},

{
id:4,
title:"Modern Flat",
location:"Delhi",
price:7000000,
beds:2,
sqft:1400,
type:"buy",
coords:{lat:28.6139,lng:77.2090},
images:[
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1560185008-b033106af5c3",
"https://images.unsplash.com/photo-1507089947367-19c1da9775ae"
]
},

{
id:5,
title:"Rental Studio",
location:"Pune",
price:20000,
beds:1,
sqft:600,
type:"rent",
coords:{lat:18.5204,lng:73.8567},
images:[
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
"https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
]
},

{
id:6,
title:"Luxury Penthouse",
location:"Bangalore",
price:15000000,
beds:4,
sqft:3500,
type:"sale",
coords:{lat:12.9716,lng:77.5946},
images:[
"https://images.unsplash.com/photo-1560448075-bb485b067938",
"https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
"https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
]
},

{
id:7,
title:"Lake View Villa",
location:"Udaipur",
price:11000000,
beds:4,
sqft:3000,
type:"buy",
coords:{lat:24.5854,lng:73.7125},
images:[
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
"https://images.unsplash.com/photo-1507089947367-19c1da9775ae",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},

{
id:8,
title:"Budget Apartment",
location:"Indore",
price:3500000,
beds:2,
sqft:900,
type:"buy",
coords:{lat:22.7196,lng:75.8577},
images:[
"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
"https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
"https://images.unsplash.com/photo-1493809842364-78817add7ffb"
]
},

{
id:9,
title:"Luxury Condo",
location:"Dubai",
price:25000000,
beds:4,
sqft:4000,
type:"sale",
coords:{lat:25.2048,lng:55.2708},
images:[
"https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1560448075-bb485b067938"
]
},

{
id:10,
title:"Rental Apartment",
location:"Hyderabad",
price:18000,
beds:2,
sqft:850,
type:"rent",
coords:{lat:17.3850,lng:78.4867},
images:[
"https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
"https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
"https://images.unsplash.com/photo-1493809842364-78817add7ffb"
]
},

{
id:11,
title:"Townhouse",
location:"Chandigarh",
price:7200000,
beds:3,
sqft:1600,
type:"buy",
coords:{lat:30.7333,lng:76.7794},
images:[
"https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1507089947367-19c1da9775ae"
]
},

{
id:12,
title:"Beach Villa",
location:"Goa",
price:16000000,
beds:5,
sqft:4200,
type:"sale",
coords:{lat:15.2993,lng:74.1240},
images:[
"https://images.unsplash.com/photo-1507089947367-19c1da9775ae",
"https://images.unsplash.com/photo-1560448075-bb485b067938",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},

{
id:13,
title:"Studio Rental",
location:"Mumbai",
price:15000,
beds:1,
sqft:550,
type:"rent",
coords:{lat:19.0760,lng:72.8777},
images:[
"https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1560448204-603b3fc33ddc"
]
},

{
id:14,
title:"Luxury Mansion",
location:"Delhi",
price:45000000,
beds:6,
sqft:8000,
type:"sale",
coords:{lat:28.6139,lng:77.2090},
images:[
"https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
"https://images.unsplash.com/photo-1560448075-bb485b067938",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},

{
id:15,
title:"Family House",
location:"Jaipur",
price:5500000,
beds:3,
sqft:1400,
type:"buy",
coords:{lat:26.9124,lng:75.7873},
images:[
"https://images.unsplash.com/photo-1568605114967-8130f3a36994",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
"https://images.unsplash.com/photo-1507089947367-19c1da9775ae"
]
}

];