// "use client";

// import { MapContainer, TileLayer, GeoJSON, CircleMarker, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useState, useEffect } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// import countriesGeoJSON from '../public/custom.geo.json';

// // Dummy data (REPLACE WITH YOUR ACTUAL DATA)
// const miningStations = {
//   USA: [
//     { name: "Texas Facility", lat: 32.7157, lng: -97.3307, hashrate: 15000, powerConsumption: 120, totalMined: 1200 },
//     { name: "California Facility", lat: 34.0522, lng: -118.2437, hashrate: 10000, powerConsumption: 80, totalMined: 800 },
//   ],
//   Iceland: [
//     { name: "Reykjavik Facility", lat: 64.1282, lng: -21.8278, hashrate: 20000, powerConsumption: 150, totalMined: 1500 },
//   ],
//   China: [
//     { name: "Sichuan Facility", lat: 30.0587, lng: 103.9526, hashrate: 25000, powerConsumption: 200, totalMined: 2000 },
//   ],
// };

// const countryStats = {
//   USA: {
//     totalHashrate: 25000,
//     totalPowerConsumption: 200,
//   },
//   Iceland: {
//     totalHashrate: 20000,
//     totalPowerConsumption: 150,
//   },
//   China: {
//     totalHashrate: 25000,
//     totalPowerConsumption: 200,
//   },
// };

// export default function BlackWhiteMap() {
//   const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
//   const [countryData, setCountryData] = useState<any | null>(null);
//   const [selectedStation, setSelectedStation] = useState<any | null>(null);
//   const [miningData, setMiningData] = useState<any | null>(null);

//   const handleCountryClick = (event: any) => {
//     const layer = event.target;
//     const countryName = layer.feature.properties.name;
//     setSelectedCountry(countryName);
//     setSelectedStation(null); // Clear selected station when country is clicked

//     setCountryData(countryStats[countryName as keyof typeof countryStats] || {
//       totalHashrate: 0,
//       totalPowerConsumption: 0,
//     });

//     const countryStations = miningStations[countryName as keyof typeof miningStations] || [];
//     const totalMined = countryStations.reduce((sum, station) => sum + station.totalMined, 0);

//     setMiningData({
//       totalStations: countryStations.length,
//       stations: countryStations,
//       totalMined,
//     });

//     layer.setStyle({
//       fillColor: "#000",
//       fillOpacity: 1,
//     });
//   };

//   const handleStationClick = (station: any) => {
//     setSelectedStation(station);
//   };

//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null;
//   }

//   return (
//     <div className="relative h-[600px] w-full">
//       {/* Left Panel */}
//       <div className="absolute left-0 top-0 h-full w-1/4 p-4 z-10 bg-gray-900 text-white">
//         <Card className="h-full border-gray-700 shadow-lg hover:shadow-xl transition-shadow bg-transparent">
//           <CardHeader>
//             <CardTitle className="text-xl font-bold mb-4">Mining Stations</CardTitle>
//           </CardHeader>
//           <CardContent className="overflow-y-auto">
//             {selectedCountry && miningData?.stations ? (
//               <ul className="space-y-2">
//                 {miningData.stations.map((station, index) => (
//                   <li
//                     key={index}
//                     className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
//                     onClick={() => handleStationClick(station)}
//                   >
//                     <strong className="block">{station.name}</strong>
//                     <span className="text-gray-400 block">Hashrate: {station.hashrate} TH/s</span>
//                     <span className="text-gray-400 block">Power: {station.powerConsumption} MW</span>
//                     <span className="text-gray-400 block">Mined: {station.totalMined} BTC</span>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-400">Select a country to view stations.</p>
//             )}
//           </CardContent>
//         </Card>
//       </div>

//       {/* Map */}
//       <MapContainer
//         center={[30, 0]}
//         zoom={2}
//         style={{ height: "100%", width: "100%" }}
//         minZoom={2}
//         maxBounds={[[-90, -180], [90, 180]]}
//         zoomControl={false}
//       >
//         <TileLayer
//           url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
//           attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
//         />

//         <GeoJSON
//           data={countriesGeoJSON}
//           onEachFeature={(feature, layer) => {
//             layer.on({
//               click: handleCountryClick,
//             });
//           }}
//           style={{
//             fillColor: "#333",
//             fillOpacity: 0.5,
//             color: "#fff",
//             weight: 1,
//           }}
//         />

//         {Object.values(miningStations).flat().map((station, index) => (
//           <CircleMarker
//             key={index}
//             center={[station.lat, station.lng]}
//             radius={5}
//             fillOpacity={0.7}
//             color="#000"
//             fillColor="#000"
//             eventHandlers={{
//               click: () => handleStationClick(station),
//             }}
//           >
//             <Tooltip direction="top" offset={[0, -10]}>{station.name}</Tooltip>
//           </CircleMarker>
//         ))}
//       </MapContainer>

//       {/* Right Panel */}
//       <div className="absolute right-0 top-0 h-full w-1/4 p-4 z-10 bg-gray-900 text-white">
//         <Card className="h-full border-gray-700 shadow-lg hover:shadow-xl transition-shadow bg-transparent">
//           <CardHeader>
//             <CardTitle className="text-xl font-bold mb-4">
//               {selectedStation ? selectedStation.name : "Mining Details"}
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             {selectedStation ? (
//               <>
//                 <p><strong>Hashrate:</strong> {selectedStation.hashrate} TH/s</p>
//                 <p><strong>Power:</strong> {selectedStation.powerConsumption} MW</p>
//                 <p><strong>Mined:</strong> {selectedStation.totalMined} BTC</p>
//               </>
//             ) : selectedCountry ? (
//               <>
//                 <p><strong>Country:</strong> {selectedCountry}</p>
//                 <p><strong>Total Hashrate:</strong> {countryData?.totalHashrate} TH/s</p>
//                 <p><strong>Total Power Consumption:</strong> {countryData?.totalPowerConsumption} MW</p>
//                 <p><strong>Total Mined:</strong> {miningData?.totalMined} BTC</p>
//               </>
//             ) : (
//               <p className="text-gray-400">Select a country or station.</p>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }