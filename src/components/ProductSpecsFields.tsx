
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface GadgetSpec {
  id: string;
  name: string;
}

interface ProductSpecsFieldsProps {
  subcategoryId: string | null;
  brandId?: string | null;
  values: { [specId: string]: string };
  onChange: (values: { [specId: string]: string }) => void;
}

const ProductSpecsFields: React.FC<ProductSpecsFieldsProps> = ({
  subcategoryId,
  brandId,
  values,
  onChange,
}) => {
  const [specs, setSpecs] = useState<GadgetSpec[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSpecs = async () => {
      if (!subcategoryId && !brandId) {
        setSpecs([]);
        return;
      }
      setLoading(true);
      let query = supabase.from("gadget_specs").select("*");
      if (subcategoryId && brandId) {
        query = query.or(
          `subcategory_id.eq.${subcategoryId},brand_id.eq.${brandId}`
        );
      } else if (subcategoryId) {
        query = query.eq("subcategory_id", subcategoryId);
      } else if (brandId) {
        query = query.eq("brand_id", brandId);
      }
      const { data, error } = await query.order("name");
      if (!error && data) {
        setSpecs(data);
      } else {
        setSpecs([]);
      }
      setLoading(false);
    };
    fetchSpecs();
  }, [subcategoryId, brandId]);

  if (!subcategoryId && !brandId) {
    return null;
  }

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading specs...</div>;
  }

  if (specs.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">
        No specifications defined for this selection.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {specs.map((spec) => (
        <div key={spec.id}>
          <Label htmlFor={`spec-${spec.id}`}>{spec.name}</Label>
          <Input
            id={`spec-${spec.id}`}
            value={values[spec.id] || ""}
            onChange={(e) =>
              onChange({ ...values, [spec.id]: e.target.value })
            }
            className="mt-1"
            placeholder="Enter specification"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductSpecsFields;
