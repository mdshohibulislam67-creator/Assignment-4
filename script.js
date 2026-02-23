
let rejectedList = [];
let interviewList = [];

let total = document.getElementById('total');
let rejectedCount = document.getElementById('rejectedCount');
let interviewCount = document.getElementById('interviewCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');

const allCardsSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

function toggleStyle(id) {
        allFilterBtn.classList.add('bg-[#3B82F6]','text-white')
    rejectedFilterBtn.classList.add('bg-[#3B82F6]','text-black')
    interviewFilterBtn.classList.add('bg-[#3B82F6]','text-black')

        
    allFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-[#ffffff]','text-white')
    selected.classList.add('bg-[#3B82F6]','white')

    if (id === 'all-filter-btn') filterJobs('all');
    if (id === 'interview-filter-btn') filterJobs('interview');
    if (id === 'rejected-filter-btn') filterJobs('rejected');
}

function calculateCount() {
    total.innerText = allCardsSection.children.length;
    rejectedCount.innerText = rejectedList.length;
    interviewCount.innerText = interviewList.length;
}
calculateCount();

function filterJobs(type) {
    const allCards = document.querySelectorAll('#allCards > div');
    let visibleCount = 0;

    allCards.forEach(card => {
        const cardId = card.classList[0];

        if (type === 'all') {
            card.style.display = 'flex';
            visibleCount++;
        } else if (type === 'interview') {
            const isInterview = interviewList.includes(cardId);
            card.style.display = isInterview ? 'flex' : 'none';
            if (isInterview) visibleCount++;
        } else if (type === 'rejected') {
            const isRejected = rejectedList.includes(cardId);
            card.style.display = isRejected ? 'flex' : 'none';
            if (isRejected) visibleCount++;
        }
    });

    document.querySelector('main p').innerText = `${visibleCount} Jobs`;
}



mainContainer.addEventListener('click', (e) => {
    const target = e.target;
    const card = target.closest('div[class^="card-"]'); 
    
    if (!card) return;

    const cardId = card.classList[0];
    const statusBtn = card.querySelector('button:not(.border)');

    if (target.innerText.toLowerCase() === 'interview' && !target.id.includes('filter')) {
        if (!interviewList.includes(cardId)) {
            interviewList.push(cardId);
            rejectedList = rejectedList.filter(id => id !== cardId);
            
            statusBtn.innerText = "Interviewing";
            statusBtn.className = "bg-green-100 text-green-600 w-[113px] font-bold py-1 px-2 rounded";
        }
    }

    if (target.innerText.toLowerCase() === 'rejected' && !target.id.includes('filter')) {
        if (!rejectedList.includes(cardId)) {
            rejectedList.push(cardId);
            interviewList = interviewList.filter(id => id !== cardId);
            
            statusBtn.innerText = "Rejected";
            statusBtn.className = "bg-red-100 text-red-600 w-[113px] font-bold py-1 px-2 rounded";
        }
    }

    if (target.classList.contains('fa-trash-can')) {
        interviewList = interviewList.filter(id => id !== cardId);
        rejectedList = rejectedList.filter(id => id !== cardId);
        card.remove();
    }

    calculateCount();
});