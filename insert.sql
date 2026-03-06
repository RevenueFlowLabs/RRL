-- সব ইউজারের প্রোফাইল যেন নিরাপদ থাকে
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can only view their own data" 
ON public.user_profiles FOR SELECT 
USING (auth.uid() = user_id);