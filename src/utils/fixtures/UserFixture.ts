import { IUser } from "modules/auth/types";

import { createFixture } from "./createFixture";

export const UserFixture = createFixture<IUser>({
  id: 1,
  email: "react@ontheloos.io",
  username: "reactOTL",
  name: {
    firstname: "react",
    lastname: "loos",
  },
  phone: "90210210210",
  address: {
    city: "Antwerp",
    street: "LoosyLaan",
    number: 90,
    zipcode: "2000",
    geolocation: {
      lat: "51",
      long: "21",
    },
  },
});
