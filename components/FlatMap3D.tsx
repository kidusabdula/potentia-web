"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression, DivIcon } from "leaflet";
import countriesGeoJSON from "../public/custom.geo.json";

declare module "leaflet" {
  interface Default extends L.Icon {
    _getIconUrl?: (name: string) => string;
  }
}

// Define types for the mining location data
interface MiningLocation {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  country: string;
  hashRate: string;
  energyUsage: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

interface CountryMiningData {
  hashRate: number;
  energyUsage: number;
  locations: number;
}

// Fix Leaflet default icon issue in Next.js
if (typeof window !== "undefined") {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
}

const MapboxMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<MiningLocation | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  // Mock dataset of Bitcoin mining locations
  const miningLocations: MiningLocation[] = [
    { name: "Mining Farm 1", coordinates: [103.8198, 1.3521], country: "Singapore", hashRate: "10 TH/s", energyUsage: "5 MW" },
    { name: "Mining Farm 2", coordinates: [-115.1398, 36.1699], country: "USA", hashRate: "50 TH/s", energyUsage: "25 MW" },
    { name: "Mining Farm 3", coordinates: [104.1954, 35.8617], country: "China", hashRate: "100 TH/s", energyUsage: "50 MW" },
    { name: "Mining Farm 4", coordinates: [101.6869, 3.1390], country: "Malaysia", hashRate: "20 TH/s", energyUsage: "10 MW" },
    { name: "Mining Farm 5", coordinates: [-106.3468, 56.1304], country: "Canada", hashRate: "30 TH/s", energyUsage: "15 MW" },
    { name: "Mining Farm 6", coordinates: [9.3468, 38.1304], country: "Canada", hashRate: "40 TH/s", energyUsage: "20 MW" },
    { name: "Addis Ababa Mining Site", coordinates: [38.7469, 9.0300], country: "Ethiopia", hashRate: "5 TH/s", energyUsage: "2.5 MW" },
    { name: "Tigray Mining Site", coordinates: [39.4764, 13.4967], country: "Ethiopia", hashRate: "15 TH/s", energyUsage: "7.5 MW" },
    { name: "Moscow Mining Complex", coordinates: [37.6173, 55.7558], country: "Russia", hashRate: "45 TH/s", energyUsage: "22.5 MW" },
    { name: "São Paulo Mining Center", coordinates: [-46.6333, -23.5505], country: "Brazil", hashRate: "35 TH/s", energyUsage: "17.5 MW" },
  ];

  // Custom marker icon for mining locations
  const customIcon: DivIcon = new L.DivIcon({
    className: "mining-marker",
    html: `
      <div class="marker-inner">
        <div class="marker-pulse"></div>
        <div class="marker-dot"></div>
      </div>
    `,
    iconSize: [24, 24] as [number, number],
  }) as DivIcon;

  // Aggregate mining data by country
  const miningDataByCountry: Record<string, CountryMiningData> = miningLocations.reduce(
    (acc: Record<string, CountryMiningData>, location: MiningLocation) => {
      if (!acc[location.country]) {
        acc[location.country] = { hashRate: 0, energyUsage: 0, locations: 0 };
      }
      acc[location.country].hashRate += parseFloat(location.hashRate) || 0;
      acc[location.country].energyUsage += parseFloat(location.energyUsage) || 0;
      acc[location.country].locations += 1;
      return acc;
    },
    {}
  );

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const response = await fetch("https://formsubmit.co/ajax/minyelyeab@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New contact from ${formData.name} - Mining Location Inquiry`,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setFormStatus({ isSubmitting: false, isSuccess: true, error: null });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white pt-40">
      {/* Left Side: Summary */}
      <div className="md:w-1/4 p-6 md:border-r border-b md:border-b-0 border-gray-800 overflow-y-auto bg-black order-2 md:order-1 hidden lg:block">
        <h2 className="text-2xl font-bold mb-6 text-white">Global Mining Data</h2>
        {Object.entries(miningDataByCountry).map(([country, data]) => (
          <div
            key={country}
            className="mb-4 p-4 rounded-xl backdrop-blur-md bg-black hover:bg-gray-800 transition-all duration-300 border border-gray-700 cursor-pointer"
          >
            <h3 className="font-bold text-xl mb-2 text-white">{country}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Hash Rate</span>
                <span className="font-mono text-gray-300">{data.hashRate.toFixed(2)} TH/s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Energy Usage</span>
                <span className="font-mono text-gray-300">{data.energyUsage.toFixed(2)} MW</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Locations</span>
                <span className="font-mono text-gray-300">{data.locations}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Center: Map */}
      <div className="h-[200vh] md:h-auto md:flex-1 relative order-1 md:order-2">
        <div className="absolute inset-0 m-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <MapContainer
            center={[30, 0] as LatLngExpression}
            zoom={2}
            style={{ height: "100%", width: "100%", backgroundColor: "#000" }}
            minZoom={2}
            maxBounds={[[-90, -180], [90, 180]] as [[number, number], [number, number]]}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              url="https://stamen-tiles.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png"
              className="invert"
            />

            <GeoJSON
              data={countriesGeoJSON as GeoJSON.GeoJsonObject}
              onEachFeature={() => {}}
              style={{
                fillColor: "#fff",
                fillOpacity: 1,
                color: "#fff",
                weight: 1,
              }}
            />

            {miningLocations.map((location) => (
              <Marker
                key={location.name}
                position={[location.coordinates[1], location.coordinates[0]] as LatLngExpression}
                icon={customIcon}
                eventHandlers={{
                  click: () => setSelectedLocation(location),
                }}
              >
                <Popup className="custom-popup">
                  <div className="p-4 bg-black/95 backdrop-blur-md rounded-lg shadow-xl">
                    <h3 className="text-lg font-bold text-white mb-2">{location.name}</h3>
                    <p className="text-gray-300">🌍 {location.country}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Right Side: Selected Location */}
      <div className="md:w-1/4 p-6 md:border-l border-t md:border-t-0 border-gray-800 overflow-y-auto bg-black order-3">
        <h2 className="text-2xl font-bold mb-6">Location Details</h2>
        {selectedLocation ? (
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-black border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">{selectedLocation.name}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">Country</span>
                  <span className="font-medium text-gray-300">{selectedLocation.country}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">Coordinates</span>
                  <span className="font-mono text-sm text-gray-300">
                    {selectedLocation.coordinates.map((coord) => coord.toFixed(4)).join(", ")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">Hash Rate</span>
                  <span className="font-mono text-gray-300">{selectedLocation.hashRate}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">Energy Usage</span>
                  <span className="font-mono text-gray-300">{selectedLocation.energyUsage}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-black border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                {formStatus.error && <div className="text-red-500 text-sm">{formStatus.error}</div>}
                {formStatus.isSuccess && (
                  <div className="text-green-500 text-sm">Message sent successfully!</div>
                )}
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="text-center p-6 rounded-xl bg-gray-900 border border-gray-700">
            <p className="text-gray-400">Select a location on the map to view details</p>
          </div>
        )}
      </div>

      <style jsx global>{`
        .inverted-map {
          filter: invert(1) hue-rotate(180deg) brightness(0.85) contrast(1.1) saturate(0.8);
          mix-blend-mode: difference;
        }

        .leaflet-container {
          background: #000000;
        }

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

        .custom-popup .leaflet-popup-content-wrapper {
          background: transparent;
          padding: 0;
          border-radius: 12px;
        }

        .custom-popup .leaflet-popup-tip {
          border-top-color: rgba(0, 0, 0, 0.95);
        }
      `}</style>
    </div>
  );
};

export default MapboxMap;