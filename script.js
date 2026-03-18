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
    initKaryaModal();
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
    
    // Track mouse position even when over modal
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
    
    // Make cursor work on all elements including modal
    const interactiveElements = () => document.querySelectorAll('a, button, .work-item, .modal-close, .modal-slider-arrow, .modal-slider-dot, .modal-link-item, .back-to-top');
    
    const addHoverEffects = () => {
        interactiveElements().forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                follower.style.transform = 'scale(1.5)';
                follower.style.borderColor = 'var(--secondary-color)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                follower.style.transform = 'scale(1)';
                follower.style.borderColor = 'var(--primary-color)';
            });
        });
    };
    
    // Initial add
    addHoverEffects();
    
    // Re-add when modal opens (for new elements)
    const observer = new MutationObserver(() => {
        addHoverEffects();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
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
        strings: ['Desainer Kreatif', 'Julyant Marco M.', 'Pengembang Web', 'Problem Solver'],
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
        
        // Update dots - semua dot muncul
        if (dots.length) {
            dots.forEach(dot => {
                dot.style.display = 'inline-block';
                dot.style.opacity = '1';
                dot.style.pointerEvents = 'auto';
            });
        }
        
        // Scroll ke awal
        setTimeout(() => {
            slider.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
            
            // Update active dot
            setTimeout(() => {
                updateMobileDots(slider, items, dots);
            }, 300);
        }, 100);
        
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
    
    // Terapkan styling - item matched tampil normal (BESAR), unmatched mengecil
    matched.forEach(({ item }) => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)'; // UKURAN NORMAL
        item.style.pointerEvents = 'auto';
        item.style.filter = 'none';
        item.classList.remove('filtered-out');
    });
    
    unmatched.forEach(({ item }) => {
        item.style.opacity = '0.2'; // REDUP
        item.style.transform = 'scale(0.8)'; // KECIL
        item.style.pointerEvents = 'none';
        item.style.filter = 'grayscale(1)';
        item.classList.add('filtered-out');
    });
    
    // Update dots - HANYA dot untuk item MATCHED yang muncul
    if (dots.length) {
        dots.forEach((dot, index) => {
            const item = items[index];
            // Cek apakah item ini termasuk dalam matched (berdasarkan class filter)
            const isMatched = item && item.classList.contains(filter);
            
            if (isMatched) {
                // Dot untuk item matched muncul
                dot.style.display = 'inline-block';
                dot.style.opacity = '1';
                dot.style.pointerEvents = 'auto';
            } else {
                // Dot untuk item unmatched disembunyikan
                dot.style.display = 'none';
                dot.style.opacity = '0';
                dot.style.pointerEvents = 'none';
            }
        });
    }
    
    // Scroll ke item pertama yang matched
    if (matched.length > 0) {
        setTimeout(() => {
            slider.scrollTo({
                left: 0, // Karena matched items sudah di depan
                behavior: 'smooth'
            });
            
            // Update active dot setelah scroll
            setTimeout(() => {
                // Panggil updateMobileDots dengan parameter yang benar
                if (slider && items && dots) {
                    const updateDots = () => {
                        const scrollLeft = slider.scrollLeft;
                        const itemWidth = items[0]?.offsetWidth + 15 || 295;
                        let activeIndex = Math.round(scrollLeft / itemWidth);
                        activeIndex = Math.min(Math.max(activeIndex, 0), items.length - 1);
                        
                        dots.forEach((dot, index) => {
                            dot.classList.remove('active');
                            
                            // Cek apakah item ini matched
                            const isMatched = items[index] && items[index].classList.contains(filter);
                            
                            if (index === activeIndex && isMatched) {
                                dot.classList.add('active');
                            }
                        });
                    };
                    
                    slider.addEventListener('scroll', updateDots);
                    setTimeout(updateDots, 100);
                }
            }, 300);
        }, 100);
    }
}

