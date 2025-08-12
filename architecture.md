┌─────────────────────────────────────────────────┐
│                 Client Layer                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │   Admin     │  │   Staff     │  │  Public │ │
│  │  Dashboard  │  │  Interface  │  │  Booking│ │
│  └─────────────┘  └─────────────┘  └─────────┘ │
└─────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│                 API Layer                       │
│  ┌─────────┐  ┌─────────┐  ┌─────────────────┐ │
│  │ Tables  │  │ Reserv. │  │ Realtime Events │ │
│  │  API    │  │  API    │  │     (SSE)       │ │
│  └─────────┘  └─────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│                 Data Layer                      │
│  ┌───────────────────────────────────────────┐ │
│  │                PostgreSQL                 │ │
│  │  - Tables                                 │ │
│  │  - Reservations                           │ │
│  │  - Staff                                  │ │
│  │  - Settings                               │ │
│  └───────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘

[Next.js Frontend]
src/
 ├── app/  (or pages/ if using Pages Router)
 │     ├── login/
 │     │     └── page.tsx
 │     ├── dashboard/
 │     │     └── page.tsx
 │     ├── floor-plan/
 │     │     └── page.tsx
 │     ├── reservations/
 │     │     └── page.tsx
 │     └── admin/
 │           └── page.tsx
 │
 ├── components/
 │     ├── layout/
 │     │     ├── Header.tsx
 │     │     ├── Sidebar.tsx
 │     │     └── Footer.tsx
 │     ├── tables/
 │     │     ├── TableItem.tsx
 │     │     ├── TableStatusBadge.tsx
 │     │     └── TableForm.tsx
 │     ├── reservations/
 │     │     ├── ReservationForm.tsx
 │     │     ├── ReservationList.tsx
 │     │     └── ReservationDetails.tsx
 │     └── floorplan/
 │           ├── FloorPlanEditor.tsx
 │           ├── TableCanvas.tsx
 │           └── Toolbar.tsx
 │
 ├── lib/
 │     ├── supabaseClient.ts
 │     ├── auth.ts
 │     ├── api.ts
 │     └── constants.ts
 │
 ├── hooks/
 │     ├── useAuth.ts
 │     ├── useRealtimeTables.ts
 │     ├── useRealtimeReservations.ts
 │     └── useFloorPlan.ts
 │
 ├── store/
 │     ├── useTableStore.ts
 │     └── useReservationStore.ts
 │
 ├── styles/
 │     ├── globals.css
 │     └── tailwind.config.js
 │
 ├── public/
 │     └── (images, icons, etc.)
 │
 └── utils/
       ├── formatDate.ts
       ├── validateReservation.ts
       └── generateTableId.ts



3️⃣ Key Pages & Flows
| Page            | Purpose          | Features                                              |
| --------------- | ---------------- | ----------------------------------------------------- |
| `/login`        | Staff login      | Supabase Auth, magic link or email/password           |
| `/dashboard`    | Manager overview | Occupancy rate, active reservations, quick actions    |
| `/floor-plan`   | Main table view  | Drag & drop tables, change status, real-time updates  |
| `/reservations` | Reservation list | Search, filter by date/time, add/edit/cancel bookings |
| `/admin`        | Settings         | Floor plan management, user roles, system settings    |


 users table
    | Field         | Type          | Notes                                 |
| ------------- | ------------- | ------------------------------------- |
| `id`          | `uuid`        | Primary key (generated)               |
| `name`        | `text`        | Staff member’s full name              |
| `email`       | `text`        | Unique, used for login                |
| `role`        | `text`        | `admin`, `manager`, `host`, `cleaner` |
| `last_active` | `timestamptz` | Last login/activity time              |
| `created_at`  | `timestamptz` | Default `now()`                       |

2️⃣ floor_plans table

| Field         | Type          | Notes                                                         |
| ------------- | ------------- | ------------------------------------------------------------- |
| `id`          | `uuid`        | Primary key                                                   |
| `name`        | `text`        | e.g. “Main Hall”                                              |
| `canvas_json` | `jsonb`       | Serialized floor plan (table positions, zoom, rotation, etc.) |
| `created_by`  | `uuid`        | FK → `users.id`                                               |
| `created_at`  | `timestamptz` | Default `now()`                                               |
                                            |

tables table
| Field           | Type          | Notes                                           |
| --------------- | ------------- | ----------------------------------------------- |
| `id`            | `uuid`        | PK                                              |
| `floor_plan_id` | `uuid`        | FK → `floor_plans.id`                           |
| `name`          | `text`        | Table label (T1, T2, etc.)                      |
| `x`             | `integer`     | X position on canvas                            |
| `y`             | `integer`     | Y position on canvas                            |
| `width`         | `integer`     | Table width in px                               |
| `height`        | `integer`     | Table height in px                              |
| `rotation`      | `integer`     | Degrees                                         |
| `seats`         | `integer`     | Number of seats                                 |
| `shape`         | `text`        | `rect`, `round`, `custom`                       |
| `status`        | `text`        | `available`, `reserved`, `occupied`, `cleaning` |
| `meta`          | `jsonb`       | Any extra info                                  |
| `created_at`    | `timestamptz` | Default `now()`                                 |
                               |

4️⃣ reservations table
| Field           | Type          | Notes                               |
| --------------- | ------------- | ----------------------------------- |
| `id`            | `uuid`        | PK                                  |
| `table_id`      | `uuid`        | FK → `tables.id`                    |
| `customer_name` | `text`        | Optional (GDPR compliance)          |
| `phone`         | `text`        | Optional (store hashed if needed)   |
| `email`         | `text`        | Optional                            |
| `start_time`    | `timestamptz` | Booking start time                  |
| `end_time`      | `timestamptz` | Booking end time                    |
| `status`        | `text`        | `confirmed`, `cancelled`, `no-show` |
| `party_size`    | `integer`     | Number of guests                    |
| `created_by`    | `uuid`        | FK → `users.id`                     |
| `created_at`    | `timestamptz` | Default `now()`     

 (Optional) audit_logs table                |

| Field        | Type          | Notes                                         |
| ------------ | ------------- | --------------------------------------------- |
| `id`         | `uuid`        | PK                                            |
| `user_id`    | `uuid`        | FK → `users.id`                               |
| `action`     | `text`        | e.g. “table\_created”, “reservation\_deleted” |
| `details`    | `jsonb`       | Extra info                                    |
| `created_at` | `timestamptz` | Default `now()`                               |
