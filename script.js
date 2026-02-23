let 

let total = document.getElementById('total');
let rejectedCount = document.getElementById('rejectedCount');
let interviewCount = document.getElementById('interviewCount');

const allCardsSection = document.getElementById('allCards');

function calculateCount(){
    total.innerText = allCardsSection.children.length
}
calculateCount()




















// const total = document.getElementById('total');
// const rejectedCountDisplay = document.getElementById('rejectedCount');
// const interviewCountDisplay = document.getElementById('interviewCount');
// const allCardsSection = document.getElementById('allCards');

// let interviewCount = 0;
// let rejectedCount = 0;

// // এই ফাংশনটি দিয়ে আমরা সব সংখ্যা আপডেট করবো
// function updateStats() {
//     total.innerText = allCardsSection.children.length; // কার্ড সংখ্যা গুনে টোটাল আপডেট করবে
//     interviewCountDisplay.innerText = interviewCount;
//     rejectedCountDisplay.innerText = rejectedCount;
// }

// // কার্ডের ভিতরের যেকোনো বাটনে ক্লিক করলে এই ইভেন্ট কাজ করবে
// allCardsSection.addEventListener('click', function(e) {
//     const card = e.target.closest('div[class*="card-"]'); // যে কার্ডে ক্লিক করা হয়েছে সেটি খুঁজে বের করবে
    
//     // ১. ডিলিট বাটন (Trash Can) ক্লিক করলে
//     if (e.target.classList.contains('fa-trash-can')) {
//         card.remove(); // কার্ডটি মুছে দিবে
//         updateStats(); // টোটাল সংখ্যা আপডেট করবে
//     }

//     // ২. Interview বাটন ক্লিক করলে
//     if (e.target.innerText.toLowerCase() === 'interview') {
//         interviewCount++;
//         // স্ট্যাটাস বাটনটি আপডেট করে দিবে (Not Applied থেকে Interviewing)
//         const statusBtn = card.querySelector('button:nth-of-type(1)');
//         statusBtn.innerText = "Interview";
//         statusBtn.className = "bg-green-100 text-green-700 w-[113px] rounded";
//         updateStats();
//     }

//     // ৩. Rejected বাটন ক্লিক করলে
//     if (e.target.innerText.toLowerCase() === 'rejected') {
//         rejectedCount++;
//         const statusBtn = card.querySelector('button:nth-of-type(1)');
//         statusBtn.innerText = "Rejected";
//         statusBtn.className = "bg-red-100 text-red-700 w-[113px] rounded";
//         updateStats();
//     }
// });

// // শুরুতে একবার রান করার জন্য
// updateStats();