// Helper untuk update active dot di mobile
function updateMobileDots(slider, items, dots) {
    if (!slider) return;
    
    const updateDots = () => {
        const scrollLeft = slider.scrollLeft;
        const itemWidth = items[0]?.offsetWidth + 15 || 295;
        
        // Hitung index berdasarkan scroll position
        let activeIndex = Math.round(scrollLeft / itemWidth);
        activeIndex = Math.min(Math.max(activeIndex, 0), items.length - 1);
        
        // Update setiap dot
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            
            // Cek apakah item visible (tidak difilter-out)
            const isVisible = items[index] && !items[index].classList.contains('filtered-out');
            
            // Set visibility berdasarkan class filtered-out
            if (isVisible) {
                dot.style.display = 'inline-block';
                dot.style.opacity = '1';
                dot.style.pointerEvents = 'auto';
            } else {
                dot.style.display = 'none';
                dot.style.opacity = '0';
                dot.style.pointerEvents = 'none';
            }
            
            // Set active jika index sesuai dan visible
            if (index === activeIndex && isVisible) {
                dot.classList.add('active');
            }
        });
    };
    
    // Hapus event listener lama
    slider.removeEventListener('scroll', updateDots);
    
    // Tambah event listener baru
    slider.addEventListener('scroll', updateDots);
    
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
        }, 500);
        
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
            
            if (slider && items[index] && !items[index].classList.contains('filtered-out')) {
                const itemWidth = items[index].offsetWidth + 15;
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
    
    // Inisialisasi scroll event listener untuk update dot
    setTimeout(() => {
        const newSlider = document.querySelector('.skills-slider');
        const newDots = document.querySelectorAll('.slider-dot');
        const newItems = document.querySelectorAll('.skill-item');
        
        if (newSlider && newDots.length) {
            // Panggil updateMobileDots
            updateMobileDots(newSlider, newItems, newDots);
        }
    }, 300);
    
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

// ===================== MODAL KARYA =====================

function initKaryaModal() {
    const modal = document.getElementById('karyaModal');
    const closeBtn = document.getElementById('modalClose');
    const workGrid = document.querySelector('.work-grid');
    
    if (!modal || !workGrid) return;
    
    // Generate work items dari data
    generateWorkItems();
    
    // Event listener untuk work items
    document.querySelectorAll('.work-link').forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const karya = karyaData[index];
            if (karya) {
                openModal(karya);
            }
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Generate work items dari data
function generateWorkItems() {
    const workGrid = document.querySelector('.work-grid');
    if (!workGrid) return;
    
    workGrid.innerHTML = '';
    
    karyaData.forEach((karya, index) => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.setAttribute('data-aos', 'fade-up');
        workItem.setAttribute('data-aos-delay', 100 * (index % 3));
        
        workItem.innerHTML = `
            <div class="work-image">
                <img src="${karya.media[0]?.src || 'https://placehold.co/600x400/2a2a2a/ffffff?text=' + encodeURIComponent(karya.title)}" alt="${karya.title}">
                <div class="work-overlay">
                    <h3>${karya.title}</h3>
                    <p>${karya.category}</p>
                    <a href="#" class="work-link" data-id="${karya.id}"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `;
        
        workGrid.appendChild(workItem);
    });
}

// Open modal dengan data karya
function openModal(karya) {
    const modal = document.getElementById('karyaModal');
    if (!modal) return;
    
    // Set content
    document.getElementById('modalTitle').textContent = karya.title;
    document.getElementById('modalCategory').textContent = karya.category;
    document.getElementById('modalDescription').textContent = karya.description;
    
    // Set main link
    const mainLinkDiv = document.getElementById('modalMainLink');
    if (karya.mainLink) {
        mainLinkDiv.innerHTML = `
            <a href="${karya.mainLink.url}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-globe"></i> ${karya.mainLink.text}
            </a>
        `;
    } else {
        mainLinkDiv.innerHTML = '';
    }
    
    // Set additional links
    const linksGrid = document.getElementById('modalLinksGrid');
    if (karya.links && karya.links.length > 0) {
        linksGrid.innerHTML = karya.links.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="modal-link-item">
                <i class="${link.icon}"></i> ${link.text}
            </a>
        `).join('');
        document.querySelector('#modalLinks').style.display = 'block';
    } else {
        document.querySelector('#modalLinks').style.display = 'none';
    }
    
    // Set media
    initModalSlider(karya.media);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // FORCE CURSOR TO SHOW - tambahkan class khusus
    document.body.classList.add('modal-open');
    
    // Refresh cursor position
    setTimeout(() => {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        if (cursor && follower) {
            cursor.style.opacity = '1';
            follower.style.opacity = '1';
        }
    }, 100);
}

// Close modal
function closeModal() {
    const modal = document.getElementById('karyaModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Hapus class modal-open
    document.body.classList.remove('modal-open');
    
    // Destroy slider
    const mediaContainer = document.getElementById('modalMediaContainer');
    mediaContainer.innerHTML = '';
    
    // Pastikan cursor kembali normal
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (cursor && follower) {
        cursor.style.opacity = '1';
        follower.style.opacity = '1';
        cursor.style.transform = 'scale(1)';
        follower.style.transform = 'scale(1)';
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('karyaModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Destroy slider
    const mediaContainer = document.getElementById('modalMediaContainer');
    mediaContainer.innerHTML = '';
}

// Initialize modal slider
function initModalSlider(media) {
    const container = document.getElementById('modalMediaContainer');
    const dotsContainer = document.getElementById('modalSliderDots');
    const counter = document.getElementById('modalMediaCounter');
    const prevBtn = document.getElementById('modalPrevSlide');
    const nextBtn = document.getElementById('modalNextSlide');
    
    let currentIndex = 0;
    
    // Generate media items
    container.innerHTML = media.map((item, index) => {
        if (item.type === 'video') {
            return `
                <div class="modal-media-item" data-index="${index}">
                    <iframe src="${item.src}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
        } else {
            return `
                <div class="modal-media-item" data-index="${index}">
                    <img src="${item.src}" alt="Media ${index + 1}">
                </div>
            `;
        }
    }).join('');
    
    // Generate dots
    if (media.length > 1) {
        dotsContainer.innerHTML = media.map((_, index) => `
            <span class="modal-slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
        `).join('');
        
        // Show controls
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        dotsContainer.style.display = 'flex';
        
        // Event listeners for dots
        dotsContainer.querySelectorAll('.modal-slider-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                goToSlide(index);
            });
        });
        
        // Event listeners for arrows
        prevBtn.onclick = () => {
            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            }
        };
        
        nextBtn.onclick = () => {
            if (currentIndex < media.length - 1) {
                goToSlide(currentIndex + 1);
            }
        };
        
        // Update counter
        counter.textContent = `${currentIndex + 1} / ${media.length}`;
        
    } else {
        // Hide controls if only one media
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        dotsContainer.style.display = 'none';
        counter.textContent = '1 / 1';
    }
    
    // Function to go to specific slide
    function goToSlide(index) {
        if (index < 0 || index >= media.length) return;
        
        currentIndex = index;
        
        // Update transform
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        document.querySelectorAll('.modal-slider-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
        
        // Update counter
        counter.textContent = `${currentIndex + 1} / ${media.length}`;
    }
}

