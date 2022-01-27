import { NextResponse, NextRequest } from "next/server";

export default function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.token;

  if (token && pathname == '/login') {
    return NextResponse.redirect('/');
  }
}