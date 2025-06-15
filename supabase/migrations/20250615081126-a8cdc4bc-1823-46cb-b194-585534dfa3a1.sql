
-- Add condition column to products table
ALTER TABLE public.products 
ADD COLUMN condition TEXT CHECK (condition IN ('new', 'refurbished')) DEFAULT 'new';

-- Update existing products to have a default condition
UPDATE public.products SET condition = 'new' WHERE condition IS NULL;
