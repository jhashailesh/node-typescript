import {makeFancyName} from "./user.helper";

test("should make fancy name", ()=>{
  const name = makeFancyName("shailesh");
  expect(name).toBe("Hey! Superstar shailesh. ")
});
