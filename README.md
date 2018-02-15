# firebase-jobs
How to Schedule (Cron) Jobs with Cloud Functions for Firebase on NodeJS.

## Steps 
- Deploy the trigger on Firebase
  1. cd functions
  2. npm install
  3. cd ..
  4. firebase use --add 
  5. firebase deploy --only functions:scheduledJob
- Deploy Cron and Handler on AppEngine
  1. gcloud init
  2. gcloud app deploy app.yaml
  3. gcloud app deploy cron.yaml
