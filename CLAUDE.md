@AGENTS.md

# Right Hand — Project Briefing

**righthand.org.za** — South African consumer rights education platform. Plain-language modules on the CPA, NCA, RHA, and PPRA. Individual subscriptions: R99/month or R799/year. Launch target: August 2026.

---

## Repository & Working Directory

- Repo: `/Users/darrencampher/righthand`
- App code: `/Users/darrencampher/righthand/app`
- Git remote: `https://github.com/righthandrsa/righthand.git`
- Deploys automatically to Netlify on push to `main`

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Auth | Clerk v7 (production instance) |
| Payments | Paystack (live keys) |
| Email | Resend — domain: `send.righthand.org.za` |
| Deployment | Netlify — NODE_VERSION=20 in netlify.toml |
| Scheduled jobs | Netlify scheduled functions (`netlify/functions/`) |

---

## Key Environment Variables

```
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
PAYSTACK_SECRET_KEY
NEXT_PUBLIC_PAYSTACK_MONTHLY_PLAN_CODE    # PLN_d45vlnsok6bng84
NEXT_PUBLIC_PAYSTACK_ANNUAL_PLAN_CODE     # PLN_f41o3atsrq9l9sl
CLERK_WEBHOOK_SECRET
PAYSTACK_WEBHOOK_SECRET
RESEND_API_KEY
INTERNAL_API_SECRET
```

---

## Architecture Decisions

### Authentication tiers (three levels)
1. **Public** — no sign-in required (home, about, pricing, contact, free module pages)
2. **AuthGate** — sign-in required, no subscription needed (`app/components/AuthGate.tsx`). Used for free modules that require account creation.
3. **PaywallGate** — sign-in + active subscription required (`app/components/PaywallGate.tsx`). Used for paid module content.

Free modules (motor-rights, credit-report, bank-saving, renting-rht) are wrapped in `<AuthGate>`, not `<PaywallGate>`.

### Payment flow
- `PaystackButton` initiates subscription via Paystack popup
- `app/api/paystack/verify/route.ts` — best-effort verification, always returns `{ success: true }`
- **`charge.success` webhook is the reliable activation path** — this is what sets `subscribed: true` in Clerk metadata
- Do not rely on the verify route to activate subscriptions

### Clerk webhook verification
- Uses `svix` package for HMAC verification (`new Webhook(secret).verify(payload, headers)`)
- Route: `app/api/clerk/webhook/route.ts`
- Sends Welcome email on `user.created`

### Paystack webhook
- Route: `app/api/paystack/webhook/route.ts`
- `charge.success` → sets subscription metadata in Clerk + sends PaymentReceipt email
- `subscription.disable` / `subscription.not_renew` → sets `subscribed: false` + sends SubscriptionCancelled email
- `invoice.payment_failed` → sets `subscriptionStatus: 'payment_failed'` + sends PaymentFailed email

### Clerk user metadata structure
```ts
publicMetadata: {
  subscribed: boolean
  subscribedAt: string        // ISO date
  subscriptionStatus: string  // 'active' | 'cancelled' | 'payment_failed'
  subscriptionPlan: string    // 'monthly' | 'annual'
  paystackCustomerCode: string
  paystackSubscriptionCode: string
}
```

---

## Module Configuration

All module/section data lives in `app/lib/modules.ts`. Every module has a `free: boolean` field.

- `free: true` — accessible with AuthGate (sign-in only)
- `free: false` — requires PaywallGate (subscription)

The learn page (`app/learn/page.tsx`) checks `user?.publicMetadata?.subscribed` and shows:
- Subscribed users: green `✓ Unlocked` badge on paid modules, upgrade CTA hidden
- Non-subscribers: `🔒 Members` badge, upgrade CTA visible

---

## Email System

All emails use React Email templates in `app/lib/emails/`. Sent via Resend.

| Template | Trigger |
|---|---|
| `Welcome.tsx` | Clerk `user.created` webhook |
| `PaymentReceipt.tsx` | Paystack `charge.success` |
| `PaymentFailed.tsx` | Paystack `invoice.payment_failed` |
| `SubscriptionCancelled.tsx` | Paystack `subscription.disable` / `not_renew` |
| `RenewalReminder.tsx` | Netlify cron — daily, annual subscribers 7 days before renewal |
| `ReadingReminder.tsx` | Netlify cron — Mondays, inactive subscribers 7+ days |
| `NewContent.tsx` | Manual POST to `app/api/emails/new-content/route.ts` |
| `ContactAutoReply.tsx` | Contact form submission |

