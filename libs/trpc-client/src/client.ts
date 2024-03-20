import { createTRPCReact } from '@trpc/react-query';
import { AppRouter } from '@upshot/trpc-server/routers';

export const trpcClient = createTRPCReact<AppRouter>();
