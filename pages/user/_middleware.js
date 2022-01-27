import {NextResponse} from 'next/server'

export default function middleware(req, ev){
  const {token} = req.cookies;

  if (!token){
    return NextResponse.redirect('/login')
  }
}