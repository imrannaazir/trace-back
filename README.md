# Lost & Found

**Lost & Found** is a community-driven platform designed to help individuals report and reclaim lost items. By facilitating the reporting of both lost and found items, the website aims to create a seamless process for reuniting people with their belongings.

## Live URL

[Lost & Found](https://traceback-beige.vercel.app/)

## Features

- **User Registration and Login:** Secure login and registration system.
- **Report Lost Items:** Users can report items they have lost with detailed descriptions.
- **Report Found Items:** Users can report items they have found with detailed descriptions.
- **Claim Found Items:** Mechanism for users to claim found items with verification of ownership.
- **User Profiles:** Users can manage their profile, view their reported items, and track their claim requests.
- **Admin Dashboard:** Admins can manage users and monitor site activity.
- **Recent Posts:** View recently reported lost and found items with search and filter options.
- **Responsive Design:** User-friendly interface with responsive design using Tailwind CSS.

## Technology Used

- **Frontend:** Next.js, Tailwind CSS, Redux
- **Backend:** Express.js, Prisma
- **Database:** PostgreSQL
- **Image Hosting:** Cloudinary

## Setup Instructions

### Prerequisites

- Node.js (v14.x or higher)
- PostgreSQL

### Installation and run in dev mood (Frontend)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/imrannaazir/trace-back
   ```

2. **Go to frontend dir:**

   ```bash
   cd view
   npm i
   ```

3. **Create `.env` file and paste :**

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dm6yrvvxj
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=trace-back
NEXT_PUBLIC_BASE_URL=https://api-traceback.vercel.app/api
```

4. **Run this command to run in dev mode:**
   ```bash
   npm run dev
   ```

### Run in dev mood (Backend)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/imrannaazir/trace-back
   ```

2. **Go to frontend dir:**

   ```bash
   cd api
   npm i
   ```

3. **Create `.env` file and paste :**

```bash
NODE_ENV="production"
PORT=5000
PAGE=1
LIMIT=10
DATABASE_URL=postgresql://postgres:jmanoMTSQLtbVdVwwhANLPvdXJobYqZX@monorail.proxy.rlwy.net:36805/railway
SALT_ROUND=12
JWT_SECRET=83c0b00c36a4088f58cd268683f7fbad9d43814ecc740a19c7989e414641fa67dff48bd5214da6cd338e2f738cd42d965bdb3c6946381717e29ae7e3964fce2e
JWT_EXPIRES_IN='1h'
```

4. **Run this command to run in dev mode:**
   ```bash
   npm run dev
   ```
