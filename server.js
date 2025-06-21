// server.js
import { createServer, Model } from "miragejs";

createServer({
  models: {
    property: Model,
  },

  seeds(server) {
    server.create("property", {
      id: "1",
      title: "Canal-Side Apartment in Amsterdam",
      type: "Apartment",
      rent: 1950,
      currency: "EUR",
      bedrooms: 2,
      bathrooms: 1,
      sizeSqM: 70,
      furnished: true,
      availableFrom: "2025-09-01",
      energyLabel: "A",
      address: {
        street: "Herengracht 134",
        city: "Amsterdam",
        postalCode: "1015BS",
        province: "Noord-Holland"
      },
      amenities: ["Washer", "Dryer", "Balcony", "WiFi"],
      petFriendly: false,
      smokingAllowed: false,
      description: "Stylish apartment with canal views in the Jordaan district.",
      contact: {
        name: "Anna de Vries",
        email: "anna@dutchhomes.nl"
      },
      images: ["./src/Assets/Images/prop2.jpg"]
    });

    server.create("property", {
      id: "2",
      title: "Cozy Studio in Utrecht",
      type: "Studio",
      rent: 875,
      currency: "EUR",
      bedrooms: 0,
      bathrooms: 1,
      sizeSqM: 28,
      furnished: false,
      availableFrom: "2025-08-15",
      energyLabel: "B",
      address: {
        street: "Vredenburg 40",
        city: "Utrecht",
        postalCode: "3511BD",
        province: "Utrecht"
      },
      amenities: ["Central Heating", "Shared Courtyard"],
      petFriendly: true,
      smokingAllowed: false,
      description: "Compact but modern studio near Utrecht Central.",
      contact: {
        name: "Pieter Janssen",
        email: "pieter@utrechtwoon.nl"
      },
      images: ["./src/Assets/Images/prop1.jpg"]
    });

    server.create("property", {
      id: "3",
      title: "Modern Family Home in Rotterdam",
      type: "House",
      rent: 2250,
      currency: "EUR",
      bedrooms: 3,
      bathrooms: 2,
      sizeSqM: 110,
      furnished: true,
      availableFrom: "2025-10-01",
      energyLabel: "A++",
      address: {
        street: "Bergweg 88",
        city: "Rotterdam",
        postalCode: "3037EB",
        province: "Zuid-Holland"
      },
      amenities: ["Garden", "Solar Panels", "Dishwasher", "Parking"],
      petFriendly: true,
      smokingAllowed: false,
      description: "Spacious home with garden, perfect for families.",
      contact: {
        name: "Sanne Kok",
        email: "sanne@rotterdamhomes.nl"
      },
      images: ["./src/Assets/Images/prop2.jpg"]
    });

    server.create("property", {
      id: "4",
      title: "Top Floor Apartment in Eindhoven",
      type: "Apartment",
      rent: 1300,
      currency: "EUR",
      bedrooms: 1,
      bathrooms: 1,
      sizeSqM: 55,
      furnished: true,
      availableFrom: "2025-07-10",
      energyLabel: "B",
      address: {
        street: "Stratumsedijk 16",
        city: "Eindhoven",
        postalCode: "5611NA",
        province: "Noord-Brabant"
      },
      amenities: ["Elevator", "Bike Storage", "Smart Lock"],
      petFriendly: false,
      smokingAllowed: false,
      description: "Quiet and bright apartment near Eindhoven city center.",
      contact: {
        name: "Thomas Willems",
        email: "thomas@eindhovenrents.nl"
      },
      images: ["./src/Assets/Images/prop1.jpg"]
    });

    server.create("property", {
      id: "5",
      title: "Luxury Loft in The Hague",
      type: "Loft",
      rent: 2500,
      currency: "EUR",
      bedrooms: 2,
      bathrooms: 2,
      sizeSqM: 95,
      furnished: true,
      availableFrom: "2025-11-01",
      energyLabel: "A",
      address: {
        street: "Grote Marktstraat 18",
        city: "Den Haag",
        postalCode: "2511BJ",
        province: "Zuid-Holland"
      },
      amenities: ["Terrace", "Jacuzzi", "High Ceilings", "Private Parking"],
      petFriendly: true,
      smokingAllowed: false,
      description: "Luxury loft with high-end finishes and a private terrace.",
      contact: {
        name: "Jill Vermeer",
        email: "jill@denhaagrentals.nl"
      },
      images: ["./src/Assets/Images/prop2.jpg"]
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/properties", (schema) => {
      return schema.properties.all();
    });

    this.get("/properties/:id", (schema, request) => {
      let id = request.params.id;
      return schema.properties.find(id);
    });
  }
});
