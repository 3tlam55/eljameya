
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase URL or Anon Key. URL:', supabaseUrl, 'Key present:', !!supabaseAnonKey);
} else {
    console.log('Supabase Initialized with:', {
        url: supabaseUrl,
        keyLength: supabaseAnonKey?.length,
        keyExample: supabaseAnonKey?.substring(0, 10) + '...'
    });
}

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-key'
);
