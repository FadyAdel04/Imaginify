import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    ignoredRoutes: ["/api/webhooks(.*)"],
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};