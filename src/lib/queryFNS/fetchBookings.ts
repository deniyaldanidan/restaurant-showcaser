import myRoutes from "@/utils/myRoutes";
import axios from "axios";
import createBearer from "@/lib/createBearer";

export type AxiosReturnType = {
  name: string;
  time: string;
  id: string;
  date: string;
  noOfPersons: number;
  mobile: string;
}[];

export default async function fetchBookings(token: string) {
  return axios
    .get<AxiosReturnType>(myRoutes.apis.adminBookings, {
      headers: { Authorization: createBearer(token) },
    })
    .then((res) => res.data);
}