From address: `Right Hand <noreply@send.righthand.org.za>`
Support address: `info@righthand.org.za`

Internal API routes protected by `x-internal-secret: INTERNAL_API_SECRET` header.

---

## Scheduled Functions (Netlify)

| File | Schedule | Purpose |
|---|---|---|
| `netlify/functions/reading-reminder.ts` | `0 8 * * 1` (Mon 08:00 UTC) | Re-engagement for inactive subscribers |
| `netlify/functions/renewal-reminder.ts` | `0 7 * * *` (daily 07:00 UTC) | 7-day renewal warning for annual plans |

---

## Branding Rules

- Always **"Right Hand"** with a space — never "RightHand"
- Colours: Navy `#1A2340` (primary), Blue `#1A5EA5` (accent), Light blue `#E8F0FA` (bg)
- No emojis in code or UI unless already present

---

## Key Pages & Routes

| Route | Notes |
|---|---|
| `/` | Home |
| `/learn` | Module listing — subscription-aware badges |
| `/learn/[module-slug]` | Module content — AuthGate or PaywallGate |
| `/pricing` | Monthly/annual toggle, PaystackButton |
| `/account` | Subscription status, next billing date, cancel |
| `/sign-in` `/sign-up` | Clerk hosted UI |
| `/contact` | Contact form → team notification + auto-reply |
| `/api/clerk/webhook` | Clerk events (svix verified) |
| `/api/paystack/webhook` | Paystack events (HMAC verified) |
| `/api/paystack/verify` | Best-effort verify (always returns success) |
| `/api/paystack/cancel` | Cancel subscription via Paystack API |
| `/api/contact` | Contact form handler |
| `/api/emails/*` | Internal email trigger routes |

---

## DNS & Domain

- Domain: `righthand.org.za` — registrar Konsole H
- www: verified on Netlify, SSL active
- Clerk CNAMEs: all verified (trailing dots required in Konsole H for absolute addressing)
- Email domain: `send.righthand.org.za` — verified in Resend

---

## Pending / Future Work

- **Legal audit** (user handling before 1 Aug 2026): terms, privacy policy, disclaimer review
- **Business operations system**: invoicing, payment tracking, commission management, expense register — to be built as the corporate/ambassador side scales. Likely Supabase + protected admin pages.
- **Ambassador programme (Pabi Moloi)**: partnership proposal sent. Three options offered (affiliate, corporate BDM, hybrid + phantom equity). Commission 20% individual / 20-25% corporate by contract length. Phantom equity up to 10% via ARR milestones (R150k→2%, R300k→5%, R500k→10%), corporate 24/36-month accounts only. No exclusivity clause — proposal does not promise phantom equity is reserved for her alone. Referral link tracking and ambassador dashboard not yet built.
- **New content notification**: admin trigger at `/api/emails/new-content` — no UI built yet
- **Corporate bulk subscription** infrastructure not yet built (pricing agreed, invoicing manual for now)

---

## Netlify Config Notes

- `NODE_VERSION = "20"` required in `netlify.toml` — Next.js 16 + React 19 needs Node ≥20
- Do not add `publish = ".next"` or `@netlify/plugin-nextjs` — conflicts with Netlify's auto-detected Next.js Runtime

---

## Creator Profile — Darren Campher

Darren is the creator and founder of Right Hand. Include this section in all brand deal, sponsorship, and partnership documents.

### Social Media (as of July 2026 — update when numbers change)

| Platform | Handle | Followers |
|---|---|---|
| TikTok | @darrencampher.com | 256,700 |
| Instagram | @darrencampher.com_ | 42,300 |
| X (Twitter) | @CampherDarren | 33,000 |
| YouTube | @Darrencamphercom | Growing |
| Facebook | — | Rapid growth (~40× in 90 days) |
| **TOTAL** | All platforms | **340,000+** |

