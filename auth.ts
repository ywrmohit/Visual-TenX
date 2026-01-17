import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"
import bcrypt from "bcryptjs"
import { z } from "zod"
import { authConfig } from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await db.user.findUnique({ where: { email } });
                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (passwordsMatch) return user;
                }

                return null;
            },
        }),
    ],
    callbacks: {
        ...authConfig.callbacks,
        async session({ token, session }: { token: any, session: any }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                // @ts-ignore
                session.user.role = token.role;
            }

            return session;
        },
        async jwt({ token }: { token: any }) {
            if (!token.sub) return token;

            const existingUser = await db.user.findUnique({ where: { id: token.sub } });

            if (!existingUser) return token;

            // @ts-ignore
            token.role = existingUser.role;

            return token;
        }
    }
})
