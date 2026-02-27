/* ===================== VARIABLES ===================== */
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #a463f5;
    --dark-bg: #0a0a0a;
    --darker-bg: #050505;
    --card-bg: #111111;
    --text-light: #ffffff;
    --text-gray: #b0b0b0;
    --gradient: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    --transition: all 0.3s ease;
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    --glow: 0 0 20px rgba(108, 92, 231, 0.3);
}

/* ===================== RESET & BASE ===================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--dark-bg);
    color: var(--text-light);
    line-height: 1.6;
    overflow-x: hidden;
    cursor: none;
}

/* ===================== CUSTOM CURSOR ===================== */
.cursor {
    width: 8px;
    height: 8px;
    background: var(--primary-color);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
}

.cursor-follower {
    width: 40px;
    height: 40px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
}

/* ===================== LOADER ===================== */
.loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--darker-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.loader-wrapper.hidden {
    opacity: 0;
    visibility: hidden;
}

.loader {
    display: flex;
    gap: 10px;
}

.loader span {
    width: 20px;
    height: 20px;
    background: var(--gradient);
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;
}

.loader span:nth-child(1) {
    animation-delay: -0.32s;
}

.loader span:nth-child(2) {
    animation-delay: -0.16s;
}

@keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
}

/* ===================== NAVIGATION ===================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    z-index: 1000;
    transition: var(--transition);
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(10px);
}

.navbar.scrolled {
    padding: 15px 0;
    background: rgba(5, 5, 5, 0.95);
    box-shadow: var(--shadow);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a {
    font-size: 28px;
    font-weight: 800;
    color: var(--text-light);
    text-decoration: none;
    letter-spacing: 2px;
}

.logo span {
    color: var(--primary-color);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-link {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: var(--transition);
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient);
    transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background: var(--text-light);
    transition: var(--transition);
}

/* ===================== HERO SECTION ===================== */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding: 100px 0;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.hero-text {
    position: relative;
    z-index: 2;
}

.greeting {
    font-size: 18px;
    color: var(--primary-color);
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.hero-title {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 20px;
}

.hero-title span {
    color: var(--primary-color);
    position: relative;
    display: inline-block;
}

.hero-title span::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background: var(--gradient);
    opacity: 0.3;
    z-index: -1;
}

.cursor-type {
    display: inline-block;
    width: 3px;
    height: 50px;
    background: var(--primary-color);
    margin-left: 5px;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.hero-description {
    font-size: 18px;
    color: var(--text-gray);
    margin-bottom: 30px;
    max-width: 500px;
}

.hero-buttons {
    display: flex;
    gap: 20px;
}

.btn {
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

.btn-primary {
    background: var(--gradient);
    color: var(--text-light);
    position: relative;
    overflow: hidden;
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-primary:hover::before {
    left: 100%;
}

/* ===================== FOTO PROFILE ===================== */
@media (min-width: 769px) {
    .hero .image-wrapper {
        position: relative;
        width: 100%;
        max-width: 380px;
        margin: 0 auto;
        aspect-ratio: 2/3;
        overflow: hidden;
    }
    
    .hero .profile-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }
}

@media (max-width: 768px) {
    .hero .image-wrapper {
        position: relative;
        width: 100%;
        max-width: 360px;
        margin: 0 auto;
        aspect-ratio: 2/3;
        overflow: hidden;
    }
    
    .hero .profile-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }
}

@media (max-width: 576px) {
    .hero .image-wrapper {
        max-width: 360px;
    }
}

@media (max-width: 400px) {
    .hero .image-wrapper {
        max-width: 360px;
    }
}

/* Floating shapes */
.floating-shape {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 30px;
    background: var(--gradient);
    opacity: 0.3;
    filter: blur(50px);
    z-index: -1;
}

.shape-1 {
    top: -20px;
    right: -20px;
    animation: rotate 10s linear infinite;
}

.shape-2 {
    bottom: -20px;
    left: -20px;
    width: 150px;
    height: 150px;
    animation: rotate 15s linear infinite reverse;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--text-gray);
    font-size: 14px;
    animation: bounce 2s infinite;
}

