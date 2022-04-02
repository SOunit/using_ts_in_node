import express from "express";

const app = express();

type Fn = () => void;
type Add = (x: Params) => number;

// for not object
type Params2 = {
  a: number;
  b: number;
};

// for object
interface Params {
  a: number;
  b: number;
}

const add2: Add = (x) => {
  const { a, b } = x;
  return a + b;
};

const add: Add = (x: Params): number => {
  const { a, b } = x;

  if (b) {
    return a + b;
  } else {
    return a;
  }

  // return a + b!;
};

app.get("/", (req: any, res, next) => {
  req.name = "name";
  res.json({ test: "test" });
  add({ a: 1, b: 2 });
  add2({ a: 10, b: 20 });
});

app.listen(5000, () => {
  console.log("express app running");
});
