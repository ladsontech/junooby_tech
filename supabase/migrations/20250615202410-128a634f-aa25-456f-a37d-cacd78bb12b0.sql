
-- First, rename the old enum and create a new one with the expanded values
ALTER TYPE product_category RENAME TO product_category_old;

CREATE TYPE product_category AS ENUM ('phones', 'pcs', 'cctv');

-- Alter the products table to use the new enum. Cast the old values as needed:
ALTER TABLE products
ALTER COLUMN category
TYPE product_category
USING (
  CASE
    WHEN category = 'gadgets' THEN 'phones'
    ELSE category::text
  END::product_category
);

-- (Optional) Drop the old enum type once you're sure everything works:
DROP TYPE product_category_old;
