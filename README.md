1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling? And how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?


Answer: 1
getElementById : কোনো নির্দিষ্ট Class নাম দিয়ে সব এলিমেন্টকে খুঁজে বের করে।
example:document.getElementById('id name');

getElementsByClassName:কোনো নির্দিষ্ট Class নাম দিয়ে সব এলিমেন্টকে খুঁজে বের করে।
example;document.getElementsByClassName('class name');

querySelector: এটি শর্তের সাথে মেলা প্রথম এলিমেন্টটিকে ধরে করে।

querySelectorAll: এটি শর্তের সাথে মেলা সবগুলো এলিমেন্টকে একটি NodeList হিসেবে ধরে নেয় ।

Answer: 2
Document Object model (DOM) এ একটি নতুন elemnt  যোগ করার জন্য প্রথমে 
এলিমেন্ট তৈরি করতে হবে(createElement), তারপর কন্টেন্ট যোগ করতে হবে

Answer : 3
(Event Bubbling) হলো জাভাস্ক্রিপ্ট ইভেন্ট প্রপাগেশনের একটি বিশেষ নিয়ম। কোনো এলিমেন্টে (যেমন একটি বাটন) ক্লিক করলে , তখন সেই ইভেন্টটি শুধু ওই বাটনেই সীমাবদ্ধ থাকে না; এটি  তার প্যারেন্ট এলিমেন্টগুলোকে একে একে কাজ করতে থাকে।

Answer : 5
preventDefault(): একটি লিঙ্কে ক্লিক করলে সেটি অন্য পেজে নিয়ে যায়, অথবা একটি সাবমিট বাটনে ক্লিক করলে পেজ রিলোড হয়। preventDefault() ব্যবহার করলে ব্রাউজারের এই স্বাভাবিক কাজ বা ডিফল্ট বিহেভিয়ার বন্ধ হয়ে যায়।