/* ===================== HERO SECTION MOBILE ===================== */
@media (max-width: 768px) {
    section#home .hero-content {
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
        grid-template-columns: none !important;
    }
    
    section#home .hero-text {
        order: 1 !important;
        text-align: left !important;
        width: 100% !important;
        padding-top: 20px;
        margin-bottom: 5px !important;
    }
    
    section#home .hero-image {
        order: 2 !important;
        width: 100% !important;
        margin: 0 auto !important;
        display: block !important;
        position: relative !important;
    }
    
    section#home .greeting {
        text-align: left !important;
        font-size: 16px !important;
        margin-bottom: 15px !important;
    }
    
    section#home .hero-title {
        font-size: 32px !important;
        text-align: left !important;
        line-height: 1.3 !important;
        margin-bottom: 15px !important;
    }
    
    section#home .hero-description {
        font-size: 15px !important;
        margin: 0 0 25px 0 !important;
        text-align: left !important;
        max-width: 100% !important;
    }
    
    section#home .hero-buttons {
        justify-content: flex-start !important;
        flex-direction: row !important;
        margin: 0 0 20px 0 !important;
    }
    
    section#home .btn {
        width: auto !important;
        padding: 10px 24px !important;
    }
    
    section#home .scroll-indicator {
        display: none !important;
    }
}

@media (max-width: 480px) {
    section#home .hero-title {
        font-size: 28px !important;
    }
    
    section#home .hero-description {
        font-size: 14px !important;
    }
    
    section#home .btn {
        padding: 8px 20px !important;
        font-size: 13px !important;
    }
}

/* ===================== SECTION HEADER ===================== */
section {
    padding: 100px 0;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
}

.section-title span {
    color: var(--primary-color);
}

.section-line {
    width: 80px;
    height: 4px;
    background: var(--gradient);
    margin: 0 auto;
    border-radius: 2px;
}

/* ===================== ABOUT SECTION ===================== */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.about-text h3 {
    font-size: 28px;
    margin-bottom: 20px;
}

.about-text p {
    color: var(--text-gray);
    margin-bottom: 20px;
}

.personal-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 30px 0;
}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.info-title {
    font-weight: 600;
    color: var(--text-light);
}

.info-desc {
    color: var(--text-gray);
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--card-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-light);
    text-decoration: none;
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icon:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.stat-item {
    text-align: center;
    padding: 30px;
    background: var(--card-bg);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: var(--transition);
}

.stat-item:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
}

.stat-number {
    font-size: 48px;
    font-weight: 800;
    color: var(--primary-color);
    margin-bottom: 10px;
}

.stat-label {
    color: var(--text-gray);
}

/* ===================== SKILLS SECTION ===================== */
.skills {
    background: var(--darker-bg);
    overflow: hidden;
}

.skills-text {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 50px;
    color: var(--text-gray);
}

.skills-filters {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.skills-filters .filter-btn {
    padding: 10px 25px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-light);
    border-radius: 50px;
    cursor: pointer;
    transition: var(--transition);
    font-size: 14px;
    font-weight: 500;
}

.skills-filters .filter-btn:hover,
.skills-filters .filter-btn.active {
    background: var(--primary-color);
    border-color: var(--primary-color);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.skill-item {
    background: var(--card-bg);
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: var(--transition);
}

.skill-item:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
}

.skill-icon {
    width: 70px;
    height: 70px;
    background: var(--gradient);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 30px;
    color: white;
}

.skill-item h4 {
    margin-bottom: 20px;
    font-size: 18px;
}

.skill-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: var(--gradient);
    border-radius: 4px;
    transition: width 1s ease;
}

.skill-item.filtered-out {
    opacity: 0.5;
    transform: scale(0.95);
    pointer-events: none;
    filter: grayscale(0.7);
    transition: all 0.3s ease;
}

.skill-item.skill-matched {
    animation: highlightItem 0.5s ease forwards;
}

@keyframes highlightItem {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
    100% { transform: scale(1); opacity: 1; }
}

/* ===================== SKILLS FILTER DESKTOP ===================== */
@media (min-width: 769px) {
    .skills-grid {
        display: flex !important;
        flex-wrap: wrap;
        gap: 30px;
        transition: all 0.3s ease;
    }
    
    .skill-item {
        flex: 0 0 calc(33.333% - 20px);
        min-width: 250px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        margin-bottom: 0;
    }
    
    .skill-item.filtered-out {
        opacity: 0.4 !important;
        transform: scale(0.95) !important;
        filter: grayscale(0.8) !important;
        pointer-events: none !important;
    }
}

@media (min-width: 992px) {
    .skill-item {
        flex: 0 0 calc(33.333% - 20px);
    }
}

@media (min-width: 769px) and (max-width: 991px) {
    .skill-item {
        flex: 0 0 calc(50% - 15px);
    }
}

