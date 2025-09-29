# Replace YOUR_ACTUAL_API_KEY with your real API key
# Replace TOKEN and USER_ACTION in request.json before running

curl -X POST \
  'https://recaptchaenterprise.googleapis.com/v1/projects/car-modification-1090a/assessments?key=YOUR_ACTUAL_API_KEY' \
  -H 'Content-Type: application/json' \
  -d @request.json
