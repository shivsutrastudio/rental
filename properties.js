const properties = [

{
id:1,
title:"Luxury Villa",
location:"Shimla",
price:12000000,
beds:4,
sqft:3200,
type:"sale",
coords:{lat:31.1048,lng:77.1734},
images:[
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},

{
id:2,
title:"Hill Cottage",
location:"Manali",
price:9000000,
beds:3,
sqft:1800,
type:"sale",
coords:{lat:32.2396,lng:77.1887},
images:[
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa"
]
},

{
id:3,
title:"Modern Apartment",
location:"Delhi",
price:7000000,
beds:2,
sqft:1200,
type:"sale",
coords:{lat:28.6139,lng:77.2090},
images:[
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa"
]
},

{
id:4,
title:"Beach House",
location:"Goa",
price:15000000,
beds:4,
sqft:3500,
type:"sale",
coords:{lat:15.2993,lng:74.1240},
images:[
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa"
]
},

{
id:5,
title:"City Apartment",
location:"Mumbai",
price:8500000,
beds:2,
sqft:1100,
type:"sale",
coords:{lat:19.0760,lng:72.8777},
images:[
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa"
]
},

{
id:6,
title:"Lake View Villa",
location:"Udaipur",
price:13000000,
beds:3,
sqft:2600,
type:"sale",
coords:{lat:24.5854,lng:73.7125},
images:[
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511"
]
},

{
id:7,
title:"Garden Villa",
location:"Pune",
price:9800000,
beds:3,
sqft:2100,
type:"sale",
coords:{lat:18.5204,lng:73.8567},
images:[
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa"
]
},

{
id:8,
title:"Luxury Penthouse",
location:"Bangalore",
price:16000000,
beds:4,
sqft:3000,
type:"sale",
coords:{lat:12.9716,lng:77.5946},
images:[
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa"
]
},

{
id:9,
title:"Smart Apartment",
location:"Hyderabad",
price:7500000,
beds:2,
sqft:1300,
type:"sale",
coords:{lat:17.3850,lng:78.4867},
images:[
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},

{
id:10,
title:"Mountain View Home",
location:"Dehradun",
price:8200000,
beds:3,
sqft:2000,
type:"sale",
coords:{lat:30.3165,lng:78.0322},
images:[
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa"
]
},

{
id:11,
title:"Premium Flat",
location:"Chandigarh",
price:6500000,
beds:2,
sqft:1100,
type:"sale",
coords:{lat:30.7333,lng:76.7794},
images:[
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},

{
id:12,
title:"Luxury Bungalow",
location:"Jaipur",
price:14000000,
beds:4,
sqft:3300,
type:"sale",
coords:{lat:26.9124,lng:75.7873},
images:[
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa"
]
},

{
id:13,
title:"City Loft",
location:"Ahmedabad",
price:6800000,
beds:2,
sqft:1200,
type:"sale",
coords:{lat:23.0225,lng:72.5714},
images:[
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},

{
id:14,
title:"Luxury Farmhouse",
location:"Gurgaon",
price:20000000,
beds:5,
sqft:4500,
type:"sale",
coords:{lat:28.4595,lng:77.0266},
images:[
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
},

{
id:15,
title:"Lakefront Apartment",
location:"Bhopal",
price:7200000,
beds:2,
sqft:1250,
type:"sale",
coords:{lat:23.2599,lng:77.4126},
images:[
"https://images.unsplash.com/photo-1493809842364-78817add7ffb",
"https://images.unsplash.com/photo-1556911220-bff31c812dba",
"https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
"https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
]
}

];