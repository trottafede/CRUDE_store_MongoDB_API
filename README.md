# CRUDE_store_MongoDB_API

API for creating Users and Products.

User Endpoints
// Getting  all
user.get("/", index);
// Getting  one
user.get("/:id", show);
// Creating one
user.post("/", checkUsernameExists, create);
// Updating one
user.patch("/:id", update);
// Deleting one
user.delete("/:id", destroy);


Products endpoints
// Getting  all
product.get("/", index);
// Getting  one
product.get("/:id", show);
// Creating one
product.post("/",create);
// Updating one
product.patch("/:id", update);
// Deleting one
product.delete("/:id", destroy);