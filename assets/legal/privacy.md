Privacy Policy for LinkRadar

Last Updated: May 27, 2026

Data Controller: RES Solutions Ltd. (“we”, “us”, “our”), Bulgaria, European Union.
Privacy contact: linkradar.app@gmail.com
Registered office: Available on request at the email above.

This Privacy Policy explains how we process personal data when you use the LinkRadar mobile application and related services. LinkRadar is built on privacy by design: we minimize what we collect, we do not store your precise GPS coordinates on our servers, and we only reveal your identity to another user after a mutual match and symmetric reveal by both parties.

Notice at collection: This policy is shown during registration and before you continue using the app. By creating an account, you confirm you have read this policy. Where we rely on consent (for example location), you may withdraw it in device settings and by contacting us.

1. Personal Data We Collect

We group data using the categories below. For California residents, these align with CCPA/CPRA categories.

Identifiers: email (authentication), username, internal user ID, device push token (FCM). Stored on our servers: Yes.

Personal information: profile photo URL, age group (adult — registration is limited to users aged 18 and older). Stored on our servers: Yes.

Geolocation data: zone buckets only (10 m, 50 m, or 100 m), lastZone, zone at time of like/match — not latitude/longitude. Stored on our servers: Yes (approximate zones only).

Internet / app activity: likes sent/received, mutual matches, reveal status, contact details you choose to share after bilateral reveal, ephemeral reveal chat messages (text, photos, video), blocks, subscription and purchase records, referral usage, audit events related to your account. Stored on our servers: Yes.

Payment information: we do not store full card numbers. Stripe processes payments; we store package purchased, payment status, and related metadata needed to deliver quotas and subscription access.

Inferences: fraud or risk signals where applicable (for example rate limits). Stored on our servers: Limited, as needed for security.

1.1 Account information

• Email address — passwordless sign-in via Supabase (OTP or magic link). We do not store passwords.
• Username — unique, chosen at registration; immutable after registration.
• Profile photo — required at registration; stored via Supabase Storage; URL stored in our database.
• Age — you must be at least 18 years old to register. We store age group as adult only.

Legal basis (GDPR): Performance of a contract (Art. 6(1)(b) GDPR) — necessary to create and operate your account.

1.2 Location and proximity

On your device: The app uses the operating system’s location services (network, Wi‑Fi, cellular, and where the OS allows, GPS) only on the device to estimate proximity and assign you to a zone of 10 m, 50 m, or 100 m.

On our servers: We do not store your exact coordinates. We store:
• lastZone — your selected radar range / activity heartbeat (10, 50, or 100),
• zoneDistance on likes and matches — the zone bucket at the time of the action,
• lastActive — timestamp of recent activity (not a map position).

After reveal: Other users see your identity and a stable radar display using zone buckets and match metadata — not a precise map pin of your GPS position.

Legal basis (GDPR): Consent (Art. 6(1)(a) GDPR) for location permission and processing on device; contract (Art. 6(1)(b)) for storing zone buckets and timestamps needed to provide the radar and matching service.

California (CPRA): Precise geolocation is sensitive personal information. We do not store precise geolocation on our servers. Device location is used only for core app functions (proximity zones and radar). We do not use it for advertising or profiling unrelated to the service. You may limit location permission in your device settings.

1.3 Usage and social graph data

• Likes (including expiry and cycle count), mutual matches, reveal confirmations/declines, contact shares after bilateral reveal (for example phone or social handles you enter), ephemeral reveal chat messages, blocks, and related timestamps.

Legal basis (GDPR): Contract (Art. 6(1)(b)); legitimate interests (Art. 6(1)(f)) for security, abuse prevention, and service integrity where applicable.

1.4 Push notifications

• FCM push token stored on your user record to deliver alerts (likes, matches, reveals, chat alerts without message body in sensitive cases, system messages).

Legal basis (GDPR): Consent (Art. 6(1)(a)) via system notification permission; contract where needed to deliver the service you request.

1.5 Optional device lock (biometrics)

If you enable biometric unlock in Settings, authentication uses your device’s Face ID, fingerprint, or device PIN via the operating system. We do not receive or store biometric data on our servers.

Legal basis (GDPR): Consent (Art. 6(1)(a)) for enabling the feature on your device.

1.6 Purchases and referrals

• Subscription and quota state (likes, reveals, radar access windows), package slug, purchase timestamps, and Stripe payment identifiers needed to fulfill purchases.
• Referral codes you apply and referral rewards granted under our referral program rules.

Legal basis (GDPR): Contract (Art. 6(1)(b)) to provide paid features you request.

1.7 Data we do not collect

• Precise GPS coordinates in our database
• Passwords (passwordless auth only)
• Biometric templates on our servers
• QR-based discovery (not offered)
• Sale of personal information to data brokers

2. How We Use Your Data

• Provide radar, proximity zones, likes, mutual matches, symmetric reveal, contact exchange, and optional reveal chat.
• Operate in-app purchases (Boost, Plus, Monthly) and free-tier quotas via Stripe.
• Run the referral program where enabled.
• Send push and in-app notifications you expect from the product.
• Operate GDPR features: export my data and delete my account (in-app).
• Prevent spam, fraud, and abuse (for example rate limits, audit logging).
• Comply with law and enforce our Terms.

