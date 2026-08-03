const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<nav class="bg-white shadow-sm w-full z-50 sticky top-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 md:h-24">
            <div class="flex-shrink-0">
                <a href="/index.html" class="text-slate-900 font-bold tracking-wider text-sm md:text-base">
                    <img src="./docs/assets/logo.png" class="h-13" alt="">
                </a>
            </div>
            <div class="hidden lg:flex items-center space-x-8">
                <a href="/index.html" data-page="index" class="nav-link relative text-[#072b5e] hover:text-[#072b5e]/80 transition-colors duration-300 text-sm uppercase font-semibold pb-1">Home</a>
                <a href="/apartment.html" data-page="apartment" class="nav-link relative text-[#072b5e] hover:text-[#072b5e]/80 transition-colors duration-300 text-sm uppercase font-semibold pb-1">The Apartment</a>
                <a href="/amenities.html" data-page="amenities" class="nav-link relative text-[#072b5e] hover:text-[#072b5e]/80 transition-colors duration-300 text-sm uppercase font-semibold pb-1">Amenities</a>
                <a href="/resort.html" data-page="resort" class="nav-link relative text-[#072b5e] hover:text-[#072b5e]/80 transition-colors duration-300 text-sm uppercase font-semibold pb-1">The Resort</a>
                <a href="/gallery.html" data-page="gallery" class="nav-link relative text-[#072b5e] hover:text-[#072b5e]/80 transition-colors duration-300 text-sm uppercase font-semibold pb-1">Gallery</a>
                <a href="/location.html" data-page="location" class="nav-link relative text-[#072b5e] hover:text-[#072b5e]/80 transition-colors duration-300 text-sm uppercase font-semibold pb-1">Location</a>
            </div>
            <div class="hidden lg:block">
                <a href="#" class="inline-block bg-[#072b5e] text-white px-8 py-3 rounded font-medium uppercase hover:bg-[#072b5e]/85 transition-all duration-300">
                    Book Now
                </a>
            </div>
            <div class="lg:hidden">
                <button id="menu-toggle" class="text-slate-800 hover:text-blue-600 focus:outline-none text-2xl transition-colors duration-300">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </div>
    <div id="mobile-menu" class="lg:hidden overflow-hidden max-h-0 transition-all duration-500 ease-in-out bg-white">
        <div class="px-4 pt-2 pb-4 space-y-1">
            <a href="/index.html" data-page="index" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-slate-600 transition-colors duration-300 uppercase tracking-wider text-sm">Home</a>
            <a href="/apartment.html" data-page="apartment" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-slate-600 transition-colors duration-300 uppercase tracking-wider text-sm">The Apartment</a>
            <a href="/amenities.html" data-page="amenities" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-slate-600 transition-colors duration-300 uppercase tracking-wider text-sm">Amenities</a>
            <a href="/resort.html" data-page="resort" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-slate-600 transition-colors duration-300 uppercase tracking-wider text-sm">The Resort</a>
            <a href="/gallery.html" data-page="gallery" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-slate-600 transition-colors duration-300 uppercase tracking-wider text-sm">Gallery</a>
            <a href="/location.html" data-page="location" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-slate-600 transition-colors duration-300 uppercase tracking-wider text-sm">Location</a>
            <a href="#" class="block w-full text-center mt-4 bg-[#072b5e] text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#072b5e]/85 transition-all duration-300">Book Now</a>
        </div>
    </div>
</nav>

<style>
.nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #ec7b3b;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.nav-link:hover::after {
    transform: scaleX(1);
}

.nav-link.active-link::after {
    transform: scaleX(1);
}

.mobile-nav-link {
    border-left: 4px solid transparent;
}

.mobile-nav-link:hover {
    color: #072b5e;
    background-color: rgba(7, 43, 94, 0.08);
    border-left-color: rgba(7, 43, 94, 0.4);
}

.mobile-nav-link.active-link {
    color: #072b5e;
    background-color: rgba(7, 43, 94, 0.08);
    border-left-color: #072b5e;
}
</style>
`;

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('max-h-0')) {
        mobileMenu.classList.remove('max-h-0');
        mobileMenu.classList.add('max-h-96');
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mobileMenu.classList.remove('max-h-96');
        mobileMenu.classList.add('max-h-0');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

const desktopLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

function setActiveByPage(page) {
    desktopLinks.forEach(l => l.classList.toggle('active-link', l.dataset.page === page));
    mobileLinks.forEach(l => l.classList.toggle('active-link', l.dataset.page === page));
}

function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
    return file === '' ? 'index' : file;
}

setActiveByPage(getCurrentPage());