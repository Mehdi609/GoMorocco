<?php

namespace App\Http\Controllers;
use App\Models\News;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    //
    public function index()
    {
        $news = News::all();
        return response()->json($news);
    }

    // Get a single news article with related news
    public function show($id)
    {
        $newsItem = News::find($id);
        $relatedNews = News::where('id', '!=', $id)->limit(5)->get(); // Fetch related news
        
        return response()->json([
            'news' => $newsItem,
            'relatedNews' => $relatedNews,
        ]);
    }
}
