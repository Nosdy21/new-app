import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://abazwlkmzrwmcomuxtqz.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiYXp3bGttenJ3bWNvbXV4dHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5MjYwMjIsImV4cCI6MTk2MDUwMjAyMn0.ge4uaIzjWxv4XhqC4NQbcP4yDrbPiXpvB4qbgLwO_HM')

export default supabase;