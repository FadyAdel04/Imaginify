import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    ignoredRoutes: ['/api/webhooks/clerk']
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};