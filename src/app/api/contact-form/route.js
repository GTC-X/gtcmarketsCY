import { MAILGUN_DOMAIN, MAILGUN_FROM, mailgunClient } from '../../config/nodemailer';
import { NextResponse } from 'next/server';

const generateEmailContent = (data) => ({
  html: `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Form Submission</title>
  </head>
  <body style="margin:0;padding:0;background-color:#F7F7F7;font-family:Arial,sans-serif;color:#1e2158;text-align:left;line-height:22px;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="border-spacing:0;width:100%;">
      <tr>
        <td align="center" bgcolor="#F7F7F7">
          <div style="max-width:650px;margin:0 auto;background-color:#192055;padding:20px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-radius:24px;padding:20px;background-color:#fff;width:100%;">
              <tr>
                <td>
                  <h1 style="color:#192055;text-align:center;font-size:18px;max-width:80%;margin:0 auto;">
                    Contact Us - New Submission Received
                  </h1>
                  <h3 style="font-size:16px;color:#192055;">Dear Team,</h3>
                  <p>A new contact form has been submitted by ${data?.first_name || ''} ${data?.last_name || ''}</p>
                  <h2 style="color:#192055;font-size:16px;">Detail Information</h2>
                  <table style="width:100%;margin-top:20px;border-collapse:collapse;">
                    <tr><th style="padding:10px;text-align:left;background:#f2f2f2;color:#192055;">First Name</th><td style="padding:10px;border:1px solid #ddd;">${data?.first_name || ''}</td></tr>
                    <tr><th style="padding:10px;text-align:left;background:#f2f2f2;color:#192055;">Last Name</th><td style="padding:10px;border:1px solid #ddd;">${data?.last_name || ''}</td></tr>
                    <tr><th style="padding:10px;text-align:left;background:#f2f2f2;color:#192055;">Company Name</th><td style="padding:10px;border:1px solid #ddd;">${data?.company_name || ''}</td></tr>
                    <tr><th style="padding:10px;text-align:left;background:#f2f2f2;color:#192055;">Email</th><td style="padding:10px;border:1px solid #ddd;">${data?.email || ''}</td></tr>
                    <tr><th style="padding:10px;text-align:left;background:#f2f2f2;color:#192055;">Phone Number</th><td style="padding:10px;border:1px solid #ddd;">${data?.phone || ''}</td></tr>
                    <tr><th style="padding:10px;text-align:left;background:#f2f2f2;color:#192055;">Inquiry Type</th><td style="padding:10px;border:1px solid #ddd;">${data?.inquiry_type || ''}</td></tr>
                    <tr><th colspan="2" style="padding:10px;text-align:left;background:#f2f2f2;color:#192055;">Message</th></tr>
                    <tr><td colspan="2" style="padding:10px;border:1px solid #ddd;">${data?.message || ''}</td></tr>
                    <tr><th colspan="2" style="padding:10px;text-align:left;background:#f2f2f2;color:#192055;">Cover Letter</th></tr>
                    <tr><td colspan="2" style="padding:10px;border:1px solid #ddd;">${data?.cover_letter || ''}</td></tr>
                  </table>
                  <p style="line-height:30px;padding-top:20px;">Best Regards,<br><strong style="color:#192055;margin-top:5px;">GTCFX Team</strong></p>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      first_name,
      last_name,
      company_name,
      email,
      phone,
      inquiry_type,
      message,
      cover_letter,
      fileName,
      resume,
    } = body || {};

    // if (!resume) {
    //   return NextResponse.json({ error: 'Missing resume or fileName' }, { status: 400 });
    // }

    // const attachmentBuffer = Buffer.from(resume, 'base64');
    const subject = 'A new contact form submission has been received';
    const { html } = generateEmailContent({
      first_name,
      last_name,
      company_name,
      email,
      phone,
      inquiry_type,
      message,
      cover_letter,
    });

    const result = await mailgunClient.messages.create(MAILGUN_DOMAIN, {
      from: MAILGUN_FROM,
      to: 'zeeshan@gtcfx.com',
      bcc: 'zeeshan@gtcfx.com',
      subject,
      text: `New contact request from ${first_name || ''} ${last_name || ''} (${email || '-'})`,
      html,
      // attachment: [
      //   {
      //     filename: fileName || 'attachment.pdf',
      //     data: attachmentBuffer,
      //   },
      // ],
    });

    console.log('[contact-form] Mailgun accepted', {
      id: result?.id,
      message: result?.message,
      to: 'aliadeel35@gmail.com',
      bcc: 'zeeshan@gtcfx.com',
      from: MAILGUN_FROM,
    });

    return NextResponse.json({ message: 'Success', data: body }, { status: 200 });
  } catch (err) {
    const errorDetails = {
      name: err?.name,
      message: err?.message,
      status: err?.status || err?.statusCode,
      code: err?.code,
      details: err?.details,
      responseBody: err?.response?.body || err?.body,
      stack: err?.stack,
    };
    console.error('[contact-form] Mailgun send error:', errorDetails);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
