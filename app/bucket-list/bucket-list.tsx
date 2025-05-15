'use client'
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, ImageIcon, CheckCircle } from "lucide-react";
import Image from "next/image";

// TypeScript interfaces for type safety
interface BucketListImage {
  url: string;
  alt: string;
}

interface BucketListItem {
  id: number;
  task: string;
  subtitle?: string;
  completed: boolean;
  completedDate: string | null;
  images: BucketListImage[];
  expanded: boolean;
}

const BucketListPage: React.FC = () => {
  // Static data - all bucket list items defined here
  const initialBucketListItems: BucketListItem[] = [
    {
      id: 1,
      task: "Skydiving",
      subtitle: "Jump from 10,000 feet",
      completed: false,
      completedDate: null,
      images: [
        { url: "/api/placeholder/400/300", alt: "Skydiving example 1" },
        { url: "/api/placeholder/400/300", alt: "Skydiving example 2" }
      ],
      expanded: false
    },
    {
      id: 2,
      task: "Visit Northern Lights",
      subtitle: "Travel to Iceland or Norway",
      completed: true,
      completedDate: "2024-03-15",
      images: [{ url: "/api/placeholder/400/300", alt: "Northern Lights example" }],
      expanded: false
    },
    {
      id: 3,
      task: "Learn to Surf",
      subtitle: "Catch at least one wave",
      completed: false,
      completedDate: null,
      images: [],
      expanded: false
    },
    {
      id: 4,
      task: "Write a Book",
      subtitle: "Fiction novel about time travel",
      completed: false,
      completedDate: null,
      images: [],
      expanded: false
    },
    {
      id: 5,
      task: "Run a Marathon",
      subtitle: "Complete 26.2 miles",
      completed: true,
      completedDate: "2023-11-07",
      images: [
        { url: "/api/placeholder/400/300", alt: "Marathon finish line" },
        { url: "/api/placeholder/400/300", alt: "Training photo" }
      ],
      expanded: false
    },
    {
      id: 6,
      task: "Learn a New Language",
      subtitle: "Become conversational in Japanese",
      completed: false,
      completedDate: null,
      images: [],
      expanded: false
    },
    {
      id: 7,
      task: "Visit the Grand Canyon",
      subtitle: "Hike to the bottom and back",
      completed: true,
      completedDate: "2022-06-22",
      images: [
        { url: "/api/placeholder/400/300", alt: "Grand Canyon vista" }
      ],
      expanded: false
    }
  ];

  // State for UI only - items themselves cannot be modified
  const [bucketListItems, setBucketListItems] = useState<BucketListItem[]>(initialBucketListItems);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterOption, setFilterOption] = useState<"all" | "completed" | "pending">("all");

  // Toggle expanded state of an item (view-only functionality)
  const toggleExpandItem = (id: number): void => {
    setBucketListItems(
      bucketListItems.map(item => 
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  // Filter bucket list items based on search and filter options
  const filteredItems: BucketListItem[] = bucketListItems.filter(item => {
    // Filter by search term
    const matchesSearch = item.task.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (item.subtitle && item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Filter by completion status
    if (filterOption === "completed") return matchesSearch && item.completed;
    if (filterOption === "pending") return matchesSearch && !item.completed;
    return matchesSearch; // "all" option
  });

  // Calculate statistics
  const totalItems = bucketListItems.length;
  const completedItems = bucketListItems.filter(item => item.completed).length;
  const pendingItems = totalItems - completedItems;
  const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <main className="min-h-screen bg-black">
      {/* Hero banner with full-bleed background */}
      <div className="relative">
        {/* Background container with aspect ratio */}
        <div className="h-[70vh] min-h-[500px] max-h-[800px] w-full relative overflow-hidden">
          {/* Background image */}
          <Image 
            src="/bucket-list-bg.jpg" 
            alt="Cosmic background"
            className="object-cover object-center pointer-events-none select-none"
            priority
            fill
          />
          
          {/* Overlay gradients for better text contrast and visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
          
          {/* Colored accents to match reference */}
          <div className="absolute inset-0 bg-amber-800/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
          
          {/* Content container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="relative z-10 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl max-w-2xl mx-auto">
              <p className="mb-3 text-xs font-normal tracking-widest text-gray-400 uppercase md:text-sm">
                THE BUCKET LIST
              </p>
              <span className="md:text-6xl text-white">
                The Things I&apos;ll Do
                <br />
                <span className="tangerine-bold">
                  <AnimatedGradientText>Before I&apos;m Done</AnimatedGradientText>
                </span>
              </span>
            </h2>
          </div>
          
          {/* Bottom fade to content area */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      {/* Controls section */}
      <div className="relative mx-auto max-w-3xl px-4 -mt-16 z-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between mb-6">
          {/* Search box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search bucket list..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 border border-gray-700/50 bg-gray-900/60 backdrop-blur-md focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          {/* Filter options */}
          <div className="flex items-center gap-4">
            <select
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value as "all" | "completed" | "pending")}
              className="rounded-lg bg-gray-900/60 backdrop-blur-md px-4 py-2 text-gray-200 border border-gray-700/50 focus:border-gray-600 focus:outline-none"
            >
              <option value="all">All Items</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl bg-gray-800/30 backdrop-blur-md p-4 border border-gray-700/30 text-center">
            <p className="text-gray-400 text-sm">Total Items</p>
            <p className="text-2xl font-bold text-gray-200">{totalItems}</p>
          </div>
          <div className="rounded-xl bg-gray-800/30 backdrop-blur-md p-4 border border-gray-700/30 text-center">
            <p className="text-gray-400 text-sm">Completed</p>
            <p className="text-2xl font-bold text-gray-300">{completedItems}</p>
          </div>
          <div className="rounded-xl bg-gray-800/30 backdrop-blur-md p-4 border border-gray-700/30 text-center">
            <p className="text-gray-400 text-sm">Pending</p>
            <p className="text-2xl font-bold text-gray-300">{pendingItems}</p>
          </div>
          <div className="rounded-xl bg-gray-800/30 backdrop-blur-md p-4 border border-gray-700/30 text-center">
            <p className="text-gray-400 text-sm">Progress</p>
            <p className="text-2xl font-bold text-gray-200">{progressPercentage}%</p>
          </div>
        </div>

        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-xl text-gray-400">No bucket list items found</p>
            <p className="text-gray-500">Try changing your search criteria</p>
          </div>
        )}

        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className={`mb-4 overflow-hidden rounded-xl border ${item.completed ? 'border-gray-600/50 bg-gray-800/30' : 'border-gray-700/30 bg-gray-800/20'} backdrop-blur-md transition-all duration-300 hover:bg-gray-800/40`}
          >
            <div 
              className="flex items-start gap-4 p-5 cursor-pointer"
              onClick={() => toggleExpandItem(item.id)}
            >
              {/* Status indicator - read only */}
              <div className={`mt-1 flex items-center justify-center size-6 shrink-0 rounded-full ${
                item.completed 
                  ? 'bg-gray-600 text-gray-200' 
                  : 'border border-gray-600 text-gray-600'
              }`}>
                {item.completed && <CheckCircle size={16} />}
              </div>
              
              <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center">
                <div className="flex flex-col">
                  <h2 className={`text-lg md:text-xl ${item.completed ? 'text-gray-300' : 'text-gray-200'}`}>
                    {item.task}
                  </h2>
                  {item.subtitle && (
                    <p className="text-sm text-gray-400">{item.subtitle}</p>
                  )}
                </div>
                
                {/* Right side with completion date and/or images preview */}
                <div className="flex items-center gap-3">
                  {item.completed && item.completedDate && (
                    <div className="flex items-center gap-1 rounded-full bg-gray-700/50 px-3 py-1 text-xs text-gray-300">
                      <Calendar size={12} />
                      <span>{new Date(item.completedDate).toISOString().split('T')[0]}</span>
                    </div>
                  )}
                  
                  {item.images.length > 0 && (
                    <div className="flex items-center gap-1 text-gray-400">
                      <ImageIcon size={14} />
                      <span className="text-xs">{item.images.length}</span>
                    </div>
                  )}
                  
                  {item.expanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                </div>
              </div>
            </div>
            
            {/* Expanded details */}
            {item.expanded && (
              <div className="border-t border-gray-700/30 p-5 animate-fade-in">
                {item.images.length > 0 ? (
                  <div>
                    <h3 className="mb-3 text-sm font-medium text-gray-400">Images</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {item.images.map((img, index) => (
                        <div key={index} className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                          <img 
                            src={img.url} 
                            alt={img.alt}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm italic">No images available</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default BucketListPage;