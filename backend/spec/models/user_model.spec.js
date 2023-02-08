const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user_model");

describe("User model", () => {
  afterEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has a username", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
      fullName: "Some One",
      address: "123 road, London, E1 2FG"
    });
    expect(user.username).toEqual("someone");
  });

  it("has an email address", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
      fullName: "Some One",
      address: "123 road, London, E1 2FG"
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
      fullName: "Some One",
      address: "123 road, London, E1 2FG"
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a fullName address", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
      fullName: "Some One",
      address: "123 road, London, E1 2FG"
    });
    expect(user.fullName).toEqual("Some One");
  });

  it("has a fullName address", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
      fullName: "Some One",
      address: "123 road, London, E1 2FG"
    });
    expect(user.address).toEqual("123 road, London, E1 2FG");
  });

  it("can list all users", (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it("can save a user", (done) => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
      fullName: "Some One",
      address: "123 road, London, E1 2FG"
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          username: "someone",
          email: "someone@example.com",
          password: "password",
          fullName: "Some One",
          address: "123 road, London, E1 2FG"
        });
        done();
      });
    });
  });
});