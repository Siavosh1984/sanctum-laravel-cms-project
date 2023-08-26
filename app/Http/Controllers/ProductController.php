<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**GET method
     * Display a listing of the resource.(products in our example)
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
    }

    /**POST method 
     * Store a newly created resource in storage.(products in our example)
      *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //due to the type of data can added to our products table we need to validate inputs before adding to the tables
        $request->validate([
            'name' => 'required',
            'slug' => 'required',
            'price' => 'required'
        ]);
        // we add all() to be able to add all data about products
        return Product::create($request->all());
    }

    /**GET method
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(string $id)
    {
        return Product::find($id);
    }

    /**PUT
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        $product->update($request->all());
        return $product;
    }

    /**POST
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //return 1 if it is deleted and 0 if not 
        return Product::destroy($id);
    }

     /**GET
     * Search for a name
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        //second comma in name means equal to
        //without like in looks for exact name, 
        //but I need to search the product even if I write only part of its name, that's why I use 'like'
        //by using % in first and end of $name we say it c'name' searched could be anywhere in $name
        return Product::where('name', 'like', '%'.$name.'%')->get();
    }
}
