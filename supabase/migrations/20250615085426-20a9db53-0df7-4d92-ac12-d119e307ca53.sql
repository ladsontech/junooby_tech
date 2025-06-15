
-- Create cctv_subcategories table (e.g., bullet, ptz)
CREATE TABLE public.cctv_subcategories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create ptz_camera_types table, related to cctv_subcategories
CREATE TABLE public.ptz_camera_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  subcategory_id UUID REFERENCES public.cctv_subcategories(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Add cctv_subcategory_id and ptz_type_id columns to products table
ALTER TABLE public.products
  ADD COLUMN cctv_subcategory_id UUID REFERENCES public.cctv_subcategories(id),
  ADD COLUMN ptz_type_id UUID REFERENCES public.ptz_camera_types(id);

-- Optionally, create specification table for cctv camera features
CREATE TABLE public.cctv_specs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  cctv_subcategory_id UUID REFERENCES public.cctv_subcategories(id) ON DELETE CASCADE,
  ptz_type_id UUID REFERENCES public.ptz_camera_types(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);
