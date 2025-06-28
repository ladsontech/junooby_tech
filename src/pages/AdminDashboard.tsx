import React, { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import AdminLogin from '@/components/AdminLogin';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Database } from '@/integrations/supabase/types';

type DbProduct = Database['public']['Tables']['products']['Row'];

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  main_image_url: string;
  featured: boolean;
  created_at: string;
}

const formatPrice = (price: string) => {
  const numericPrice = price.replace(/[^0-9]/g, '');
  if (!numericPrice) return price;
  return `UGX ${parseInt(numericPrice).toLocaleString()}`;
};

const AdminDashboard = () => {
  const { admin, logout, isLoading } = useAdmin();
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    if (admin) {
      fetchProducts();
    }
  }, [admin]);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Transform the data to match our Product interface
      const transformedData: Product[] = (data || []).map((product: DbProduct) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        description: product.description || '',
        main_image_url: product.main_image_url || '',
        featured: product.featured || false,
        created_at: product.created_at || ''
      }));
      
      setProducts(transformedData);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoadingProducts(false);
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!admin) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      
      {/* Main Content Container with proper spacing */}
      <div className="pt-20 md:pt-24 pb-6 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-6 md:mb-8">
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Welcome back, <span className="font-medium">{admin.username}</span>
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full sm:w-auto">
                <Link to="/admin/product/new" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium">
                    <Plus size={16} />
                    <span>Add Product</span>
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={logout} 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Products Card */}
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center justify-between">
                <span>Products</span>
                <span className="text-sm sm:text-base font-normal text-gray-500">
                  ({products.length} total)
                </span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              {loadingProducts ? (
                <div className="p-8 text-center">
                  <div className="text-base md:text-lg text-gray-500">Loading products...</div>
                </div>
              ) : products.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="text-gray-500 mb-4">
                    <Package size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium">No products found</p>
                    <p className="text-sm">Start by adding your first product!</p>
                  </div>
                  <Link to="/admin/product/new">
                    <Button className="mt-4">
                      <Plus size={16} className="mr-2" />
                      Add Your First Product
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  {/* Mobile Card View */}
                  <div className="block lg:hidden">
                    <div className="space-y-3 p-4">
                      {products.map((product) => (
                        <div key={product.id} className="bg-gray-50 border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            {/* Product Image */}
                            <div className="flex-shrink-0">
                              <img
                                src={product.main_image_url || '/images/HP 15_6.jpg'}
                                alt={product.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=80&h=80&fit=crop";
                                }}
                              />
                            </div>
                            
                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 mb-2">
                                {product.name}
                              </h3>
                              
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
                                  {product.category}
                                </span>
                                {product.featured && (
                                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
                                    Featured
                                  </span>
                                )}
                              </div>
                              
                              <p className="text-sm sm:text-base font-semibold text-blue-600 mb-3">
                                {formatPrice(product.price)}
                              </p>
                              
                              {/* Action Buttons */}
                              <div className="flex gap-2">
                                <Link to={`/admin/product/edit/${product.id}`} className="flex-1">
                                  <Button size="sm" variant="outline" className="w-full text-xs h-8">
                                    <Edit size={12} className="mr-1" />
                                    Edit
                                  </Button>
                                </Link>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => deleteProduct(product.id)}
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50 text-xs h-8 px-3"
                                >
                                  <Trash2 size={12} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden lg:block">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead className="w-20">Image</TableHead>
                            <TableHead className="min-w-[200px]">Name</TableHead>
                            <TableHead className="w-24">Category</TableHead>
                            <TableHead className="w-20">Featured</TableHead>
                            <TableHead className="w-32">Price</TableHead>
                            <TableHead className="w-24">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {products.map((product) => (
                            <TableRow key={product.id} className="hover:bg-gray-50">
                              <TableCell className="p-4">
                                <img
                                  src={product.main_image_url || '/images/HP 15_6.jpg'}
                                  alt={product.name}
                                  className="w-14 h-14 object-cover rounded-lg border"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=56&h=56&fit=crop";
                                  }}
                                />
                              </TableCell>
                              <TableCell className="p-4">
                                <div className="font-medium text-gray-900 line-clamp-2 max-w-xs">
                                  {product.name}
                                </div>
                              </TableCell>
                              <TableCell className="p-4">
                                <span className="capitalize text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                                  {product.category}
                                </span>
                              </TableCell>
                              <TableCell className="p-4">
                                {product.featured ? (
                                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
                                    Featured
                                  </span>
                                ) : (
                                  <span className="text-gray-400 text-sm">-</span>
                                )}
                              </TableCell>
                              <TableCell className="p-4">
                                <span className="font-medium text-sm">
                                  {formatPrice(product.price)}
                                </span>
                              </TableCell>
                              <TableCell className="p-4">
                                <div className="flex gap-2">
                                  <Link to={`/admin/product/edit/${product.id}`}>
                                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                                      <Edit size={14} />
                                    </Button>
                                  </Link>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => deleteProduct(product.id)}
                                    className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                                  >
                                    <Trash2 size={14} />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;