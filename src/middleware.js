import { NextResponse } from 'next/server'
import { getMeUser } from './app/_utilities/getMeUser'

export async function middleware(req) {
    const { pathname } = req.nextUrl

    // Exclude the login page from authentication check
    if (pathname.startsWith('/login')) {
        return NextResponse.next()
    }

    const token = req.cookies.get('payload-token')?.value

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    try {
        await getMeUser(token)
        return NextResponse.next()
    } catch (error) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}

