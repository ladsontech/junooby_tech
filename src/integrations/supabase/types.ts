export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string | null
          id: string
          password_hash: string
          username: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          password_hash: string
          username: string
        }
        Update: {
          created_at?: string | null
          id?: string
          password_hash?: string
          username?: string
        }
        Relationships: []
      }
      cctv_specs: {
        Row: {
          cctv_subcategory_id: string | null
          created_at: string | null
          id: string
          name: string
          ptz_type_id: string | null
        }
        Insert: {
          cctv_subcategory_id?: string | null
          created_at?: string | null
          id?: string
          name: string
          ptz_type_id?: string | null
        }
        Update: {
          cctv_subcategory_id?: string | null
          created_at?: string | null
          id?: string
          name?: string
          ptz_type_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cctv_specs_cctv_subcategory_id_fkey"
            columns: ["cctv_subcategory_id"]
            isOneToOne: false
            referencedRelation: "cctv_subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cctv_specs_ptz_type_id_fkey"
            columns: ["ptz_type_id"]
            isOneToOne: false
            referencedRelation: "ptz_camera_types"
            referencedColumns: ["id"]
          },
        ]
      }
      cctv_subcategories: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      gadget_specs: {
        Row: {
          brand_id: string | null
          created_at: string | null
          id: string
          name: string
          subcategory_id: string | null
        }
        Insert: {
          brand_id?: string | null
          created_at?: string | null
          id?: string
          name: string
          subcategory_id?: string | null
        }
        Update: {
          brand_id?: string | null
          created_at?: string | null
          id?: string
          name?: string
          subcategory_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gadget_specs_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "laptop_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gadget_specs_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "gadget_subcategories"
            referencedColumns: ["id"]
          },
        ]
      }
      gadget_subcategories: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      laptop_brands: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      product_images: {
        Row: {
          created_at: string | null
          display_order: number | null
          id: string
          image_url: string
          is_main: boolean | null
          product_id: string | null
        }
        Insert: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_main?: boolean | null
          product_id?: string | null
        }
        Update: {
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_main?: boolean | null
          product_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_images_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand_id: string | null
          category: Database["public"]["Enums"]["product_category"]
          cctv_subcategory_id: string | null
          condition: string | null
          created_at: string | null
          description: string | null
          detailed_description: string | null
          featured: boolean | null
          id: string
          main_image_url: string | null
          name: string
          price: string
          ptz_type_id: string | null
          specs: Json | null
          subcategory_id: string | null
          updated_at: string | null
        }
        Insert: {
          brand_id?: string | null
          category: Database["public"]["Enums"]["product_category"]
          cctv_subcategory_id?: string | null
          condition?: string | null
          created_at?: string | null
          description?: string | null
          detailed_description?: string | null
          featured?: boolean | null
          id?: string
          main_image_url?: string | null
          name: string
          price: string
          ptz_type_id?: string | null
          specs?: Json | null
          subcategory_id?: string | null
          updated_at?: string | null
        }
        Update: {
          brand_id?: string | null
          category?: Database["public"]["Enums"]["product_category"]
          cctv_subcategory_id?: string | null
          condition?: string | null
          created_at?: string | null
          description?: string | null
          detailed_description?: string | null
          featured?: boolean | null
          id?: string
          main_image_url?: string | null
          name?: string
          price?: string
          ptz_type_id?: string | null
          specs?: Json | null
          subcategory_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "laptop_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_cctv_subcategory_id_fkey"
            columns: ["cctv_subcategory_id"]
            isOneToOne: false
            referencedRelation: "cctv_subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_ptz_type_id_fkey"
            columns: ["ptz_type_id"]
            isOneToOne: false
            referencedRelation: "ptz_camera_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "gadget_subcategories"
            referencedColumns: ["id"]
          },
        ]
      }
      ptz_camera_types: {
        Row: {
          created_at: string | null
          id: string
          name: string
          subcategory_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          subcategory_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          subcategory_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ptz_camera_types_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "cctv_subcategories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      product_category: "gadgets" | "cctv"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      product_category: ["gadgets", "cctv"],
    },
  },
} as const