/* ===================== SKILLS FILTER MOBILE ===================== */
@media (max-width: 768px) {
    .skills .skills-grid {
        display: none !important;
    }
    
    .skills-slider-container {
        display: block !important;
        margin-top: 20px;
    }
    
    .skills-slider {
        display: flex;
        gap: 15px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        padding: 10px 5px 20px;
        scrollbar-width: none;
    }
    
    .skills-slider::-webkit-scrollbar {
        display: none;
    }
    
    .skills-slider .skill-item {
        flex: 0 0 auto;
        width: 280px;
        scroll-snap-align: start;
        padding: 25px 20px;
        transition: all 0.3s ease;
        animation: slideIn 0.5s ease;
        background: var(--card-bg);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .skill-item.filtered-out {
        opacity: 0.2 !important;
        transform: scale(0.8) !important;
        filter: grayscale(1) !important;
        pointer-events: none !important;
        transition: all 0.3s ease !important;
    }
    
    .skill-item:not(.filtered-out) {
        animation: pulseGlow 2s infinite;
        opacity: 1 !important;
        transform: scale(1) !important;
    }
    
    .slider-indicators {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 15px;
    }
    
    .slider-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .slider-dot.active {
        width: 24px;
        background: var(--primary-color);
        border-radius: 4px;
    }
    
    .slider-dot[style*="display: none"] {
        display: none !important;
    }
    
    .skills-filters .filter-btn {
        padding: 8px 16px;
        font-size: 13px;
        background: var(--card-bg);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--text-gray);
    }
    
    .skills-filters .filter-btn.active {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }
    
    .skill-icon {
        width: 60px;
        height: 60px;
        font-size: 26px;
    }
    
    .skill-item h4 {
        font-size: 16px;
        margin-bottom: 15px;
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes pulseGlow {
    0% {
        box-shadow: 0 0 0 0 rgba(108, 92, 231, 0.4);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(108, 92, 231, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(108, 92, 231, 0);
    }
}

/* ===================== WORK SECTION ===================== */
.work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
}

.work-item {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
}

.work-image {
    position: relative;
    overflow: hidden;
}

.work-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.work-item:hover img {
    transform: scale(1.1);
}

.work-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(108, 92, 231, 0.9), transparent);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 30px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.work-item:hover .work-overlay {
    opacity: 1;
}

.work-overlay h3 {
    font-size: 24px;
    margin-bottom: 5px;
    transform: translateY(20px);
    transition: transform 0.3s ease 0.1s;
}

.work-overlay p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 15px;
    transform: translateY(20px);
    transition: transform 0.3s ease 0.2s;
}

.work-link {
    width: 50px;
    height: 50px;
    background: var(--text-light);
    color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transform: translateY(20px);
    transition: transform 0.3s ease 0.3s, background 0.3s ease;
}

.work-item:hover .work-overlay h3,
.work-item:hover .work-overlay p,
.work-item:hover .work-link {
    transform: translateY(0);
}

.work-link:hover {
    background: var(--primary-color);
    color: var(--text-light);
}

/* ===================== EXPERIENCE & EDUCATION SECTION ===================== */
.experience {
    background: var(--dark-bg);
    padding: 100px 0;
}

.experience-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.experience-subtitle {
    font-size: 24px;
    margin-bottom: 40px;
    color: var(--text-light);
    display: flex;
    align-items: center;
    gap: 10px;
}

.experience-subtitle i {
    color: var(--primary-color);
    font-size: 28px;
}

.timeline {
    position: relative;
    padding-left: 30px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: var(--gradient);
    opacity: 0.3;
}

.timeline-item {
    position: relative;
    padding-bottom: 40px;
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-dot {
    position: absolute;
    left: -38px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    border: 3px solid var(--dark-bg);
    box-shadow: 0 0 0 2px var(--primary-color);
}

.timeline-date {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.timeline-content h4 {
    font-size: 20px;
    margin-bottom: 5px;
    color: var(--text-light);
}

.timeline-content h5 {
    font-size: 16px;
    font-weight: 500;
    color: var(--secondary-color);
    margin-bottom: 10px;
}

.timeline-content p {
    color: var(--text-gray);
    font-size: 15px;
    line-height: 1.6;
}

/* ===================== 2x2 GRID ABOUT ===================== */
.about-grid-2x2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
}

.about-card {
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 30px;
    transition: all 0.3s ease;
    height: 100%;
    backdrop-filter: blur(10px);
}

.about-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: var(--glow);
}

.card-header-with-icon {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.card-header-with-icon i {
    font-size: 24px;
    color: var(--primary-color);
    background: rgba(108, 92, 231, 0.1);
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
}

.card-header-with-icon h3 {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    line-height: 1.4;
    flex: 1;
}

.card-header-with-icon h3 em {
    color: var(--primary-color);
    font-style: normal;
}

.card-body {
    color: var(--text-gray);
}

.card-body p {
    margin-bottom: 15px;
    line-height: 1.7;
    font-size: 15px;
}

.highlight {
    color: var(--primary-color);
    font-weight: 600;
}

.tech-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 15px;
}

