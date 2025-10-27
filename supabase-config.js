// Supabase Configuration File
// This file initializes the connection to your Supabase backend database
// Make sure to include the Supabase CDN script in your HTML before loading this file

// Supabase Project Configuration
// Replace these placeholder values with your actual Supabase project credentials
// You can find these in your Supabase project settings under "API"
const SUPABASE_URL = 'https://nobkwqvudaavyhdpkhzi.supabase.co'  // Format: https://your-project.supabase.co
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vYmt3cXZ1ZGFhdnloZHBraHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwOTIxNTgsImV4cCI6MjA3NDY2ODE1OH0.NRV7rsT0eFq1C0ZbGZx9e4xygv4juwmQcmmMhoqiAi8'  // Your project's anonymous/public API key

// Initialize Supabase client
// This creates a connection to your Supabase database that can be used throughout your application
// The supabase object provides methods for authentication, database queries, storage, and more
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Export for use in other scripts (if using modules)
// For inline script usage, the 'supabase' variable will be globally available
