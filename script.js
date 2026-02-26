// ===================== INITIALIZATION =====================
document.addEventListener('DOMContentLoaded', function() {
    initLoader();
    initCursor();
    initNavbar();
    initTyped();
    initAOS();
    initStatsCounter();
    initFilter();
    initSkillsSlider();
    initSmoothScroll();
    initParallax();
    initCardEffects();
});

// ===================== LOADER =====================
function initLoader() {
    const loader = document.querySelector('.loader-wrapper');
    if (!loader) return;
    
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
}

// ===================== CUSTOM CURSOR =====================
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = 1;
        follower.style.opacity = 1;
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = 0;
        follower.style.opacity = 0;
    });
    
    const links = document.querySelectorAll('a, button, .work-item');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(1.5)';
            follower.style.borderColor = 'var(--secondary-color)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
            follower.style.borderColor = 'var(--primary-color)';
        });
    });
}

// ===================== NAVBAR =====================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navbar || !hamburger || !navMenu) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===================== TYPED TEXT =====================
function initTyped() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const manualCursor = document.querySelector('.cursor-type');
    if (manualCursor) {
        manualCursor.style.display = 'none';
    }
    
    const options = {
        strings: ['Desainer Kreatif', 'Pengembang Web', 'Problem Solver', 'Julyant Marco M.'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    };
    
    new Typed('.typed-text', options);
}

// ===================== AOS ANIMATION =====================
function initAOS() {
    if (typeof AOS === 'undefined') return;
    
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// ===================== STATS COUNTER =====================
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;
    
    let counted = false;
    
    function countUp() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let count = 0;
            const increment = target / 50;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    stat.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target;
                }
            };
            
            updateCount();
        });
    }
    
    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.about-stats');
        if (!statsSection) return;
        
        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100 && !counted) {
            counted = true;
            countUp();
        }
    });
}

// ===================== FILTER SKILLS =====================
// Simpan urutan awal item
let originalOrder = [];

function initFilter() {
    const filterBtns = document.querySelectorAll('.skills-filters .filter-btn');
    const items = document.querySelectorAll('.skill-item');
    
    if (!filterBtns.length || !items.length) return;
    
    // Simpan urutan awal
    originalOrder = Array.from(items);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            if (window.innerWidth <= 768) {
                filterMobile(filter);
            } else {
                filterDesktop(filter);
            }
        });
    });
}

// FILTER UNTUK DESKTOP - ITEM SESUAI DI DEPAN, YANG TIDAK SESUAI DI BELAKANG
function filterDesktop(filter) {
    const grid = document.querySelector('.skills-grid');
    const items = document.querySelectorAll('.skill-item');
    
    if (!grid) return;
    
    // Reset semua class dan style
    items.forEach(item => {
        item.classList.remove('filtered-out', 'skill-matched');
        item.style.opacity = '';
        item.style.transform = '';
        item.style.pointerEvents = '';
        item.style.filter = '';
    });
    
    if (filter === 'all') {
        // Kembalikan ke urutan awal tanpa reload
        originalOrder.forEach(item => {
            grid.appendChild(item);
        });
        
        // Pastikan semua item normal
        items.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.pointerEvents = 'auto';
            item.style.filter = 'none';
        });
        return;
    }
    
    // Pisahkan item yang sesuai dan tidak sesuai
    const matched = [];
    const unmatched = [];
    
    items.forEach(item => {
        if (item.classList.contains(filter)) {
            matched.push(item);
        } else {
            unmatched.push(item);
        }
    });
    
    // Urutkan ulang DOM: item yang sesuai di awal, yang tidak sesuai di akhir
    matched.forEach(item => grid.appendChild(item));
    unmatched.forEach(item => grid.appendChild(item));
    
    // Terapkan styling: matched items normal, unmatched items redup
    matched.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
        item.style.pointerEvents = 'auto';
        item.style.filter = 'none';
        item.classList.add('skill-matched');
    });
    
    unmatched.forEach(item => {
        item.style.opacity = '0.4';
        item.style.transform = 'scale(0.95)';
        item.style.pointerEvents = 'none';
        item.style.filter = 'grayscale(0.8)';
        item.classList.add('filtered-out');
    });
}