.tech-item {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    font-size: 14px;
    line-height: 1.6;
}

.tech-category {
    color: #fff;
    font-weight: 600;
    min-width: 100px;
}

.tech-detail {
    color: #aaa;
    flex: 1;
}

.contribution-list {
    list-style: none;
    margin: 15px 0;
}

.contribution-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
    color: #bbb;
    font-size: 14px;
}

.contribution-list li i {
    color: var(--primary-color);
    font-size: 16px;
    margin-top: 2px;
}

.contribution-list li strong {
    color: #fff;
    font-weight: 600;
}

.mt-2 {
    margin-top: 10px;
}

.contact-mini {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    padding: 15px;
    margin: 20px 0;
    border: 1px solid rgba(255, 255, 255, 0.03);
}

.contact-mini-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    color: #ccc;
    font-size: 14px;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
}

.contact-mini-item:last-child {
    border-bottom: none;
}

.contact-mini-item i {
    width: 20px;
    color: var(--primary-color);
}

.social-icons-container {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
}

.social-icon-circle {
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 18px;
}

.social-icon-circle:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
    border-color: var(--primary-color);
}

/* ===================== FOOTER SIMPLE ELEGAN ===================== */
.footer {
    background: var(--darker-bg);
    padding: 60px 0 25px;
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
        transparent, 
        var(--primary-color), 
        var(--secondary-color), 
        var(--primary-color), 
        transparent
    );
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: 50px;
    margin-bottom: 40px;
}

.footer-brand h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--text-light);
}

.footer-brand span {
    color: var(--primary-color);
}

.footer-brand p {
    color: var(--text-gray);
    font-size: 15px;
    line-height: 1.6;
    max-width: 300px;
}

.footer-links h4,
.footer-social h4 {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-light);
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
}

.footer-links h4::after,
.footer-social h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--gradient);
    border-radius: 2px;
}

.footer-links ul {
    list-style: none;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    color: var(--text-gray);
    text-decoration: none;
    font-size: 15px;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.footer-links a i {
    font-size: 12px;
    opacity: 0;
    transform: translateX(-5px);
    transition: var(--transition);
    color: var(--primary-color);
}

.footer-links a:hover {
    color: var(--text-light);
    transform: translateX(5px);
}

.footer-links a:hover i {
    opacity: 1;
    transform: translateX(0);
}

.social-icons-modern {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.social-icons-modern a {
    width: 45px;
    height: 45px;
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-gray);
    text-decoration: none;
    transition: var(--transition);
    font-size: 18px;
}

.social-icons-modern a:hover {
    background: var(--primary-color);
    color: var(--text-light);
    transform: translateY(-3px);
    border-color: transparent;
}

.contact-info-compact {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.contact-info-compact .contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--text-gray);
    font-size: 14px;
    transition: var(--transition);
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.03);
}

.contact-info-compact .contact-item i {
    width: 30px;
    height: 30px;
    background: rgba(108, 92, 231, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 14px;
    transition: var(--transition);
}

.contact-info-compact .contact-item:hover {
    background: var(--card-bg);
    border-color: rgba(108, 92, 231, 0.2);
    transform: translateX(5px);
}

.contact-info-compact .contact-item:hover i {
    background: var(--primary-color);
    color: var(--text-light);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    flex-wrap: wrap;
    gap: 15px;
}

.copyright {
    color: var(--text-gray);
    font-size: 14px;
}

.copyright i {
    color: #ff6b6b;
    margin: 0 3px;
}

.footer-credit {
    display: flex;
    gap: 20px;
}

.footer-credit a {
    color: var(--text-gray);
    text-decoration: none;
    font-size: 13px;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 5px;
}

.footer-credit a i {
    color: var(--primary-color);
    font-size: 12px;
}

.footer-credit a:hover {
    color: var(--primary-color);
}

.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 45px;
    height: 45px;
    background: var(--gradient);
    border: none;
    border-radius: 50%;
    color: var(--text-light);
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 99;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(108, 92, 231, 0.3);
}