### Key Metrics
- 13.1M TikTok views (12 months)
- 12.6M unique users reached organically
- 3.5M single video peak views (also 2.8M and 1.8M)
- 59% of Instagram views from non-followers
- 56% of Instagram interactions from non-followers
- **0% paid media spend — fully organic**

### Awards & Recognition
- DStv Content Creator Awards 2024 — Social Commentary Award Winner
- National press: IOL / Cape Argus (June & November 2024), City Press (October 2024)
- Podcast guest: Sizwe Mpofu-Walsh and others

### Contact (use both in all documents)
- info@DarrenCampher.com
- info@righthand.org.za

---

## Brand Deals & Sponsorships

Saved documents: `/Users/darrencampher/Desktop/RightHand.org.za/Brand Deals & Sponsorships/`

Generator scripts (Node.js, uses `docx` npm package):
- `/private/tmp/.../scratchpad/proposal/vehicle_sponsor.js` → `RightHand_Vehicle_Sponsorship_Proposal.docx`

### Document Rules (apply to all brand/sponsorship proposals)
- **Do not include** Right Hand subscription pricing or topic area count in partner-facing documents
- Campaign window: **July/August 2026**, runs July to Sept/Oct 2026
- Always list both contact emails: info@DarrenCampher.com and info@righthand.org.za
- Frame all content as "education first, promotion second — never hard-sell advertising"
- Lead with organic reach (0% paid spend) as the credibility differentiator
- The **59% non-follower Instagram stat** is the strongest hook for brand partners — always include it

### Generic Partnership/BDM Templates (created July 2026)
- Saved to `/Users/darrencampher/Desktop/RightHand.org.za/Brand Deals & Sponsorships/`
- `RightHand_Affiliate_Partnership_Proposal_Template.docx` — Option A terms only (individual referral commission), generic `[Partner Name]` / `[Date]` placeholders
- `RightHand_Corporate_BDM_Partnership_Proposal_Template.docx` — Option B terms only (corporate BDM, pricing matrix, commission by contract length), generic placeholders
- Both deliberately exclude phantom equity (Option C) — that structure stays specific to the Pabi Moloi proposal
- Proposal-style term sheets (non-binding), not signable legal contracts — matches the style of the Pabi proposal

### Vehicle Sponsorship Proposal (completed July 2026)
- Sent to dealerships — 5 business day response deadline
- Ask: short-term vehicle loan (2–3 months), no cash payment
- Deliverables: 1–2 videos/week, dealership services review, vehicle finance content, branded vehicle visibility, Linktree placement, resharing rights
- One exclusivity slot per vehicle category
- Dealership branding applied to vehicle exterior for loan period

---

## Pabi Moloi Partnership

Proposal sent July 2026. Three options offered:

**Option A — Affiliate**
- 20% commission on individual subscriber referrals (R99/mo plan)
- No retainer, no equity

**Option B — Corporate BDM**
- Commission by contract length: 20% (12-month) / 22% (24-month) / 25% (36-month)
- Volume discounts to corporate clients: 5% / 10% / 15% / 20% by company size
- Annual upfront billing required for volume discount (cash flow protection)
- Price lock for client; ratchet up if they grow, never down

**Option C — Hybrid + Phantom Equity**
- All of Option A + B commissions
- Phantom equity up to 10% via ARR milestones (corporate qualifying accounts only):
  - R150,000 ARR → 2% phantom equity
  - R300,000 ARR → 5% phantom equity
  - R500,000 ARR → 10% phantom equity
- Qualifying corporate account: 24/36-month contract, minimum 21 seats, minimum R25,000 ACV
- Phantom equity = contractual economic right only. No voting rights, no decision-making, no share ownership, never on CIPC register
- Vesting: 24 months from each milestone, 6-month cliff
- Buy-back right: Right Hand can buy back at fair market value if partnership ends
- No exclusivity clause — proposal does not promise phantom equity is reserved for Pabi alone

**Key decisions made:**
- Phantom equity chosen over actual preference shares
- No exclusivity clause included (deliberate — removed from final proposal)
- Individual subscriber referrals do not count toward equity milestones
- All material equity terms included in the proposal itself (not deferred) to prevent future disputes
