import express, { Request, Response } from "express";
import cors from "cors";
import { accounts, pokemon1 } from "./database";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.get("/accounts", (req: Request, res: Response) => {
  res.send(accounts);
});

app.get("/accounts/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const result = accounts.find((account) => {
    return account.id === id;
  });
  res.status(200).send(result);
});

app.delete("/accounts/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const indexToRemove = accounts.findIndex((account) => {
    return account.id === id;
  });

  if (indexToRemove >= 0) {
    accounts.splice(indexToRemove, 1);
  }

  res.status(200).send("Conta deletada com sucesso!");
});

app.put("/accounts/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const newId = req.body.id;
  const newOwnerName = req.body.owner;
  const newBalance = req.body.balance;
  const newType = req.body.type;

  const account = accounts.find((account) => {
    return account.id === id;
  });

  if (account) {
    // account.id = newId ? newId : account.id;
    account.id = newId || account.id;
    account.ownerName = newOwnerName || account.ownerName;
    account.balance = isNaN(newBalance) ? account.balance : newBalance;
    account.type = newType || account.type;
  }
  res.status(200).send("Atualização realizada com sucesso!");
});

app.get("/pokemons", (req: Request, res: Response) => {
  res.send(pokemon1);
});

app.get("/pokemon1/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const result = pokemon1.find((pokemon) => {
    return pokemon.id === id;
  });
  res.status(200).send(result);
});

app.delete("/pokemon1/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const indexToRemove = pokemon1.findIndex((pokemon) => {
    return pokemon.id === id;
  });
  if (indexToRemove > -1) {
    pokemon1.splice(indexToRemove, 1);
  }
  res.status(200).send("Conta deletada com sucesso!");
});

app.post("pokemon1/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const newId = req.body.id;
  const newName = req.body.name;
  const newAge = req.body.age;
  const newType = req.body.type;

  const pokemon = pokemon1.find((pokemon) => {
    return pokemon.id === id;
  });

  if (pokemon) {
    pokemon.id = newId ? newId : pokemon.id;
    pokemon.name = newName ? newName : pokemon.name;
    pokemon.age = newAge ? newAge : pokemon.age;
    pokemon.type = newType ? newType : pokemon.type;
  }

  res.status(200).send("Atualização realizada com sucesso!");
});
