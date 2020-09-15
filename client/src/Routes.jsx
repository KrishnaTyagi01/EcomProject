import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home'
import Product from './core/Product'
import Shop from './core/Shop'
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import Dashboard from './user/userDashboard';
import Profile from './user/Profile';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import UpdateProduct from './admin/UpdateProduct'
import Orders from './admin/Orders'
import ManageProducts from './admin/ManageProducts'
import Cart from './core/Cart'
const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>
                <Route exact path="/signin"><Signin /></Route>
                <Route exact path="/signup"><Signup /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/shop"><Shop /></Route>
                <PrivateRoute path = '/user/dashboard' exact component={Dashboard}/>
                <PrivateRoute path = '/profile/:userId' exact component={Profile}/>
                <PrivateRoute path = '/admin/products' exact component={ManageProducts}/>
                <AdminRoute path = '/admin/dashboard' exact component={AdminDashboard}/>
                <AdminRoute path = '/create/category' exact component={AddCategory}/>
                <AdminRoute path = '/create/product' exact component={AddProduct}/>
                <AdminRoute path = '/product/:productId' exact component={Product}/>
                <AdminRoute path = '/admin/orders' exact component={Orders}/>
                <AdminRoute path = '/admin/product/update/:productId' exact component={UpdateProduct}/>
                <Route exact path="/cart"><Cart /></Route>
            </Switch>
        </BrowserRouter>
    )
} 

export default Routes;