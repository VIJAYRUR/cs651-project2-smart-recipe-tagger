# 🚀 Cloud Run Deployment Checklist

## ✅ Pre-Deployment Setup

### 1. Google Cloud Project Setup
- [ ] Ensure Google Cloud project matches your Firebase project
- [ ] Install gcloud CLI: https://cloud.google.com/sdk/docs/install
- [ ] Login: `gcloud auth login`
- [ ] Set project: `gcloud config set project YOUR_PROJECT_ID`

### 2. Enable Required APIs
```bash
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

### 3. Gather Environment Variables
You'll need these values ready:
- [ ] `MONGODB_URI` - Your MongoDB Atlas connection string
- [ ] `GOOGLE_VISION_API_KEY` - From Google Cloud Console
- [ ] `GEMINI_API_KEY` - From Google AI Studio
- [ ] Your Firebase project ID

## 🔨 Deployment Steps

### Step 1: Initial Deployment
```bash
# Replace YOUR_* with actual values
gcloud run deploy smart-recipe-tagger \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars="NODE_ENV=production" \
  --set-env-vars="MONGODB_URI=YOUR_MONGODB_URI" \
  --set-env-vars="GOOGLE_VISION_API_KEY=YOUR_VISION_KEY" \
  --set-env-vars="GEMINI_API_KEY=YOUR_GEMINI_KEY"
```

**Note the Cloud Run URL** you get after deployment!
Example: `https://smart-recipe-tagger-xxxxx-uc.a.run.app`

### Step 2: Update Firebase Configuration

#### A. Firebase Console
1. Go to: https://console.firebase.google.com
2. Select your project
3. Go to **Authentication** → **Settings** → **Authorized domains**
4. Click **Add domain**
5. Add your Cloud Run domain (without https://):
   - Example: `smart-recipe-tagger-xxxxx-uc.a.run.app`

#### B. Google Cloud OAuth
1. Go to: https://console.cloud.google.com/apis/credentials
2. Find your OAuth 2.0 Client ID (Web client)
3. Click **Edit**
4. Under **Authorized JavaScript origins**, add:
   - `https://smart-recipe-tagger-xxxxx-uc.a.run.app`
5. Under **Authorized redirect URIs**, add:
   - `https://smart-recipe-tagger-xxxxx-uc.a.run.app/__/auth/handler`
6. Click **Save**

### Step 3: Update Client Environment Variables

Edit `client/.env`:
```env
VITE_API_URL=https://smart-recipe-tagger-xxxxx-uc.a.run.app
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GOOGLE_PICKER_API_KEY=your_picker_api_key
VITE_GOOGLE_CLIENT_ID=your_client_id
```

### Step 4: Redeploy with FRONTEND_URL

```bash
# Commit the .env changes first
git add client/.env
git commit -m "Update production environment variables"
git push origin main

# Redeploy with FRONTEND_URL
gcloud run deploy smart-recipe-tagger \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars="NODE_ENV=production,FRONTEND_URL=https://smart-recipe-tagger-xxxxx-uc.a.run.app,MONGODB_URI=YOUR_MONGODB_URI,GOOGLE_VISION_API_KEY=YOUR_VISION_KEY,GEMINI_API_KEY=YOUR_GEMINI_KEY"
```

## ✅ Post-Deployment Verification

### 1. Check Service Status
```bash
gcloud run services describe smart-recipe-tagger --region us-central1
```

### 2. View Logs
```bash
gcloud run services logs read smart-recipe-tagger --region us-central1 --limit 50
```

### 3. Test the Application
- [ ] Visit your Cloud Run URL
- [ ] Test Google Sign-In
- [ ] Test Google Photos import
- [ ] Test recipe generation
- [ ] Test filters and search

## 🔧 Troubleshooting

### Issue: "Not allowed by CORS"
**Solution**: Make sure `FRONTEND_URL` environment variable is set correctly in Cloud Run

### Issue: "Failed to authenticate"
**Solution**: 
1. Check Firebase authorized domains
2. Check OAuth redirect URIs
3. Verify client/.env has correct values

### Issue: "Vision API error"
**Solution**: Verify `GOOGLE_VISION_API_KEY` is set correctly

### Issue: "MongoDB connection failed"
**Solution**: 
1. Check `MONGODB_URI` is correct
2. Verify MongoDB Atlas allows connections from `0.0.0.0/0` (or add Cloud Run IPs)

### View Environment Variables
```bash
gcloud run services describe smart-recipe-tagger \
  --region us-central1 \
  --format="value(spec.template.spec.containers[0].env)"
```

### Update Environment Variables
```bash
gcloud run services update smart-recipe-tagger \
  --region us-central1 \
  --set-env-vars="KEY=VALUE"
```

## 💰 Cost Optimization

```bash
# Set resource limits and scaling
gcloud run services update smart-recipe-tagger \
  --region us-central1 \
  --memory 512Mi \
  --cpu 1 \
  --max-instances 10 \
  --min-instances 0 \
  --concurrency 80
```

## 📊 Monitoring

View metrics in Google Cloud Console:
https://console.cloud.google.com/run/detail/us-central1/smart-recipe-tagger/metrics

## 🎉 Success!

Your app should now be live at:
`https://smart-recipe-tagger-xxxxx-uc.a.run.app`

Share this URL with users to access your Smart Recipe Tagger app!

