import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);
export const FROM = 'Right Hand <noreply@send.righthand.org.za>';
export const SUPPORT = 'info@righthand.org.za';
