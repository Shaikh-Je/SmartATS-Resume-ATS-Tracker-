# SmartATS Backend

Environment: Node 18+, MongoDB

1. copy .env.example to .env and fill values
2. npm install
3. npm run dev

APIs:
- POST /api/auth/register
- POST /api/auth/login
- GET/POST/PUT/DELETE /api/jobs
- POST /api/applications/:jobId/apply (multipart form-data file 'resume')
- GET /api/applications
- POST /api/parser/parse
