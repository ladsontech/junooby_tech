
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CctvSpec {
  id: string;
  name: string;
}

interface CctvSpecsFieldsProps {
  cctvSubcategoryId: string | null;
  ptzTypeId?: string | null;
  values: { [specId: string]: string };
  onChange: (values: { [specId: string]: string }) => void;
}

const CctvSpecsFields: React.FC<CctvSpecsFieldsProps> = ({
  cctvSubcategoryId,
  ptzTypeId,
  values,
  onChange,
}) => {
  const [specs, setSpecs] = useState<CctvSpec[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSpecs = async () => {
      if (!cctvSubcategoryId && !ptzTypeId) {
        setSpecs([]);
        return;
      }
      setLoading(true);
      let query = supabase.from("cctv_specs").select("*");
      if (cctvSubcategoryId && ptzTypeId) {
        query = query.or(
          `cctv_subcategory_id.eq.${cctvSubcategoryId},ptz_type_id.eq.${ptzTypeId}`
        );
      } else if (cctvSubcategoryId) {
        query = query.eq("cctv_subcategory_id", cctvSubcategoryId);
      } else if (ptzTypeId) {
        query = query.eq("ptz_type_id", ptzTypeId);
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
  }, [cctvSubcategoryId, ptzTypeId]);

  if (!cctvSubcategoryId && !ptzTypeId) {
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
          <Label htmlFor={`cctv-spec-${spec.id}`}>{spec.name}</Label>
          <Input
            id={`cctv-spec-${spec.id}`}
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

export default CctvSpecsFields;
