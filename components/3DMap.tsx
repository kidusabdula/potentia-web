"use client"; 

import React, { useState, useRef, useEffect } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface Location {
  name: string;
  coordinates: [number, number];
  country: string;
  hashRate: string;
  energyUsage: string;
}

const MapboxMap: React.FC = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoieWVhYnNpcmF0bSIsImEiOiJjbTc2bmp2YzkwOGM5MmtzZTYyam9udzN1In0.jAL2RY9WF9a5MDmD_eP7yg"; // Your Mapbox token
  const mapContainer = useRef<HTMLDivElement | null>(null); // Ref for the map container
  const [map, setMap] = useState<Map | null>(null); // State to hold the map instance
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const miningLocations: Location[] = [
    {
      name: "Mining Farm 1",
      coordinates: [103.8198, 1.3521],
      country: "Singapore",
      hashRate: "10 TH/s",
      energyUsage: "5 MW",
    },
    {
      name: "Mining Farm 2",
      coordinates: [-115.1398, 36.1699],
      country: "USA",
      hashRate: "50 TH/s",
      energyUsage: "25 MW",
    },
    {
      name: "Mining Farm 3",
      coordinates: [104.1954, 35.8617],
      country: "China",
      hashRate: "100 TH/s",
      energyUsage: "50 MW",
    },
    {
      name: "Mining Farm 4",
      coordinates: [101.6869, 3.139],
      country: "Malaysia",
      hashRate: "20 TH/s",
      energyUsage: "10 MW",
    },
    {
      name: "Mining Farm 5",
      coordinates: [-106.3468, 56.1304],
      country: "Canada",
      hashRate: "30 TH/s",
      energyUsage: "15 MW",
    },
    {
      name: "Mining Farm 6",
      coordinates: [9.3468, 38.1304],
      country: "Canada",
      hashRate: "40 TH/s",
      energyUsage: "20 MW",
    },
    {
      name: "Addis Ababa Mining Site",
      coordinates: [38.7469, 9.03],
      country: "Ethiopia",
      hashRate: "5 TH/s",
      energyUsage: "2.5 MW",
    },
    {
      name: "Tigray Mining Site",
      coordinates: [39.4764, 13.4967],
      country: "Ethiopia",
      hashRate: "15 TH/s",
      energyUsage: "7.5 MW",
    },
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    const mapInstance = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [0, 0],
      zoom: 1.5,
      accessToken: MAPBOX_TOKEN,
      attributionControl: false,
    });

    mapInstance.on("load", () => {
      miningLocations.forEach((location) => {
        const markerElement = document.createElement("div");
        markerElement.className = "mining-marker";
        markerElement.innerHTML = `
          <div class="marker-inner">
            <div class="marker-pulse"></div>
            <div class="marker-dot"></div>
          </div>
        `;

        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat(location.coordinates)
          .setPopup(
            new mapboxgl.Popup({
              offset: 25,
              className: "custom-popup",
            }).setHTML(`
              <div class="p-4 bg-black/95 backdrop-blur-md rounded-lg shadow-xl">
                <h3 class="text-lg font-bold text-white mb-2">${location.name}</h3>
                <p className="text-gray-300">🌍 ${location.country}</p>
              </div>
            `)
          )
          .addTo(mapInstance);

        marker.getElement().addEventListener("click", () => {
          setSelectedLocation(location);
        });
      });
    });

    setMap(mapInstance);

    return () => mapInstance.remove();
  }, []);

  const handleZoomIn = () => {
    if (map) map.zoomIn();
  };

  const handleZoomOut = () => {
    if (map) map.zoomOut();
  };

  const miningDataByCountry = miningLocations.reduce((acc, location) => {
    if (!acc[location.country]) {
      acc[location.country] = { hashRate: 0, energyUsage: 0, locations: 0 };
    }
    acc[location.country].hashRate += parseFloat(location.hashRate);
    acc[location.country].energyUsage += parseFloat(location.energyUsage);
    acc[location.country].locations += 1;
    return acc;
  }, {} as Record<string, { hashRate: number; energyUsage: number; locations: number }>);

  return (
    <div className="flex h-screen mt-20 mb-20 bg-black text-white">
      {/* Left Side: Summary */}
      <div className="w-1/4 p-6 border-r border-gray-800 overflow-y-auto bg-black">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Global Mining Data
        </h2>
        {Object.entries(miningDataByCountry).map(([country, data]) => (
          <div
            key={country}
            onClick={() => {
              const locations = miningLocations.filter(
                (loc) => loc.country === country
              );
              if (locations.length > 0) {
                const avgLng =
                  locations.reduce((sum, loc) => sum + loc.coordinates[0], 0) /
                  locations.length;
                const avgLat =
                  locations.reduce((sum, loc) => sum + loc.coordinates[1], 0) /
                  locations.length;
                map?.flyTo({
                  center: [avgLng, avgLat],
                  zoom: 5,
                  duration: 2000,
                  essential: true,
                });
              }
            }}
            className="mb-4 p-4 rounded-xl backdrop-blur-md bg-black hover:bg-gray-800 transition-all duration-300 border border-gray-700 cursor-pointer"
          >
            <h3 className="font-bold text-xl mb-2 text-white">{country}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Hash Rate</span>
                <span className="font-mono text-gray-300">
                  {data.hashRate} TH/s
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Energy Usage</span>
                <span className="font-mono text-gray-300">
                  {data.energyUsage} MW
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Locations</span>
                <span className="font-mono text-gray-300">
                  {data.locations}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Center: Map */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 m-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div ref={mapContainer} className="w-full h-full" />
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md rounded-lg overflow-hidden border border-white/10">
            <button
              onClick={handleZoomIn}
              className="p-3 hover:bg-gray-100 transition-colors duration-200 block w-full text-lg"
            >
              +
            </button>
            <div className="h-px bg-white/10" />
            <button
              onClick={handleZoomOut}
              className="p-3 hover:bg-gray-100 transition-colors duration-200 block w-full text-lg"
            >
              −
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Selected Location */}
      <div className="w-1/4 p-6 border-l border-gray-800 overflow-y-auto bg-black">
        <h2 className="text-2xl font-bold mb-6">Location Details</h2>
        {selectedLocation ? (
          <div className="p-6 rounded-xl bg-black border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">
              {selectedLocation.name}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">Country</span>
                <span className="font-medium text-gray-300">
                  {selectedLocation.country}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">Coordinates</span>
                <span className="font-mono text-sm text-gray-300">
                  {selectedLocation.coordinates
                    .map((coord) => coord.toFixed(4))
                    .join(", ")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">Hash Rate</span>
                <span className="font-mono text-gray-300">
                  {selectedLocation.hashRate}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">Energy Usage</span>
                <span className="font-mono text-gray-300">
                  {selectedLocation.energyUsage}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-6 rounded-xl bg-gray-900 border border-gray-700">
            <p className="text-gray-400">
              Select a location on the map to view details
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        .mining-marker {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }

        .marker-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .marker-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: #60a5fa;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .marker-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 24px;
          height: 24px;
          background: rgba(96, 165, 250, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        .custom-popup .mapboxgl-popup-content {
          background: transparent;
          padding: 0;
          border-radius: 12px;
        }

        .custom-popup .mapboxgl-popup-tip {
          border-top-color: rgba(0, 0, 0, 0.95);
        }
      `}</style>
    </div>
  );
};

export default MapboxMap;
