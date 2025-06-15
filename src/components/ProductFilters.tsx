
import React from "react";
import { Filter } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select";

interface ProductFiltersProps {
  activeCategory: string;
  setActiveCategory: (value: string) => void;
  activeSubcategory: string;
  setActiveSubcategory: (value: string) => void;
  activeCondition: string;
  setActiveCondition: (value: string) => void;
}

// Define the categories and subcategories
const categories = [
  { id: "phones", name: "Phones" },
  { id: "pcs", name: "PCs" },
  { id: "cctv", name: "CCTV Cameras" }
];

const phoneSubcategories = [
  { id: "all", name: "All Phones" },
  { id: "samsung", name: "Samsung" },
  { id: "zte", name: "ZTE" },
  { id: "iphone", name: "iPhone" },
  { id: "googlepixel", name: "Google Pixel" }
];

const pcSubcategories = [
  { id: "all", name: "All PCs" },
  { id: "hp", name: "HP" },
  { id: "dell", name: "Dell" },
  { id: "lenovo", name: "Lenovo" },
  { id: "asus", name: "ASUS" },
  { id: "acer", name: "Acer" },
  { id: "macbook", name: "MacBook" },
  { id: "msi", name: "MSI" },
  { id: "toshiba", name: "Toshiba" }
];

const cctvSubcategories = [
  { id: "all", name: "All CCTV Cameras" },
  { id: "bullet", name: "Bullet" },
  { id: "dome", name: "Dome" },
  { id: "ptz", name: "PTZ" }
];

const conditions = [
  { id: "all", name: "All Conditions" },
  { id: "new", name: "Brand New" },
  { id: "refurbished", name: "Refurbished" }
];

const getSubcategories = (category: string) => {
  if (category === "phones") return phoneSubcategories;
  if (category === "pcs") return pcSubcategories;
  if (category === "cctv") return cctvSubcategories;
  return [];
};

const ProductFilters: React.FC<ProductFiltersProps> = ({
  activeCategory,
  setActiveCategory,
  activeSubcategory,
  setActiveSubcategory,
  activeCondition,
  setActiveCondition
}) => {
  const subcategories = getSubcategories(activeCategory);

  return (
    <div className="flex justify-center mb-8 md:mb-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl px-4 py-5 flex flex-col gap-4 sm:flex-row items-center">
        {/* Category */}
        <div className="flex items-center gap-2 w-full sm:w-1/3">
          <Filter className="h-5 w-5 text-blue-500" />
          <label htmlFor="category-filter" className="font-medium text-gray-700 text-sm whitespace-nowrap mr-2">
            Category
          </label>
          <Select value={activeCategory} onValueChange={v => { setActiveCategory(v); setActiveSubcategory("all"); }}>
            <SelectTrigger id="category-filter" className="w-full max-w-xs">
              <SelectValue>
                {categories.find((cat) => cat.id === activeCategory)?.name || "Select Category"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Subcategory */}
        <div className="flex items-center gap-2 w-full sm:w-1/3">
          <Filter className="h-5 w-5 text-purple-500" />
          <label htmlFor="subcategory-filter" className="font-medium text-gray-700 text-sm whitespace-nowrap mr-2">
            Subcategory
          </label>
          <Select value={activeSubcategory} onValueChange={setActiveSubcategory}>
            <SelectTrigger id="subcategory-filter" className="w-full max-w-xs">
              <SelectValue>
                {subcategories.find(sub => sub.id === activeSubcategory)?.name || "Select Subcategory"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {subcategories.map((sub) => (
                <SelectItem key={sub.id} value={sub.id}>
                  {sub.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Condition */}
        <div className="flex items-center gap-2 w-full sm:w-1/3">
          <Filter className="h-5 w-5 text-green-600" />
          <label htmlFor="condition-filter" className="font-medium text-gray-700 text-sm whitespace-nowrap mr-2">Condition</label>
          <Select value={activeCondition} onValueChange={setActiveCondition}>
            <SelectTrigger id="condition-filter" className="w-full max-w-xs">
              <SelectValue>
                {conditions.find((cond) => cond.id === activeCondition)?.name}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {conditions.map((condition) => (
                <SelectItem key={condition.id} value={condition.id}>
                  {condition.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