// FILTER UNTUK MOBILE - ITEM SESUAI DI DEPAN, YANG TIDAK SESUAI DI BELAKANG
function filterMobile(filter) {
    const slider = document.querySelector('.skills-slider');
    const items = document.querySelectorAll('.skill-item');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (!slider) {
        console.log('Waiting for slider to be created...');
        setTimeout(() => filterMobile(filter), 300);
        return;
    }
    
    // Reset semua class dan style
    items.forEach(item => {
        item.classList.remove('filtered-out');
        item.style.opacity = '';
        item.style.transform = '';
        item.style.pointerEvents = '';
        item.style.filter = '';
    });
    
    if (filter === 'all') {
        // Kembalikan ke urutan awal
        items.forEach((item, index) => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.pointerEvents = 'auto';
            item.style.filter = 'none';
            item.classList.remove('filtered-out');
        });
        
        // Update dots
        if (dots.length) {
            dots.forEach(dot => {
                dot.style.display = 'inline-block';
                dot.style.opacity = '1';
                dot.style.pointerEvents = 'auto';
            });
        }
        
        // Update active dot
        updateMobileDots(slider, items, dots);
        return;
    }
    
    // Pisahkan item yang sesuai dan tidak sesuai
    const matched = [];
    const unmatched = [];
    
    items.forEach((item, index) => {
        if (item.classList.contains(filter)) {
            matched.push({ item, index });
        } else {
            unmatched.push({ item, index });
        }
    });
    
    // Urutkan ulang DOM di slider: item yang sesuai di awal, yang tidak sesuai di akhir
    matched.forEach(({ item }) => {
        slider.appendChild(item);
    });
    
    unmatched.forEach(({ item }) => {
        slider.appendChild(item);
    });
    
    // Terapkan styling
    matched.forEach(({ item }) => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
        item.style.pointerEvents = 'auto';
        item.style.filter = 'none';
        item.classList.remove('filtered-out');
    });
    
    unmatched.forEach(({ item }) => {
        item.style.opacity = '0.2';
        item.style.transform = 'scale(0.8)';
        item.style.pointerEvents = 'none';
        item.style.filter = 'grayscale(1)';
        item.classList.add('filtered-out');
    });
    
    // Update slider indicators
    if (dots.length) {
        dots.forEach((dot, index) => {
            const item = items[index];
            if (item && (filter === 'all' || !item.classList.contains('filtered-out'))) {
                dot.style.display = 'inline-block';
                dot.style.opacity = '1';
                dot.style.pointerEvents = 'auto';
            } else {
                dot.style.display = 'none';
                dot.style.opacity = '0';
                dot.style.pointerEvents = 'none';
            }
        });
    }
    
    // Scroll ke item pertama yang visible (matched item pertama)
    if (matched.length > 0) {
        const firstMatchedIndex = matched[0].index;
        const firstItem = items[firstMatchedIndex];
        const itemWidth = firstItem.offsetWidth + 15;
        setTimeout(() => {
            slider.scrollTo({
                left: itemWidth * 0, // Scroll ke awal slider karena matched items sudah di depan
                behavior: 'smooth'
            });
        }, 100);
    }
    
    // Update active dot
    updateMobileDots(slider, items, dots);
}

// Helper untuk update active dot di mobile
function updateMobileDots(slider, items, dots) {
    if (!slider) return;
    
    const updateDots = () => {
        const scrollLeft = slider.scrollLeft;
        const visible = [];
        
        items.forEach((item, index) => {
            if (!item.classList.contains('filtered-out')) {
                visible.push(index);
            }
        });
        
        if (!visible.length) return;
        
        const firstItem = items[visible[0]];
        const itemWidth = firstItem.offsetWidth + 15;
        
        let activeIndex = visible[0];
        for (let i = 0; i < visible.length; i++) {
            const idx = visible[i];
            const left = idx * itemWidth;
            if (scrollLeft >= left - itemWidth / 2) {
                activeIndex = idx;
            }
        }
        
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === activeIndex && !items[index].classList.contains('filtered-out')) {
                dot.classList.add('active');
            }
        });
    };
    
    // Hapus event listener lama
    const newSlider = slider.cloneNode(true);
    slider.parentNode.replaceChild(newSlider, slider);
    
    // Tambah event listener baru
    newSlider.addEventListener('scroll', updateDots);
    
    // Trigger sekali
    setTimeout(updateDots, 100);
}

