# OrangeHRM Cypress BDD + POM

Automation test untuk https://opensource-demo.orangehrmlive.com
Stack: Cypress, Cucumber (BDD), Page Object Model, cypress-mochawesome-reporter.

## Scope
Login, validasi dashboard, navigasi Admin, tambah user admin, validasi user, negative case login.

## Prasyarat
Node.js v18+, npm, Git

## Instalasi
git clone <url-repo>
cd orangehrm-cypress-bdd
npm install

## Menjalankan Test
npm run test        # headless
npm run cy:open     # interaktif

## Struktur Project
orangehrm-cypress-bdd/
├── cypress/
│   ├── e2e/
│   │   ├── login.feature
│   │   └── admin_user.feature
│   ├── fixtures/
│   │   └── users.json
│   ├── pages/                      ← Page Object Model
│   │   ├── LoginPage.js
│   │   ├── DashboardPage.js
│   │   └── AdminPage.js
│   └── support/
│       ├── e2e.js
│       └── step_definitions/
│           ├── login.steps.js
│           └── admin_user.steps.js
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md

## Hasil Test
- Laporan: cypress/reports/index.html
- Screenshot kegagalan: cypress/screenshots/

## Catatan
Kredensial disimpan di cypress/fixtures/users.json.