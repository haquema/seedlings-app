const app = require("../../server");
const request = require("supertest");
const User = require("../../models/user_model");
const TokenGenerator = require ('../../models/token_generator')
require("../mongodb_helper");


describe("/signup", () => {
  afterEach(async () => {
    await User.deleteOne({ email: "person@person.com" });
  });

  describe("POST when all required signup information provided", () => {
    test("it can create a user", async () => {
      let response = await request(app).post("/signup").send({
        username: "person",
        password: "passwordQ123_12uij!",
        email: "person@person.com",
        fullName: "Person Person",
        address: "123,Person Street, N12 BWX",
      });
      expect(response.statusCode).toBe(201);
    });

    test("a user is created", async () => {
      await request(app).post("/signup").send({
        username: "person",
        password: "passwordQ123_12uij!",
        email: "person@person.com",
        fullName: "Person Person",
        address: "123,Person Street, N12 BWX",
      });
      let users = await User.find();
      expect(users.length).toEqual(1);
    });

    describe("POST, when password is missing", () => {
      test("response code is 400", async () => {
        let response = await request(app)
          .post("/signup")
          .send({ email: "person@person.com" });
        expect(response.statusCode).toBe(400);
      });

      test("does not create a user", async () => {
        await request(app).post("/signup").send({ email: "person@person.com" });
        let users = await User.find();
        expect(users.length).toEqual(0);
      });
    });

    describe("POST, when email is missing", () => {
      test("response code is 400", async () => {
        let response = await request(app)
          .post("/signup")
          .send({ password: "Password!12345678" });
        expect(response.statusCode).toBe(400);
      });

      test("does not create a user", async () => {
        await request(app)
          .post("/signup")
          .send({ password: "Password!12345678" });
        let users = await User.find();
        expect(users.length).toEqual(0);
      });
    });
});


describe("/login", () => {
    
    beforeEach(async () => {
      await request(app)
        .post("/signup")
        .send({
            username: "testperson",
            password: "passwordQ123_12uij!",
            email: "test@person.com",
            fullName: "Person Person",
            address: "123,Person Street, N12 BWX"
        });
    });

    afterEach(async () => {
      await User.deleteOne({ email: "test@person.com" });
    });

    //  xdescribe("POST, when email and password are provided", () => {
    //   test("the response code is 201", async () => {
    //     let response = await request(app)
    //       .post("/login")
    //       .send({ email: "test@person.com", password: "passwordQ123_12uij!" });
    //     expect(response.statusCode).toBe("201");
    //   });
    // }); 
 
    describe('POST, when password is missing', () => {
        test('response code is 400', async () => {
          let response = await request(app)
            .post("/login")
            .send({ email: 'test@person.com' })
          expect(response.statusCode).toBe(400)
        }) 
    })

    describe('POST, when email is missing', () => {
        test('response code is 400', async () => {
          let response = await request(app)
            .post('/login')
            .send({ password: "passwordQ123_12uij!" })
          expect(response.statusCode).toBe(400)
        })
      })
  });
});





// describe("PATCH, when user adds plant to their garden", () => {
//     beforeEach(async () => {
//         const user = new User({username:"test test",password: "Password!12345678",email: "test@test.com", fullName:"Test Person", address: "123 Person Street"})
//        await user.save();
//        token = TokenGenerator.jsonwebtoken(user.id);
//     });

//     afterEach( async () => {
//         await User.deleteOne({email: "test@test.com"})
//     })

//     test("the response code is 200 when user adds plant to their garden", async () => {
//         let [user] = await User.find({email: "test@test.com"})
//         const id = await user._id

//         let response = await request(app)
//         .patch(`/garden/${id}`)
//         .set("Authorisation", `Bearer ${token}`)
//         .send( {plant_id: `${plant_id}`})
//         expect(response.status).toEqual(200)
//         const [updatedUser] = await User.find({_id: id})
//         expect(updatedUser.userGardenPatch.length).toBe(1)
//     })
// })



