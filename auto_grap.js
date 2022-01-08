const request_url = require("supertest")("https://rickandmortyapi.com/");
const assert = require("chai").expect;

describe("Testing Query Graphql", function () { 
  it("Verify Success Filter Name and Location with valid data", async function () { 
    const response = await request_url 
      .get("/api/character/?name=Shmlangela%20Shmlobinson-Shmlower&location=315")

    const results = response.body.results[0];

    assert(results.location.name).to.eql('Interdimensional Cable');
    assert(results.type).to.eql('');
    assert(results).to.include.keys("location", "type");
  });

  it("Verify Success Filter Location with valid data", async function () { 
    const response = await request_url 
      .get("/api/location/315")

    const results = response.body;

    assert(results.error).to.eql('Location not found');
  });

  it("Verify Failed Filter Name and Location with POST Request", async function () { 
    const response = await request_url 
      .post("/api/character/?name=Shmlangela%20Shmlobinson-Shmlower&location=315")

      const results = response.body;

      assert(results.error).to.eql('There is nothing here.');
      assert(response.status).to.eql(404);
  });

  it("Verify Failed Filter Name and Location with PUT Request", async function () { 
    const response = await request_url 
      .put("/api/character/?name=Shmlangela%20Shmlobinson-Shmlower&location=315")

      const results = response.body;

      assert(results.error).to.eql('There is nothing here.');
      assert(response.status).to.eql(404);
  });

  it("Verify Failed Filter Name and Location with PATCH Request", async function () { 
    const response = await request_url 
      .patch("/api/character/?name=Shmlangela%20Shmlobinson-Shmlower&location=315")

      const results = response.body;

      assert(results.error).to.eql('There is nothing here.');
      assert(response.status).to.eql(404);
  });
});