/* ===================== RESPONSIVE ===================== */
@media (max-width: 992px) {
    .container {
        max-width: 720px;
    }
    
    .hero-title {
        font-size: 42px;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .work-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
    
    .footer-brand {
        grid-column: 1 / -1;
        text-align: center;
    }
    
    .footer-brand p {
        max-width: 400px;
        margin: 0 auto;
    }
    
    .about-grid-2x2 {
        gap: 20px;
    }
    
    .about-card {
        padding: 25px;
    }
    
    .card-header-with-icon h3 {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .container {
        max-width: 540px;
        padding: 0 15px;
    }
    
    .hamburger {
        display: block;
        z-index: 1001;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 0;
        gap: 0;
        flex-direction: column;
        background: rgba(5, 5, 5, 0.98);
        backdrop-filter: blur(10px);
        width: 100%;
        height: 100vh;
        text-align: center;
        transition: 0.3s ease-in-out;
        padding: 100px 0 30px;
        z-index: 1000;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-menu li {
        margin: 20px 0;
    }
    
    .nav-link {
        font-size: 20px;
    }
    
    .hero {
        padding: 100px 0 60px;
        min-height: auto;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        gap: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .hero-image {
        order: 1;
        width: 100%;
        margin: 0 auto 10px;
    }
    
    .hero-text {
        order: 2;
    }
    
    .hero-title {
        font-size: 36px;
    }
    
    .hero-description {
        font-size: 16px;
        margin: 0 auto 25px;
    }
    
    .hero-buttons {
        justify-content: center;
        flex-direction: column;
        max-width: 280px;
        margin: 0 auto;
    }
    
    .btn {
        width: 100%;
        justify-content: center;
    }
    
    .scroll-indicator {
        display: none;
    }
    
    section {
        padding: 70px 0;
    }
    
    .section-title {
        font-size: 32px;
    }
    
    .about-text h3 {
        font-size: 24px;
        text-align: center;
    }
    
    .personal-info {
        grid-template-columns: 1fr;
    }
    
    .info-item {
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 15px;
        background: var(--card-bg);
        border-radius: 10px;
    }
    
    .about-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    
    .stat-item {
        padding: 20px 15px;
    }
    
    .stat-number {
        font-size: 32px;
    }
    
    .work-grid {
        grid-template-columns: 1fr;
    }
    
    .work-image img {
        height: 250px;
    }
    
    .experience-content {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    
    .experience-subtitle {
        font-size: 18px;
        margin-bottom: 25px;
        white-space: nowrap;
    }
    
    .experience-subtitle i {
        font-size: 20px;
    }
    
    .timeline {
        padding-left: 20px;
    }
    
    .timeline-dot {
        left: -26px;
        width: 12px;
        height: 12px;
    }
    
    .timeline-content h4 {
        font-size: 16px;
    }
    
    .timeline-content h5 {
        font-size: 14px;
    }
    
    .timeline-content p {
        font-size: 12px;
    }
    
    .cursor,
    .cursor-follower {
        display: none;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 35px;
        text-align: left;
    }
    
    .footer-brand {
        text-align: left;
    }
    
    .footer-brand p {
        margin: 0;
    }
    
    .footer-links h4::after,
    .footer-social h4::after {
        left: 0;
        transform: none;
    }
    
    .social-icons-modern {
        justify-content: flex-start;
    }
    
    .contact-info-compact {
        max-width: 400px;
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
    
    .footer-credit {
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
    
    .about-grid-2x2 {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .tech-item {
        flex-direction: column;
        gap: 3px;
    }
    
    .tech-category {
        min-width: auto;
    }
    
    .card-header-with-icon i {
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
    
    .mobile-hidden {
        display: none;
    }
}

@media (max-width: 576px) {
    .hero-title {
        font-size: 32px;
    }
    
    .section-title {
        font-size: 28px;
    }
    
    .about-text h3 {
        font-size: 22px;
    }
    
    .stat-number {
        font-size: 28px;
    }
    
    .skills-slider .skill-item {
        min-width: 240px;
        width: 240px;
    }
    
    .btn {
        font-size: 15px;
    }
    
    .timeline-content h4 {
        font-size: 14px;
    }
    
    .timeline-content p {
        font-size: 11px;
    }
    
    .footer-links ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
    
    .footer-links li {
        margin-bottom: 0;
    }
    
    .contact-info-compact .contact-item {
        font-size: 13px;
        padding: 6px 10px;
    }
    
    .social-icons-modern {
        gap: 12px;
    }
    
    .social-icons-modern a {
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
    
    .footer-credit {
        flex-direction: column;
        gap: 10px;
    }
    
    .about-card {
        padding: 20px;
    }
    
    .card-header-with-icon {
        flex-direction: column;
        text-align: center;
    }
    
    .card-body p {
        font-size: 14px;
    }
    
    .social-icons-container {
        justify-content: center;
    }
}
