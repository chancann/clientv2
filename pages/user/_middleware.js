import { NextResponse, NextRequest } from "next/server";

export function middleware(req) {
  if (!req.cookie) {
    console.log("FORBIDDEN");
  }
}
