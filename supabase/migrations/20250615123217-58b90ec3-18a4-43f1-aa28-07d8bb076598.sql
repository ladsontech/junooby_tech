
-- Populate gadget_subcategories
INSERT INTO public.gadget_subcategories (name) VALUES
('iPhones'),
('Samsung Phones'),
('Tecno Phones'),
('Laptops');

-- Populate laptop_brands
INSERT INTO public.laptop_brands (name) VALUES
('HP'),
('Dell'),
('Lenovo'),
('Acer'),
('ASUS'),
('MacBook'),
('MSI'),
('Toshiba');

-- Populate cctv_subcategories
INSERT INTO public.cctv_subcategories (name) VALUES
('Bullet'),
('Dome'),
('PTZ');

-- Populate ptz_camera_types, linking to the 'PTZ' subcategory
DO $$
DECLARE ptz_id UUID;
BEGIN
  -- Get the ID of the 'PTZ' subcategory
  SELECT id INTO ptz_id FROM public.cctv_subcategories WHERE name = 'PTZ';

  -- Insert PTZ types with the correct subcategory_id
  INSERT INTO public.ptz_camera_types (name, subcategory_id) VALUES
  ('Single Lens', ptz_id),
  ('Dual Lens', ptz_id);
END $$;
