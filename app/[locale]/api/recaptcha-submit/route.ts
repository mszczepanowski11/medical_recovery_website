import { NextResponse } from 'next/server';

export async function POST(request: Request, response: Response) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const postData = await request.json();

  const { gRecaptchaToken } = postData;

  let res: any;

  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  try {
    const responseGoogle = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    res = await responseGoogle.json();
  } catch (error) {
    return NextResponse.json({ success: false });
  }

  if (res && !!res?.success && res.score > 0.5) {
    return NextResponse.json({ success: true, score: res.score });
  }
  return NextResponse.json({ success: false });
}
