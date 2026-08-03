const lenis = new Lenis({
  autoRaf: true,
});

AOS.init({
  once: true,
  duration: 1000
});

const bookingModalHTML = `
<div id="booking-modal" class="fixed inset-0 z-[999] hidden items-center justify-center bg-black/0 transition-colors duration-300 p-4">
    <div id="booking-modal-panel" class="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden scale-90 opacity-0 transition-all duration-300">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h3 class="text-lg font-semibold text-[#16396D]">Check Availability & Book</h3>
            <button id="booking-modal-close" type="button" class="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-[#072b5e] transition-colors duration-200">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
        </div>
        <div class="p-4 md:p-6">
            <iframe src="https://teamup.com/ksnq7eqy3g1hyzr6ti?tz=Calendar%20default&showLogo=0&showSearch=0&showProfileAndInfo=0&disableSidepanel=1&showMenu=0&showViewHeader=1&showAgendaDetails=0&showDateControls=1&showDateRange=1"
                class="w-full h-[600px] rounded-lg border border-gray-200"
                loading="lazy" frameborder="0"></iframe>
        </div>
        <div class="px-6 pb-6 pt-0 text-sm text-gray-500 text-center">
            To confirm your stay, please contact us at
            <a href="mailto:kenhall@iinet.net.au" class="text-[#072b5e] font-medium hover:underline">kenhall@iinet.net.au</a>
        </div>
    </div>
</div>

<style>
#booking-modal.active {
    background-color: rgba(7, 43, 94, 0.6);
}
#booking-modal.active #booking-modal-panel {
    transform: scale(1);
    opacity: 1;
}
</style>
`;

document.body.insertAdjacentHTML('beforeend', bookingModalHTML);

const bookingModal = document.getElementById('booking-modal');
const bookingModalClose = document.getElementById('booking-modal-close');

function openBookingModal() {
  bookingModal.classList.remove('hidden');
  bookingModal.classList.add('flex');
  requestAnimationFrame(() => {
    bookingModal.classList.add('active');
  });
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  bookingModal.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    bookingModal.classList.add('hidden');
    bookingModal.classList.remove('flex');
  }, 300);
}

bookingModalClose.addEventListener('click', closeBookingModal);
bookingModal.addEventListener('click', (e) => {
  if (e.target === bookingModal) closeBookingModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBookingModal();
});