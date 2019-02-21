#!/usr/bin/env bash

echo 'export const env = JSON.parse(`{' >  src/config/base.ts
echo '  "firebase": {' >> src/config/base.ts
echo '    "apiKey": "'${FIREBASE_API_KEY}'",' >> src/config/base.ts
echo '    "authDomain": "'${FIREBASE_AUTH_DOMAIN}'",' >> src/config/base.ts
echo '    "databaseURL": "'${FIREBASE_DATABASE_URL}'",' >> src/config/base.ts
echo '    "projectId": "'${FIREBASE_PROJECT_ID}'",' >> src/config/base.ts
echo '    "storageBucket": "'${FIREBASE_STORAGE_BUCKET}'",' >> src/config/base.ts
echo '    "messagingSenderId": "'${FIREBASE_MESSAGING_SENDER_ID}'"' >> src/config/base.ts
echo '  }' >> src/config/base.ts
echo '}`);' >> src/config/base.ts
