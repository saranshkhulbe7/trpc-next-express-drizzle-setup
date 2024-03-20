'use client';
import { trpcClient } from '@upshot/trpc-client/src/client';
export default function Home() {
  const { data } = trpcClient.auth.users.useQuery();
  return <main>{JSON.stringify(data)}</main>;
}
