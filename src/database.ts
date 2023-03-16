import { ACCOUNT_TYPE, TAccount, TPokemon } from "./types";

export const accounts: TAccount[] = [
  {
    id: "a001",
    ownerName: "Ciclano",
    balance: 10000,
    type: ACCOUNT_TYPE.GOLD,
  },
  {
    id: "a002",
    ownerName: "Astrodev",
    balance: 500000,
    type: ACCOUNT_TYPE.BLACK,
  },
  {
    id: "a003",
    ownerName: "Fulana",
    balance: 20000,
    type: ACCOUNT_TYPE.PLATINUM,
  },
];

export const pokemon1: TPokemon[] = [
  {
    id: "b001",
    name: "Bulbassauro",
    age: 4,
    type: "Grama",
  },
  {
    id: "b002",
    name: "Yvessauro",
    age: 6,
    type: "Grama",
  },
];
