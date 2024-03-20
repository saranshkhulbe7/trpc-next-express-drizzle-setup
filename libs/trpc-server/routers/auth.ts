import { publicProcedure, router } from '../trpc';
import { prisma } from '@upshot/db';

export const authRoutes = router({
  users: publicProcedure.query(() => prisma.user.findMany()),
});
