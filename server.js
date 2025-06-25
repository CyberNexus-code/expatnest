// server.js
import { createServer, Model } from "miragejs";
import properties from "./seed.js"

const isDev = import.meta.env.MODE === 'development';

const imageBasePath = isDev ? '/src/Assets/Images' : '/images';


createServer({
  models: {
    property: Model,
  },


  seeds(server) {
   properties.forEach((p) => server.create("property", p));
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
