import Person from "@/person";

it("should say my name", () => {
  const person = new Person();
  expect(person.myName()).toBe("Lucas de Souza Silva");
});
