import myRoutes from "@/utils/myRoutes";
import axios from "axios";
import createBearer from "@/lib/createBearer";
import { z } from "zod";
import { foodFormParser } from "@/utils/zod-valids";

export type AxiosReturnType = (z.infer<typeof foodFormParser> & {
  id: number;
  foodCategoryName: string;
})[];

export default async function fetchFoods(token: string) {
  return axios
    .get<AxiosReturnType>(myRoutes.apis.adminFood, {
      headers: { Authorization: createBearer(token) },
    })
    .then((res) => res.data);
}
