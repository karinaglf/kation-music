import { NextResponse } from "next/server";

const loggedInPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (loggedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.KATION_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