We do not use your data for cross-context behavioral advertising. We do not sell or share personal information as those terms are defined under the CCPA/CPRA.

3. Legal Bases Summary (GDPR)

• Account, username, photo, likes, matches — Contract, Art. 6(1)(b)
• Location on device and zone buckets on server — Consent, Art. 6(1)(a); contract where necessary, Art. 6(1)(b)
• Push notifications — Consent, Art. 6(1)(a)
• Optional device biometrics — Consent, Art. 6(1)(a), processed on device only
• Purchases and referrals — Contract, Art. 6(1)(b)
• Security, fraud prevention, logs — Legitimate interests, Art. 6(1)(f), balanced against your rights

Where we rely on consent, you may withdraw it at any time (for example disable location or notifications in device settings). Withdrawal does not affect processing already performed lawfully.

4. International Data Transfers

We use Supabase (database, authentication, storage, realtime), Google Firebase Cloud Messaging (FCM) for push delivery, and Stripe for payments. These providers may process data in the United States and other countries outside your country of residence, including outside the European Economic Area (EEA).

When we transfer personal data from the EEA/UK to countries without an adequacy decision, we rely on appropriate safeguards, such as the European Commission’s Standard Contractual Clauses (SCCs) and supplementary measures where required. You may request more information about transfers and safeguards by contacting us.

Processor locations: Confirm your project region in the Supabase Dashboard; contact us if you need the current hosting region for your deployment.

5. Data Retention

• Likes — Up to 30 days, then automatic deletion unless part of a mutual match flow as described in-product
• Account profile — Until you delete your account, or up to 24 months of inactivity after which we may delete or anonymize the account (with notice where required)
• OTP / auth tokens — Short-lived (for example minutes); managed by Supabase Auth
• Ephemeral reveal chat messages — Text and photos: shortly after the recipient opens them; videos: after one-time view; then deleted from our systems and storage
• Payment records — As required for accounting, tax, and dispute resolution, then deleted or anonymized per applicable law
• Audit / security logs — As long as needed for security and legal obligations, typically limited duration

6. Your Rights

6.1 GDPR (EEA / UK / similar)

You have the right to:

• Access — obtain a copy of your data (Download My Data in Settings)
• Rectification — correct inaccurate data (for example update profile photo; username is fixed after registration)
• Erasure — delete your account (Delete Account in Settings)
• Restriction — ask us to limit processing in certain cases
• Data portability — receive your data in a structured, machine-readable format where applicable
• Object — object to processing based on legitimate interests
• Withdraw consent — where processing is based on consent (location, notifications, optional biometrics)
• Lodge a complaint with a supervisory authority

Bulgaria: You may lodge a complaint with the Commission for Personal Data Protection (CPDP / КЗЛД) — https://www.cpdp.bg — if you believe your rights have been violated.

We will respond to requests within one month, extendable where permitted by law.

6.2 California (CCPA / CPRA)

If you are a California resident, you have the right to:

• Know what personal information we collect, use, and disclose
• Delete personal information we hold about you
• Correct inaccurate personal information
• Opt out of sale — we do not sell personal information
• Opt out of sharing for cross-context behavioral advertising — we do not share for that purpose
• Limit the use of sensitive personal information — we use device location only for core LinkRadar features; we do not store precise coordinates on our servers

How to exercise rights: Use in-app Settings (export / delete) or email linkradar.app@gmail.com. We will verify your request as required by law. You may use an authorized agent where applicable.

We do not discriminate against you for exercising privacy rights.

7. Data Sharing and Disclosure

We do not sell your personal information. We do not share it for cross-context behavioral advertising.

We may disclose data only to:

• Supabase — hosting, auth, database, storage, realtime
• Google (Firebase) — push notification delivery
• Stripe — payment processing for in-app purchases you initiate
• Authorities — when required by law or to protect rights and safety

Your username and profile photo are shown to another user only after mutual match and both users confirm reveal. Contact details are shared only through the in-app contact exchange after bilateral reveal.

8. Security

We use technical and organizational measures appropriate to the risk, including encryption in transit (TLS), access controls, row-level security (RLS) on the database, and authenticated APIs (Supabase RPC). No system is fully secure; please use a strong device lock and protect your email account used for login.

9. Children

LinkRadar is not directed at children under 18. Registration is limited to adults aged 18 and older. If you believe we have collected data from someone under 18, contact us and we will take steps to delete it.

10. Changes to This Policy

We may update this policy from time to time. We will post the new version with an updated “Last Updated” date on this page and in the app, and, where required, notify you in the app or by email.

11. Contact Us

RES Solutions Ltd.
Email: linkradar.app@gmail.com

For GDPR requests, CCPA requests, or questions about this policy, contact us at the email above. Please include “Privacy Request” in the subject line and the email address linked to your LinkRadar account.

This policy is provided for transparency. It does not constitute legal advice. For formal legal review, consult a qualified data protection lawyer.
