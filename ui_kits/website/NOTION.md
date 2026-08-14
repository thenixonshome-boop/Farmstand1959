# Vendor applications → Notion

The website's "Become a vendor" form is the front end of a real database. This
file is everything needed to finish the wiring.

## Where the rows land

**Notion database:** Vendor Applications
`https://app.notion.com/p/55463b12643a4f3f876981362ad44042`
Data source id: `79d5bb90-edd5-4d94-b235-cda24f82d57e`
It lives under the Farmstand 1959 Dashboard page.

Three views exist:

- **Vendor application form** — a native Notion form, open, anonymous, no
  submitter permissions. Share its URL and submissions write straight into the
  database with **no server at all**. This is the zero-work production path.
- **Pipeline** — a board grouped by Stage, for working the queue.
- **Table** — the default full view.

`Stage` follows the six-step process from the vendor packet: New submission →
In review → Samples requested → Assorting → Terms confirmed → On the shelf,
plus a **Not yet** holding stage for "good, but not this season".

## The two paths

**Path A — Notion's own form (no code).** Publish the form view, link the
website's Vendors page at it. Notion owns the styling. Fastest, safest, but the
form will not look like Farmstand.

**Path B — the branded form on the site (what is built here).** The site's own
form collects the fields and needs one small serverless function to hold the
Notion token. Looks like the brand, needs 20 minutes of setup.

## Wiring path B

The Notion integration token is a **secret**. It cannot live in
`vendor-store.js` — that file is public. It has to sit in a server-side
environment variable.

1. Create an internal integration at `notion.so/my-integrations`, copy the
   token, and share the Vendor Applications database with it.
2. Deploy a function (Vercel / Netlify / Cloudflare Worker) that takes the
   posted JSON body and forwards it:

```js
// POST /api/vendor-application
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const r = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(toNotionApiShape(req.body))
  });
  return res.status(r.ok ? 200 : 502).json(await r.json());
}
```

3. Set `ENDPOINT` at the top of `vendor-store.js` to that function's URL.

`vendor-store.js` sends the simplified shape
`{parent: {data_source_id}, properties: {"Property name": value}}`. The Notion
REST API wants typed property objects
(`{"Email": {"email": "..."}}`, `{"Category": {"multi_select": [{"name": "..."}]}}`),
so `toNotionApiShape` in the function does that conversion. The property names
in `vendor-store.js` already match the database exactly — do not rename either
side without the other.

## Until then

With `ENDPOINT` unset, submissions are held in `localStorage` under
`fs1959.vendor.applications` and the confirmation screen prints the exact
payload it would have sent. The "The book" list at the bottom of the Vendors
page reads from that store so the whole flow is reviewable end to end. **That
list is a review affordance, not a public feature** — remove it, or gate it,
before the site goes live.

## Field map

| Form field | Notion property | Type |
| --- | --- | --- |
| brand | Brand / company name | title |
| contact | Primary contact | text |
| role | Title / role | text |
| email | Email | email |
| phone | Phone | phone |
| website | Website | url |
| social | Instagram / social | text |
| city | City, Texas | text |
| founded | Year founded | number |
| team | Team size | text |
| categories | Category | multi-select |
| texas | Texas connection | text |
| story | Brand story | text |
| soldAt | Currently sold at | text |
| products | Products submitted | text |
| wholesale | Wholesale price | number (dollar) |
| msrp | MSRP | number (dollar) |
| casePack | Case pack | text |
| moq | MOQ | text |
| capacity | Lead time + capacity | text |
| shelfLife | Shelf life / storage / handling | text |
| fit | Why a fit for Farmstand | text |
| models | Preferred model | multi-select |
| lineSheet, pricing, photos, samples, compliance, insurance | matching checkboxes | checkbox |

Set by Notion, not the form: `Application` (auto id, prefix VEN),
`Submitted` (created time), `Last updated` (last edited time). `Attachments`,
`Reviewer notes` and `Stage` are for the team to fill in during review.

## Not built

- **File upload.** The form asks whether a line sheet, pricing and photos are
  ready but cannot receive the files — browser-to-Notion file upload needs a
  second signed-URL step through the same function. Applicants email them for
  now, and the team drops them on the `Attachments` property.
- **Confirmation email.** Nothing is sent to the applicant beyond the on-screen
  receipt. Wire that in the same function if it is wanted.
- **Spam protection.** A public form with no captcha or rate limit will collect
  junk. Notion's own form view has some protection; a custom endpoint has none.