// ===================== SKILLS SLIDER (MOBILE) =====================
function initSkillsSlider() {
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;
    
    const isMobile = window.innerWidth <= 768;
    const skillsGrid = skillsSection.querySelector('.skills-grid');
    const skillsItems = skillsSection.querySelectorAll('.skill-item');
    const existingSlider = skillsSection.querySelector('.skills-slider-container');
    
    if (isMobile) {
        console.log('Mobile mode: creating slider');
        
        // Sembunyikan grid
        if (skillsGrid) {
            skillsGrid.style.display = 'none';
        }
        
        // Hapus slider lama jika ada
        if (existingSlider) {
            existingSlider.remove();
        }
        
        // Buat slider baru
        createMobileSlider(skillsSection, skillsItems);
        
        // Terapkan filter aktif setelah slider dibuat
        setTimeout(() => {
            const activeFilter = document.querySelector('.skills-filters .filter-btn.active');
            if (activeFilter) {
                const filter = activeFilter.getAttribute('data-filter');
                filterMobile(filter);
            } else {
                // Default ke 'all'
                filterMobile('all');
            }
        }, 300);
        
    } else {
        // Mode desktop
        console.log('Desktop mode: showing grid');
        
        // Tampilkan grid
        if (skillsGrid) {
            skillsGrid.style.display = 'flex';
            skillsGrid.style.flexWrap = 'wrap';
            skillsGrid.style.gap = '30px';
        }
        
        // Hapus slider jika ada
        if (existingSlider) {
            existingSlider.remove();
        }
        
        // Kembalikan items ke urutan awal
        if (originalOrder.length > 0) {
            originalOrder.forEach(item => {
                if (skillsGrid) skillsGrid.appendChild(item);
            });
        }
        
        // Tampilkan semua item dengan style normal
        skillsItems.forEach(item => {
            item.style.display = 'block';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.pointerEvents = 'auto';
            item.style.filter = 'none';
            item.classList.remove('filtered-out', 'skill-matched');
        });
        
        // Terapkan filter aktif
        const activeFilter = document.querySelector('.skills-filters .filter-btn.active');
        if (activeFilter) {
            const filter = activeFilter.getAttribute('data-filter');
            if (filter !== 'all') {
                setTimeout(() => {
                    filterDesktop(filter);
                }, 100);
            }
        }
    }
}

// Fungsi untuk membuat mobile slider
function createMobileSlider(skillsSection, skillsItems) {
    // Buat container slider
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'skills-slider-container';
    sliderContainer.style.display = 'block';
    
    const slider = document.createElement('div');
    slider.className = 'skills-slider';
    
    // Pindahkan items asli ke slider (bukan clone)
    skillsItems.forEach(item => {
        item.removeAttribute('data-aos');
        item.removeAttribute('data-aos-delay');
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
        slider.appendChild(item);
    });
    
    sliderContainer.appendChild(slider);
    
    // Buat indicators
    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';
    
    for (let i = 0; i < skillsItems.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot';
        dot.setAttribute('data-index', i);
        if (i === 0) dot.classList.add('active');
        
        // Tambahkan event click ke dot
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const slider = document.querySelector('.skills-slider');
            const items = document.querySelectorAll('.skill-item');
            const firstItem = items[0];
            
            if (slider && firstItem) {
                const itemWidth = firstItem.offsetWidth + 15;
                slider.scrollTo({
                    left: itemWidth * index,
                    behavior: 'smooth'
                });
            }
        });
        
        indicators.appendChild(dot);
    }
    
    sliderContainer.appendChild(indicators);
    
    // Tambahkan ke DOM setelah skills-filters
    const skillsFilters = skillsSection.querySelector('.skills-filters');
    if (skillsFilters) {
        skillsFilters.insertAdjacentElement('afterend', sliderContainer);
    } else {
        skillsSection.querySelector('.container').appendChild(sliderContainer);
    }
    
    console.log('Slider created with', skillsItems.length, 'items');
}

// ===================== SMOOTH SCROLL =====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================== PARALLAX MOUSE MOVE =====================
function initParallax() {
    const shapes = document.querySelectorAll('.floating-shape');
    if (!shapes.length) return;
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        shapes.forEach(shape => {
            const speed = shape.classList.contains('shape-1') ? 20 : 30;
            const x = mouseX * speed;
            const y = mouseY * speed;
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ===================== WINDOW RESIZE HANDLER =====================
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        initSkillsSlider();
        
        const activeFilter = document.querySelector('.skills-filters .filter-btn.active');
        if (activeFilter) {
            const filter = activeFilter.getAttribute('data-filter');
            
            setTimeout(() => {
                if (window.innerWidth <= 768) {
                    filterMobile(filter);
                } else {
                    if (filter === 'all') {
                        // Kembalikan ke urutan awal
                        const grid = document.querySelector('.skills-grid');
                        if (grid && originalOrder.length > 0) {
                            originalOrder.forEach(item => {
                                grid.appendChild(item);
                            });
                            
                            const items = document.querySelectorAll('.skill-item');
                            items.forEach(item => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                                item.style.pointerEvents = 'auto';
                                item.style.filter = 'none';
                                item.classList.remove('filtered-out', 'skill-matched');
                            });
                        }
                    } else {
                        filterDesktop(filter);
                    }
                }
            }, 300);
        }
    }, 250);
});

function initCardEffects() {
    const cards = document.querySelectorAll('.about-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}
