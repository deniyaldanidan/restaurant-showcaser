import myRoutes from "@/utils/myRoutes";
import axios from "axios";
import createBearer from "@/lib/createBearer";
import { FoodTypesEnumType } from "@/utils/types";

export type AxiosReturnType = {
  id: number;
  name: string;
  description: string;
  foodType: FoodTypesEnumType;
}[];

export default async function fetchFoodCategory(token: string) {
  return axios
    .get<AxiosReturnType>(myRoutes.apis.adminFoodCat, {
      headers: { Authorization: createBearer(token) },
    })
    .then((res) => res.data);
}
