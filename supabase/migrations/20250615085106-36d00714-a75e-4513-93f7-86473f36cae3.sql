
-- Create gadget_subcategories table
CREATE TABLE public.gadget_subcategories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create laptop_brands table
CREATE TABLE public.laptop_brands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create gadget_specs table for specifications by (subcategory OR brand)
CREATE TABLE public.gadget_specs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  subcategory_id UUID REFERENCES public.gadget_subcategories(id) ON DELETE CASCADE,
  brand_id UUID REFERENCES public.laptop_brands(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Add subcategory_id and brand_id columns to products table
ALTER TABLE public.products
  ADD COLUMN subcategory_id UUID REFERENCES public.gadget_subcategories(id),
  ADD COLUMN brand_id UUID REFERENCES public.laptop_brands(id);

-- (Optional, if needed:) Add array of specs ids to products table (if you want specs as relations instead of strings)
-- ALTER TABLE public.products ADD COLUMN spec_ids UUID[]; -- NOT doing this yet, as current `specs` column is json. We'll keep `specs` string[] for now.

