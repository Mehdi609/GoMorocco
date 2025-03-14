<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\News;
use Carbon\Carbon;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        News::insert([
            [
                'title' => 'Morocco Prepares for FIFA World Cup 2030!',
                'description' => 'Exciting times ahead as Morocco gears up to host the FIFA World Cup in 2030. Get ready for an unforgettable experience!',
                'image' => 'news1.jpg',
                'published_at' => Carbon::now()->subDays(2),
            ],
            [
                'title' => 'Top 10 Must-Visit Places in Morocco',
                'description' => 'From Marrakech to Chefchaouen, here are the best destinations to explore during your trip to Morocco.',
                'image' => 'news2.jpg',
                'published_at' => Carbon::now()->subDays(5),
            ],
        ]);
    }
}
