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
    return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
      <div>Loading...</div>
    </div>;
  }

  if (!admin) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      <div className="pt-20 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {admin.username}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <Link to="/admin/product/new" className="w-full sm:w-auto">
                <Button className="flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Plus size={20} />
                  Add Product
                </Button>
              </Link>
              <Button variant="outline" onClick={logout} className="flex items-center justify-center gap-2 w-full sm:w-auto">
                <LogOut size={20} />
                Logout
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Products</CardTitle>
            </CardHeader>
            <CardContent className="p-0 md:p-6">
              {loadingProducts ? (
                <div className="p-6 text-center">Loading products...</div>
              ) : (
                <div className="overflow-x-auto">
                  {/* Mobile Card View */}
                  <div className="block md:hidden space-y-4 p-4">
                    {products.map((product) => (
                      <div key={product.id} className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <img
                            src={product.main_image_url || '/images/HP 15_6.jpg'}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                              {product.featured && (
                                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-sm font-medium text-blue-600 mt-1">{product.price}</p>
                            <div className="flex gap-2 mt-3">
                              <Link to={`/admin/product/edit/${product.id}`} className="flex-1">
                                <Button size="sm" variant="outline" className="w-full text-xs">
                                  <Edit size={14} className="mr-1" />
                                  Edit
                                </Button>
                              </Link>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => deleteProduct(product.id)}
                                className="text-red-600 hover:text-red-700 text-xs"
                              >
                                <Trash2 size={14} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden md:block">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Image</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Featured</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {products.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell>
                              <img
                                src={product.main_image_url || '/images/HP 15_6.jpg'}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                            </TableCell>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell className="capitalize">{product.category}</TableCell>
                            <TableCell>
                              {product.featured ? (
                                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                                  Featured
                                </span>
                              ) : (
                                <span className="text-gray-400">-</span>
                              )}
                            </TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Link to={`/admin/product/edit/${product.id}`}>
                                  <Button size="sm" variant="outline">
                                    <Edit size={16} />
                                  </Button>
                                </Link>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => deleteProduct(product.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 size={16} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
