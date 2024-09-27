export default function createBearer(token: string) {
  return `Bearer ${token}`;
}
