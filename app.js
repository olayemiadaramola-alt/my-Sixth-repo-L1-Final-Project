// ============================================
// DATABASE SIMULATION (In-Memory Storage)
// ============================================

const database = {
    users: [
        {
            id: 'user_001',
            name: 'Marcus Johnson',
            firstName: 'Marcus',
            role: 'Concrete Laborer',
            company: 'Brooklyn Concrete Co.',
            employeeId: 'BCO-2847',
            email: 'mjohnson@brooklynconcrete.com',
            startDate: '2023-03-15',
            lastLogin: new Date().toISOString(),
            profilePic: 'MJ',
            badges: [
                { name: 'Safety Champion', icon: '🛡️', date: 'Jan 10, 2024', description: '100% safety checklist completion' },
                { name: 'Digital Pro Level 3', icon: '💻', date: 'Jun 15, 2024', description: 'Mastered all digital features' },
                { name: 'Material Master', icon: '📋', date: 'Sep 20, 2024', description: 'Logged 500+ deliveries' },
                { name: 'Task Champion', icon: '⭐', date: 'Aug 5, 2025', description: '100 tasks ahead of schedule' },
                { name: 'Team Leader', icon: '👥', date: 'Sep 12, 2025', description: 'Helped train 5 new workers' }
            ],
            certifications: [
                { name: 'OSHA 30-Hour', issuer: 'OSHA', issueDate: '2023-03-01', expiryDate: '2026-03-01', status: 'active', daysUntilExpiry: 125 },
                { name: 'Forklift Operator', issuer: 'NCCO', issueDate: '2024-12-15', expiryDate: '2025-12-15', status: 'expiring_soon', daysUntilExpiry: 49 },
                { name: 'First Aid & CPR', issuer: 'American Red Cross', issueDate: '2024-05-10', expiryDate: '2026-05-10', status: 'active', daysUntilExpiry: 195 }
            ],
            stats: {
                daysWorked: 487,
                tasksCompleted: 1247,
                tasksOnTime: 1180,
                hazardsReported: 34,
                hazardsResolved: 29,
                trainingHours: 28,
                safetyScore: 97,
                averageTaskTime: '2.3 hours',
                materialsLogged: 523
            }
        }
    ],
    tasks: [
        { id: 'task_001', name: 'Pour foundation - Building A', location: 'Site 3, Zone North', priority: 'High', status: 'Pending', assignedDate: '2025-10-27', startTime: null, estimatedDuration: '3 hours', timeSpent: 0, deadline: '2025-10-27T12:00:00Z', notes: 'Weather cleared, proceeding as planned', autoAssigned: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        { id: 'task_002', name: 'Finish concrete slab - Building B', location: 'Site 3, Zone South', priority: 'Medium', status: 'Pending', assignedDate: '2025-10-27', estimatedDuration: '2 hours', deadline: '2025-10-27T14:00:00Z', notes: '', autoAssigned: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        { id: 'task_003', name: 'Inspect rebar placement', location: 'Site 3, Zone East', priority: 'High', status: 'Complete', assignedDate: '2025-10-27', startTime: '06:30:00', completionTime: '07:45:00', timeSpent: 1.25, completedDate: '2025-10-27', notes: 'All measurements within tolerance', autoAssigned: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        { id: 'task_004', name: 'Clean equipment and tools', location: 'Equipment Yard', priority: 'Low', status: 'Pending', assignedDate: '2025-10-27', estimatedDuration: '1 hour', deadline: '2025-10-27T16:00:00Z', notes: 'Deep clean concrete mixer', recurring: true, recurrence: 'daily', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
    ],
    safetyChecklists: [
        { id: 'check_001', date: '2025-10-27', completionTime: 12, completed: true, score: 100, submittedAt: '2025-10-27T06:55:00Z', submittedBy: 'user_001' },
        { id: 'check_002', date: '2025-10-26', completionTime: 10, completed: true, score: 100, submittedAt: '2025-10-26T07:02:00Z', submittedBy: 'user_001' },
        { id: 'check_003', date: '2025-10-25', completionTime: 11, completed: true, score: 100, submittedAt: '2025-10-25T06:58:00Z', submittedBy: 'user_001' }
    ],
    materials: [
        { id: 'mat_001', type: 'Ready-Mix Concrete', quantity: '12 cubic yards', supplier: 'NYC Ready Mix', deliveryTime: '2025-10-27T07:30:00Z', loggedBy: 'Marcus Johnson', barcode: 'RMC-2025-10-27-001', status: 'delivered', createdAt: '2025-10-27T07:35:00Z' },
        { id: 'mat_002', type: 'Rebar Steel', quantity: '500 lbs', supplier: 'Steel Supply Co', deliveryTime: '2025-10-27T08:15:00Z', loggedBy: 'Marcus Johnson', barcode: 'RB-2025-10-27-002', status: 'delivered', createdAt: '2025-10-27T08:20:00Z' }
    ],
    hazards: [
        { id: 'haz_001', type: 'Slip/Trip Hazard', location: 'Site 3, Zone North - Near mixer', severity: 'Medium', status: 'Under Review', description: 'Wet concrete spill creating slip risk', reportedBy: 'Marcus Johnson', reportedAt: '2025-10-27T09:15:00Z', photos: 2, escalated: false, autoEscalateAt: '2025-10-28T09:15:00Z' },
        { id: 'haz_002', type: 'Dust/Silica', location: 'Equipment Yard', severity: 'High', status: 'Resolved', description: 'Excessive dust from cutting operations', reportedBy: 'Marcus Johnson', reportedAt: '2025-10-26T14:30:00Z', resolvedAt: '2025-10-27T10:00:00Z', resolution: 'Added water misting system and provided respirators', photos: 3, escalated: false }
    ],
    trainingModules: [
        { id: 'train_001', title: 'Advanced Concrete Finishing Techniques', category: 'Technical Skills', duration: '5 min', progress: 100, completed: true, completedDate: '2025-10-20', quizScore: 95, pointsEarned: 50 },
        { id: 'train_002', title: 'Silica Dust Safety & PPE', category: 'Safety', duration: '3 min', progress: 100, completed: true, completedDate: '2025-10-15', quizScore: 100, pointsEarned: 50, required: true },
        { id: 'train_003', title: 'Digital Platform Mastery', category: 'Technology', duration: '4 min', progress: 75, completed: false, startedDate: '2025-10-25', autoSaveProgress: true },
        { id: 'train_004', title: 'Team Communication Excellence', category: 'Soft Skills', duration: '3 min', progress: 0, completed: false, recommended: true, recommendedReason: 'Based on your role as team leader' },
        { id: 'train_005', title: 'Advanced Concrete Curing Methods', category: 'Technical Skills', duration: '6 min', progress: 0, completed: false, recommended: true, recommendedReason: 'Next in your learning path', unlocked: true }
    ],
    activityLog: [
        { id: 'act_001', action: 'Completed safety checklist', details: 'Score: 100%, Time: 12 min', timestamp: '2025-10-27T06:55:00Z', icon: 'check-circle', category: 'safety', userId: 'user_001' },
        { id: 'act_002', action: 'Started task', details: 'Pour foundation - Building A', timestamp: '2025-10-27T08:05:00Z', icon: 'play', category: 'task', userId: 'user_001' },
        { id: 'act_003', action: 'Logged material delivery', details: 'Ready-Mix Concrete - 12 cubic yards', timestamp: '2025-10-27T07:35:00Z', icon: 'truck', category: 'material', userId: 'user_001' },
        { id: 'act_004', action: 'Reported hazard', details: 'Slip/Trip Hazard - Site 3, Zone North', timestamp: '2025-10-27T09:15:00Z', icon: 'alert-triangle', category: 'hazard', userId: 'user_001' },
        { id: 'act_005', action: 'Completed task', details: 'Inspect rebar placement - 1.25 hours', timestamp: '2025-10-27T07:45:00Z', icon: 'check', category: 'task', userId: 'user_001' }
    ],
    notifications: [
        { id: 1, type: 'warning', title: 'Certification Expiring Soon', message: 'Your Forklift Operator cert expires in 49 days', timestamp: '2025-10-27T18:00:00Z', read: false, action: 'View Certifications' },
        { id: 2, type: 'success', title: 'Weekly Report Ready', message: 'Your October Week 4 report is ready to view', timestamp: '2025-10-27T09:00:00Z', read: false, action: 'View Report' },
        { id: 3, type: 'info', title: 'New Training Module', message: 'Advanced Concrete Curing Techniques is now available', timestamp: '2025-10-26T14:30:00Z', read: true, action: 'Start Training' },
        { id: 4, type: 'alert', title: 'Hazard Update', message: 'Hazard #23 has been marked as resolved', timestamp: '2025-10-26T11:15:00Z', read: true, action: 'View Hazard' }
    ],
    syncStatus: {
        lastSync: new Date().toISOString(),
        syncInProgress: false,
        pendingItems: 0,
        failedItems: 0,
        nextAutoSync: new Date(Date.now() + 5 * 60000).toISOString()
    },
    automationSettings: {
        autoSave: true,
        autoSaveInterval: 30,
        dailyChecklistReminder: true,
        reminderTime: '07:00',
        taskDeadlineAlerts: true,
        alertBeforeMinutes: 30,
        certExpiryWarnings: true,
        warningDays: 30,
        trainingRecommendations: true,
        lowStockAlerts: true,
        hazardEscalation: true,
        escalationHours: 24,
        weeklyReports: true,
        reportDay: 'Friday'
    },
    analytics: {
        weeklyPerformance: {
            tasksCompleted: 23,
            tasksAssigned: 25,
            completionRate: 92,
            onTimeRate: 87,
            averageTaskTime: '2.1 hours'
        },
        safetyMetrics: {
            checklistsCompleted: 7,
            completionRate: 100,
            hazardsReported: 3,
            hazardsResolved: 2,
            safetyScore: 98
        }
    },
    teamLeaderboard: [
        { rank: 1, name: 'Marcus Johnson', points: 2847, badges: 5, highlight: true },
        { rank: 2, name: 'James Wilson', points: 2654, badges: 4, highlight: false },
        { rank: 3, name: 'Robert Chen', points: 2431, badges: 4, highlight: false },
        { rank: 4, name: 'Miguel Rodriguez', points: 2398, badges: 3, highlight: false },
        { rank: 5, name: 'David Kim', points: 2276, badges: 3, highlight: false }
    ]
};

// ============================================
// CRUD Operations for Database
// ============================================

const DB = {
    // Create
    create: (table, record) => {
        const newRecord = {
            ...record,
            id: `${table}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        database[table].push(newRecord);
        logActivity('create', table, newRecord.id);
        return newRecord;
    },
    
    // Read
    read: (table, id = null) => {
        if (id) {
            return database[table].find(item => item.id === id);
        }
        return database[table];
    },
    
    // Update
    update: (table, id, updates) => {
        const index = database[table].findIndex(item => item.id === id);
        if (index !== -1) {
            database[table][index] = {
                ...database[table][index],
                ...updates,
                updatedAt: new Date().toISOString()
            };
            logActivity('update', table, id);
            return database[table][index];
        }
        return null;
    },
    
    // Delete
    delete: (table, id) => {
        const index = database[table].findIndex(item => item.id === id);
        if (index !== -1) {
            const deleted = database[table].splice(index, 1)[0];
            logActivity('delete', table, id);
            return deleted;
        }
        return null;
    },
    
    // Query
    query: (table, filter) => {
        return database[table].filter(filter);
    },
    
    // Export all data
    export: () => {
        return JSON.stringify(database, null, 2);
    }
};

function logActivity(action, table, recordId) {
    const activityRecord = {
        id: `act_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        action: `${action} ${table}`,
        details: `Record ID: ${recordId}`,
        timestamp: new Date().toISOString(),
        icon: 'database',
        category: 'system',
        userId: 'user_001'
    };
    database.activityLog.unshift(activityRecord);
    if (database.activityLog.length > 100) {
        database.activityLog = database.activityLog.slice(0, 100);
    }
}

// ============================================
// APPLICATION STATE
// ============================================

const appState = {
    currentView: 'dashboard',
    currentUser: database.users[0],

    safetyChecklist: {
        ppe: [
            'Hard hat secured and undamaged',
            'Safety glasses clean and functional',
            'Work gloves in good condition',
            'Steel-toe boots properly laced',
            'High-visibility vest worn'
        ],
        equipment: [
            'Concrete mixer inspected',
            'Power tools functional',
            'Extension cords undamaged',
            'Hand tools accounted for'
        ],
        site: [
            'Site hazards identified and marked',
            'Weather conditions assessed',
            'Emergency exits clearly marked',
            'First aid kit location verified',
            'Communication devices tested'
        ]
    },
    checkedItems: [],
    checklistStartTime: null,
    materials: [
        { type: 'Ready-Mix Concrete', quantity: '12 cubic yards', supplier: 'NYC Ready Mix', time: '07:30 AM', timestamp: '7:30 AM' },
        { type: 'Rebar Steel', quantity: '500 lbs', supplier: 'Steel Supply Co', time: '08:15 AM', timestamp: '8:15 AM' }
    ],
    recentActivity: [
        { action: 'Completed safety checklist', time: '6:45 AM', icon: '✓' },
        { action: 'Started task: Pour foundation', time: '8:05 AM', icon: '▶️' },
        { action: 'Logged material delivery', time: '8:20 AM', icon: '🚚' },
        { action: 'Reported hazard: Slip risk', time: '9:15 AM', icon: '⚠️' },
        { action: 'Completed training module', time: 'Yesterday', icon: '📚' }
    ],
    trainingModules: [
        { id: 1, title: 'Advanced Concrete Finishing', duration: '5 min', progress: 100, completed: true, icon: '🏗️' },
        { id: 2, title: 'Silica Dust Safety', duration: '3 min', progress: 60, completed: false, icon: '😷' },
        { id: 3, title: 'Digital Tool Mastery', duration: '4 min', progress: 0, completed: false, icon: '📱' },
        { id: 4, title: 'Team Communication Best Practices', duration: '3 min', progress: 0, completed: false, icon: '💬' }
    ],
    stats: {
        tasksToday: 4,
        tasksCompleted: 1,
        activeHazards: 2,
        materialsLogged: 2,
        completionPercentage: 35
    },
    taskTimers: {},
    expandedGroups: [],
    currentFilter: 'all'
};

let signaturePad = null;
let checklistTimerInterval = null;
let autoSaveInterval = null;
let syncInterval = null;

// Initialize app on load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    startClock();
    setGreeting();
    setupCarousel();
    setupDragDrop();
    setupSignaturePad();
    initializeAutomation();
    renderNotifications();
    updateSyncStatus();
    renderLeaderboard();
    initializeCharts();
});

function initializeApp() {
    // Display welcome back message
    const lastSync = document.getElementById('last-sync-time');
    if (lastSync) {
        lastSync.textContent = getRelativeTime(database.syncStatus.lastSync);
    }
    
    animateStatCards();
    renderRecentActivity();
    renderSafetyChecklist();
    renderKanbanTasks();
    renderTrainingModules();
    renderMaterials();
    updateStats();
    updateProgress();
    
    // Set up form handlers
    document.getElementById('safety-form').addEventListener('submit', handleSafetySubmit);
    document.getElementById('material-form').addEventListener('submit', handleMaterialSubmit);
    document.getElementById('hazard-form').addEventListener('submit', handleHazardSubmit);
}

// Time and Greeting
function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    const clockEl = document.getElementById('current-time');
    if (clockEl) clockEl.textContent = timeString;
}

function setGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Good Evening';
    if (hour < 12) greeting = 'Good Morning';
    else if (hour < 18) greeting = 'Good Afternoon';
    
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) greetingEl.textContent = greeting;
}

// Count-up Animation
function animateStatCards() {
    const statCards = document.querySelectorAll('.stat-card .stat-value');
    statCards.forEach((card, index) => {
        const target = parseInt(card.getAttribute('data-target')) || 0;
        animateValue(card, 0, target, 1000 + (index * 200));
    });
    
    // Animate profile stats when on profile page
    const detailStats = document.querySelectorAll('.detail-stat .detail-value');
    detailStats.forEach((stat, index) => {
        const target = parseInt(stat.getAttribute('data-target')) || 0;
        setTimeout(() => {
            animateValue(stat, 0, target, 1500);
        }, index * 150);
    });
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            element.textContent = Math.round(end);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// Carousel
function setupCarousel() {
    const carousel = document.getElementById('stats-carousel');
    const dotsContainer = document.getElementById('carousel-dots');
    
    if (!carousel || !dotsContainer) return;
    
    const cards = carousel.querySelectorAll('.stat-card');
    
    // Create dots
    for (let i = 0; i < cards.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => {
            carousel.scrollTo({ left: cards[i].offsetLeft - 20, behavior: 'smooth' });
        });
        dotsContainer.appendChild(dot);
    }
    
    // Update dots on scroll
    carousel.addEventListener('scroll', () => {
        const scrollPos = carousel.scrollLeft;
        const cardWidth = cards[0].offsetWidth + 15;
        const activeIndex = Math.round(scrollPos / cardWidth);
        
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });
    });
}

// Recent Activity
function renderRecentActivity() {
    const container = document.getElementById('activity-feed');
    if (!container) return;
    
    container.innerHTML = '';
    database.activityLog.slice(0, 5).forEach((activity, index) => {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.style.animationDelay = `${index * 0.1}s`;
        
        const iconMap = {
            'check-circle': '✓',
            'play': '▶️',
            'truck': '🚚',
            'alert-triangle': '⚠️',
            'check': '✓',
            'database': '💾'
        };
        
        item.innerHTML = `
            <div class="activity-icon">${iconMap[activity.icon] || activity.icon}</div>
            <div class="activity-content">
                <div class="activity-text">${activity.action}</div>
                <div class="activity-time">${getRelativeTime(activity.timestamp)}</div>
            </div>
        `;
        container.appendChild(item);
    });
}

// Progress Update
function updateProgress() {
    const totalTasks = database.tasks.filter(t => t.assignedDate === '2025-10-27').length;
    const completed = database.tasks.filter(t => t.status === 'Complete' && t.assignedDate === '2025-10-27').length;
    const percentage = totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0;
    
    const progressFill = document.getElementById('progress-fill');
    const progressPercent = document.getElementById('progress-percent');
    
    if (progressFill) progressFill.style.width = percentage + '%';
    if (progressPercent) progressPercent.textContent = percentage + '%';
    
    // Update stats
    appState.stats.tasksToday = totalTasks;
    appState.stats.tasksCompleted = completed;
    appState.stats.completionPercentage = percentage;
}

// Navigation
function navigateTo(view) {
    // Update view
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const viewEl = document.getElementById(`${view}-view`);
    if (viewEl) viewEl.classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const navItems = document.querySelectorAll('.nav-item');
    const viewMap = { dashboard: 0, safety: 1, tasks: 2, training: 3, analytics: 3, settings: 4 };
    if (viewMap[view] !== undefined && navItems[viewMap[view]]) {
        navItems[viewMap[view]].classList.add('active');
    }
    
    appState.currentView = view;
    
    // Ensure page and view start at top when navigating
    // Scroll document to top (covers most browsers) and also reset the app/view scroll containers
    try {
        // instant jump to top so the view change appears at the top
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch (e) {
        // fallback for older browsers
        window.scrollTo(0, 0);
    }
    // reset any element scroll positions that may contain the views
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const appEl = document.getElementById('app');
    if (appEl) appEl.scrollTop = 0;
    if (viewEl) viewEl.scrollTop = 0;

    // Trigger animations and load data when entering specific views
    if (view === 'dashboard') {
        setTimeout(() => animateStatCards(), 100);
    } else if (view === 'analytics') {
        setTimeout(() => {
            renderLeaderboard();
            if (typeof Chart !== 'undefined') {
                renderTaskChart();
                renderActivityChart();
            }
        }, 100);
    }
}


// Training Hub
function renderTrainingModules() {
    const container = document.getElementById('training-modules');
    if (!container) return;
    
    container.innerHTML = '';
    database.trainingModules.forEach(module => {
        const card = document.createElement('div');
        card.className = 'training-card';
        
        // Icon mapping
        const iconMap = {
            'Technical Skills': '🏭',
            'Safety': '😷',
            'Technology': '📱',
            'Soft Skills': '💬'
        };
        const icon = iconMap[module.category] || '📚';
        
        const completeIcon = module.completed 
            ? '<div class="training-complete">✓</div>'
            : `
                <div class="training-progress">
                    <div class="training-progress-fill" style="width: ${module.progress}%"></div>
                </div>
            `;
        
        card.innerHTML = `
            <div class="training-icon">${icon}</div>
            <div class="training-info">
                <div class="training-title">${module.title}</div>
                <div class="training-meta">
                    <span>⏱️ ${module.duration}</span>
                    ${module.completed ? '<span style="color: #39ff14">✓ Complete</span>' : `<span>${module.progress}% Complete</span>`}
                </div>
                ${!module.completed ? completeIcon : ''}
            </div>
            ${module.completed ? completeIcon : ''}
        `;
        
        card.addEventListener('click', () => startTraining(module.id));
        container.appendChild(card);
    });
}

function startTraining(moduleId) {
    const module = database.trainingModules.find(m => m.id === moduleId);
    if (!module) return;
    
    if (module.completed) {
        showToast('You have already completed this module!', 'info');
    } else {
        showToast(`Starting: ${module.title}...`);
        
        // Simulate progress
        setTimeout(() => {
            module.progress = Math.min(module.progress + 40, 100);
            if (module.progress === 100) {
                module.completed = true;
                module.completedDate = new Date().toISOString().split('T')[0];
                showToast('🎉 Training completed! Badge earned!');
                createConfetti();
                
                // Log activity
                const activityRecord = {
                    action: 'Completed training module',
                    details: module.title,
                    timestamp: new Date().toISOString(),
                    icon: '📚',
                    category: 'training',
                    userId: 'user_001'
                };
                database.activityLog.unshift(activityRecord);
                renderRecentActivity();
            }
            renderTrainingModules();
        }, 1500);
    }
}

// Safety Checklist with Groups
function renderSafetyChecklist() {
    const groups = ['ppe', 'equipment', 'site'];
    
    groups.forEach(group => {
        const container = document.getElementById(`${group}-items`);
        if (!container) return;
        
        container.innerHTML = '';
        appState.safetyChecklist[group].forEach((item, index) => {
            const itemId = `${group}-${index}`;
            const isChecked = appState.checkedItems.includes(itemId);
            const itemEl = document.createElement('div');
            itemEl.className = `checklist-item ${isChecked ? 'checked' : ''}`;
            itemEl.innerHTML = `
                <div class="checkbox"></div>
                <div class="checklist-label">${item}</div>
            `;
            itemEl.addEventListener('click', () => toggleChecklistItem(itemId, group));
            container.appendChild(itemEl);
        });
    });
    
    updateChecklistProgress();
}

function toggleGroup(groupName) {
    const container = document.getElementById(`${groupName}-items`);
    const header = document.querySelector(`#${groupName}-items`).previousElementSibling;
    const expandIcon = document.getElementById(`${groupName}-expand`);
    
    if (container.style.display === 'none') {
        container.style.display = 'flex';
        header.classList.add('expanded');
        appState.expandedGroups.push(groupName);
        
        // Start timer if first group opened
        if (!appState.checklistStartTime && !checklistTimerInterval) {
            appState.checklistStartTime = Date.now();
            startChecklistTimer();
        }
    } else {
        container.style.display = 'none';
        header.classList.remove('expanded');
        appState.expandedGroups = appState.expandedGroups.filter(g => g !== groupName);
    }
}

function startChecklistTimer() {
    checklistTimerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - appState.checklistStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        const timerEl = document.getElementById('checklist-timer');
        if (timerEl) {
            timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

function toggleChecklistItem(itemId, group) {
    const itemIndex = appState.checkedItems.indexOf(itemId);
    if (itemIndex > -1) {
        appState.checkedItems.splice(itemIndex, 1);
    } else {
        appState.checkedItems.push(itemId);
    }
    renderSafetyChecklist();
    updateGroupBadge(group);
}

function updateGroupBadge(group) {
    const groupItems = appState.safetyChecklist[group];
    const checkedCount = appState.checkedItems.filter(id => id.startsWith(group)).length;
    const badge = document.getElementById(`${group}-badge`);
    if (badge) {
        badge.textContent = `${checkedCount}/${groupItems.length}`;
    }
}

function updateChecklistProgress() {
    const totalItems = Object.values(appState.safetyChecklist).flat().length;
    const checkedCount = appState.checkedItems.length;
    const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;
    
    // Update circular progress
    const progressRing = document.getElementById('progress-ring');
    const progressText = document.getElementById('progress-text');
    
    if (progressRing && progressText) {
        const circumference = 2 * Math.PI * 26;
        const offset = circumference - (percentage / 100) * circumference;
        progressRing.style.strokeDashoffset = offset;
        progressText.textContent = percentage + '%';
    }
    
    // Update group badges
    ['ppe', 'equipment', 'site'].forEach(group => updateGroupBadge(group));
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const preview = document.getElementById('photo-preview');
        preview.textContent = `📷 Photo uploaded: ${file.name}`;
        preview.classList.add('active');
    }
}

// Drag and Drop
function setupDragDrop() {
    const dropZone = document.getElementById('drag-drop-zone');
    if (!dropZone) return;
    
    dropZone.addEventListener('click', () => {
        document.getElementById('hazard-photo').click();
    });
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const preview = document.getElementById('photo-preview');
            preview.textContent = `📷 Photo uploaded: ${file.name}`;
            preview.classList.add('active');
        }
    });
}

// Signature Pad
function setupSignaturePad() {
    const canvas = document.getElementById('signature-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    
    function getCoordinates(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: (clientX - rect.left) * (canvas.width / rect.width),
            y: (clientY - rect.top) * (canvas.height / rect.height)
        };
    }
    
    function startDrawing(e) {
        isDrawing = true;
        const coords = getCoordinates(e);
        lastX = coords.x;
        lastY = coords.y;
    }
    
    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault();
        
        const coords = getCoordinates(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        lastX = coords.x;
        lastY = coords.y;
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    
    signaturePad = { canvas, ctx };
}

function clearSignature() {
    if (signaturePad) {
        signaturePad.ctx.clearRect(0, 0, signaturePad.canvas.width, signaturePad.canvas.height);
    }
}

function handleSafetySubmit(e) {
    e.preventDefault();
    
    const totalItems = Object.values(appState.safetyChecklist).flat().length;
    
    if (appState.checkedItems.length < totalItems) {
        showToast('Please complete all safety checks', 'error');
        return;
    }
    
    // Calculate completion time
    const completionTime = appState.checklistStartTime ? 
        Math.floor((Date.now() - appState.checklistStartTime) / 60000) : 0;
    
    // Stop timer
    if (checklistTimerInterval) {
        clearInterval(checklistTimerInterval);
        checklistTimerInterval = null;
    }
    
    // Save to database
    const checklist = {
        date: new Date().toISOString().split('T')[0],
        completionTime: completionTime,
        completed: true,
        score: 100,
        submittedAt: new Date().toISOString(),
        submittedBy: 'user_001'
    };
    DB.create('safetyChecklists', checklist);
    
    // Log activity
    const activityRecord = {
        action: 'Completed safety checklist',
        details: `Score: 100%, Time: ${completionTime} min`,
        timestamp: new Date().toISOString(),
        icon: 'check-circle',
        category: 'safety',
        userId: 'user_001'
    };
    database.activityLog.unshift(activityRecord);
    renderRecentActivity();
    
    showToast('✓ Safety checklist submitted successfully!');
    createConfetti();
    
    // Update stats
    updateStats();
    updateProgress();
    
    // Reset form
    setTimeout(() => {
        appState.checkedItems = [];
        appState.checklistStartTime = null;
        appState.expandedGroups = [];
        renderSafetyChecklist();
        const photoPreview = document.getElementById('photo-preview');
        if (photoPreview) photoPreview.classList.remove('active');
        const hazardPhoto = document.getElementById('hazard-photo');
        if (hazardPhoto) hazardPhoto.value = '';
        const timer = document.getElementById('checklist-timer');
        if (timer) timer.textContent = '0:00';
        clearSignature();
        
        // Close all groups
        ['ppe', 'equipment', 'site'].forEach(group => {
            const items = document.getElementById(`${group}-items`);
            if (items) items.style.display = 'none';
        });
    }, 1500);
}

// Kanban Board
function renderKanbanTasks() {
    const statuses = ['Pending', 'In Progress', 'Complete'];
    
    statuses.forEach(status => {
        const container = document.getElementById(`${status.toLowerCase().replace(' ', '')}-tasks`);
        if (!container) return;
        
        container.innerHTML = '';
        const filteredTasks = database.tasks.filter(t => {
            if (appState.currentFilter === 'all') return t.status === status;
            if (appState.currentFilter === 'high') return t.status === status && t.priority === 'High';
            if (appState.currentFilter === 'pending') return t.status === 'Pending';
            return t.status === status;
        });
        
        filteredTasks.forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.className = 'task-card';
            taskEl.draggable = true;
            taskEl.dataset.taskId = task.id;
            
            let timerHtml = '';
            if (task.status === 'In Progress' && appState.taskTimers[task.id]) {
                timerHtml = `<div class="task-timer">⏱️ <span id="timer-${task.id}">0:00</span></div>`;
            }
            
            // Format time from deadline
            let timeDisplay = '08:00 AM';
            if (task.deadline) {
                const deadline = new Date(task.deadline);
                timeDisplay = deadline.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            }
            
            taskEl.innerHTML = `
                <div class="task-header">
                    <div>
                        <div class="task-name">${task.name}</div>
                        <div class="task-time">⏰ ${timeDisplay}</div>
                    </div>
                    <div class="priority-badge ${task.priority.toLowerCase()}">${task.priority}</div>
                </div>
                <div class="task-location">📍 ${task.location}</div>
                ${timerHtml}
            `;
            
            // Drag events
            taskEl.addEventListener('dragstart', handleDragStart);
            taskEl.addEventListener('dragend', handleDragEnd);
            
            // Touch events for swipe
            let touchStartX = 0;
            taskEl.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
            });
            
            taskEl.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchEndX - touchStartX;
                
                if (Math.abs(diff) > 50) {
                    if (diff > 0 && task.status !== 'Pending') {
                        // Swipe right - move back
                        const statuses = ['Pending', 'In Progress', 'Complete'];
                        const currentIndex = statuses.indexOf(task.status);
                        if (currentIndex > 0) {
                            moveTask(task.id, statuses[currentIndex - 1]);
                        }
                    } else if (diff < 0 && task.status !== 'Complete') {
                        // Swipe left - move forward
                        const statuses = ['Pending', 'In Progress', 'Complete'];
                        const currentIndex = statuses.indexOf(task.status);
                        if (currentIndex < statuses.length - 1) {
                            moveTask(task.id, statuses[currentIndex + 1]);
                        }
                    }
                }
            });
            
            container.appendChild(taskEl);
        });
    });
    
    updateColumnCounts();
    setupDropZones();
}

function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.dataset.taskId);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function setupDropZones() {
    const columns = document.querySelectorAll('.task-list');
    
    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });
        
        column.addEventListener('drop', (e) => {
            e.preventDefault();
            const taskId = parseInt(e.dataTransfer.getData('text/html'));
            const newStatus = column.dataset.status;
            moveTask(taskId, newStatus);
        });
    });
}

function moveTask(taskId, newStatus) {
    const task = database.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    const oldStatus = task.status;
    task.status = newStatus;
    task.updatedAt = new Date().toISOString();
    
    // Handle task timer
    if (newStatus === 'In Progress' && !appState.taskTimers[taskId]) {
        startTaskTimer(taskId);
        task.startTime = new Date().toLocaleTimeString('en-US', { hour12: false });
        
        // Log activity
        const activityRecord = {
            action: 'Started task',
            details: task.name,
            timestamp: new Date().toISOString(),
            icon: 'play',
            category: 'task',
            userId: 'user_001'
        };
        database.activityLog.unshift(activityRecord);
        renderRecentActivity();
    } else if (newStatus === 'Complete' && appState.taskTimers[taskId]) {
        stopTaskTimer(taskId);
        task.completedDate = new Date().toISOString().split('T')[0];
        task.completionTime = new Date().toLocaleTimeString('en-US', { hour12: false });
        
        updateStats();
        updateProgress();
        createConfetti();
        showToast('🎉 Task completed!');
        
        // Log activity
        const activityRecord = {
            action: 'Completed task',
            details: `${task.name} - ${task.timeSpent || 0} hours`,
            timestamp: new Date().toISOString(),
            icon: 'check',
            category: 'task',
            userId: 'user_001'
        };
        database.activityLog.unshift(activityRecord);
        renderRecentActivity();
    }
    
    renderKanbanTasks();
}

function startTaskTimer(taskId) {
    const startTime = Date.now();
    appState.taskTimers[taskId] = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        const timerEl = document.getElementById(`timer-${taskId}`);
        if (timerEl) {
            timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

function stopTaskTimer(taskId) {
    if (appState.taskTimers[taskId]) {
        clearInterval(appState.taskTimers[taskId]);
        delete appState.taskTimers[taskId];
    }
}

function updateColumnCounts() {
    ['pending', 'inprogress', 'complete'].forEach(status => {
        const statusName = status === 'inprogress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1);
        const count = database.tasks.filter(t => t.status === statusName).length;
        const countEl = document.getElementById(`${status}-count`);
        if (countEl) countEl.textContent = count;
    });
    
    // Update badge - removed to keep bottom nav cleaner
}

function filterTasks(filter) {
    appState.currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderKanbanTasks();
}

// Materials
function handleMaterialSubmit(e) {
    e.preventDefault();
    
    const materialType = document.getElementById('material-type').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryTime = document.getElementById('delivery-time').value;
    const supplier = document.getElementById('supplier').value;
    
    const material = {
        type: materialType,
        quantity: quantity,
        deliveryTime: new Date().toISOString(),
        supplier: supplier,
        loggedBy: 'Marcus Johnson',
        barcode: `MAT-${Date.now()}`,
        status: 'delivered'
    };
    
    DB.create('materials', material);
    appState.stats.materialsLogged++;
    updateStats();
    
    // Log activity
    const activityRecord = {
        action: 'Logged material delivery',
        details: `${materialType} - ${quantity}`,
        timestamp: new Date().toISOString(),
        icon: 'truck',
        category: 'material',
        userId: 'user_001'
    };
    database.activityLog.unshift(activityRecord);
    renderRecentActivity();
    
    renderMaterials();
    e.target.reset();
    showToast('✓ Material delivery logged successfully!');
}

function renderMaterials() {
    const container = document.getElementById('materials-list');
    
    if (database.materials.length === 0) {
        container.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No materials logged yet today</p>';
        return;
    }
    
    container.innerHTML = '';
    database.materials.slice().reverse().forEach(material => {
        const materialEl = document.createElement('div');
        materialEl.className = 'material-item';
        const deliveryTime = new Date(material.deliveryTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        materialEl.innerHTML = `
            <div class="material-header">
                <div class="material-name">${material.type}</div>
                <div class="material-time">${deliveryTime}</div>
            </div>
            <div class="material-details">
                Quantity: ${material.quantity}<br>
                Supplier: ${material.supplier}<br>
                Barcode: ${material.barcode}
            </div>
        `;
        container.appendChild(materialEl);
    });
}

// Hazard Report Modal
function openHazardModal() {
    document.getElementById('hazard-modal').classList.add('active');
}

function closeHazardModal() {
    document.getElementById('hazard-modal').classList.remove('active');
    document.getElementById('hazard-form').reset();
    document.getElementById('hazard-photo-preview').classList.remove('active');
}

function handleHazardPhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const preview = document.getElementById('hazard-photo-preview');
        preview.textContent = `📷 Photo attached: ${file.name}`;
        preview.classList.add('active');
    }
}

function handleHazardSubmit(e) {
    e.preventDefault();
    
    const hazardType = document.getElementById('hazard-type').value;
    const location = document.getElementById('hazard-location').value;
    const severity = document.getElementById('severity').value;
    const description = document.getElementById('hazard-description').value;
    
    const hazard = {
        type: hazardType,
        location: location,
        severity: severity,
        status: 'Under Review',
        description: description,
        reportedBy: 'Marcus Johnson',
        reportedAt: new Date().toISOString(),
        photos: 0,
        escalated: false,
        autoEscalateAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
    
    DB.create('hazards', hazard);
    appState.stats.activeHazards++;
    updateStats();
    
    // Log activity
    const activityRecord = {
        action: 'Reported hazard',
        details: `${hazardType} - ${location}`,
        timestamp: new Date().toISOString(),
        icon: 'alert-triangle',
        category: 'hazard',
        userId: 'user_001'
    };
    database.activityLog.unshift(activityRecord);
    renderRecentActivity();
    
    // Create notification for hazard reported
    const notification = {
        id: Date.now(),
        type: 'alert',
        title: 'Hazard Reported',
        message: `${hazardType} at ${location} - Status: Under Review`,
        timestamp: new Date().toISOString(),
        read: false,
        action: 'View Details'
    };
    addNotification(notification);
    
    showToast('⚠️ Hazard report submitted successfully!');
    closeHazardModal();
}

// Stats Update
function updateStats() {
    // Update stat values from database
    const todaysTasks = database.tasks.filter(t => t.assignedDate === '2025-10-27');
    const completedTasks = todaysTasks.filter(t => t.status === 'Complete');
    const activeHazards = database.hazards.filter(h => h.status === 'Under Review').length;
    const materialsLogged = database.materials.filter(m => m.createdAt && m.createdAt.startsWith('2025-10-27')).length;
    
    appState.stats.tasksToday = todaysTasks.length;
    appState.stats.tasksCompleted = completedTasks.length;
    appState.stats.activeHazards = activeHazards;
    appState.stats.materialsLogged = materialsLogged;
    
    // Update stat cards
    const statCards = document.querySelectorAll('.stat-card .stat-value');
    if (statCards.length >= 4) {
        statCards[0].setAttribute('data-target', appState.stats.tasksToday);
        statCards[1].setAttribute('data-target', appState.stats.tasksCompleted);
        statCards[2].setAttribute('data-target', appState.stats.activeHazards);
        statCards[3].setAttribute('data-target', appState.stats.materialsLogged);
    }
    
    // Update safety score and completion rate
    const safetyScore = document.getElementById('safety-score');
    const completionRate = document.getElementById('completion-rate');
    if (safetyScore) safetyScore.textContent = database.users[0].stats.safetyScore + '%';
    if (completionRate) {
        const rate = Math.round((database.users[0].stats.tasksOnTime / database.users[0].stats.tasksCompleted) * 100);
        completionRate.textContent = rate + '%';
    }
    
    // Stats are updated via count-up animation
    animateStatCards();
}

// Confetti Animation
function createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const colors = ['#00fff9', '#ff006e', '#39ff14', '#ffff00', '#bf00ff'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// AUTOMATION FEATURES
// ============================================

function initializeAutomation() {
    // Auto-save functionality
    if (database.automationSettings.autoSave) {
        startAutoSave();
    }
    
    // Auto-sync every 5 minutes
    syncInterval = setInterval(() => {
        if (!database.syncStatus.syncInProgress) {
            simulateSync();
        }
    }, 5 * 60 * 1000);
    
    // Check for deadline alerts every minute
    setInterval(checkDeadlineAlerts, 60 * 1000);
    
    // Check for cert expiry warnings
    checkCertExpiryWarnings();
    setInterval(checkCertExpiryWarnings, 24 * 60 * 60 * 1000);
    
    // Auto-recommend training
    if (database.automationSettings.trainingRecommendations) {
        recommendTraining();
    }
}

function startAutoSave() {
    if (autoSaveInterval) clearInterval(autoSaveInterval);
    
    autoSaveInterval = setInterval(() => {
        if (appState.pendingChanges.length > 0) {
            performAutoSave();
        }
    }, database.automationSettings.autoSaveInterval * 1000);
}

function performAutoSave() {
    showAutoSaveIndicator('saving');
    
    // Simulate saving
    setTimeout(() => {
        appState.lastAutoSave = new Date();
        appState.pendingChanges = [];
        showAutoSaveIndicator('saved');
        
        // Log activity
        const activityRecord = {
            id: `act_${Date.now()}`,
            action: 'Auto-saved form data',
            details: `${appState.pendingChanges.length} changes saved`,
            timestamp: new Date().toISOString(),
            icon: '💾',
            category: 'system',
            userId: 'user_001'
        };
        database.activityLog.unshift(activityRecord);
    }, 800);
}

function showAutoSaveIndicator(state) {
    let indicator = document.getElementById('autosave-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'autosave-indicator';
        indicator.className = 'autosave-indicator';
        document.body.appendChild(indicator);
    }
    
    if (state === 'saving') {
        indicator.textContent = '💾 Saving...';
        indicator.classList.add('saving', 'show');
    } else if (state === 'saved') {
        indicator.classList.remove('saving');
        indicator.textContent = '✓ All changes saved';
        setTimeout(() => {
            indicator.classList.remove('show');
        }, 2000);
    }
}

function checkDeadlineAlerts() {
    if (!database.automationSettings.taskDeadlineAlerts) return;
    
    const now = new Date();
    const alertMinutes = database.automationSettings.alertBeforeMinutes;
    
    database.tasks.forEach(task => {
        if (task.status !== 'Pending' || !task.deadline) return;
        
        const deadline = new Date(task.deadline);
        const minutesUntilDeadline = (deadline - now) / (1000 * 60);
        
        if (minutesUntilDeadline > 0 && minutesUntilDeadline <= alertMinutes) {
            const notification = {
                id: Date.now(),
                type: 'warning',
                title: 'Task Deadline Approaching',
                message: `${task.name} is due in ${Math.round(minutesUntilDeadline)} minutes`,
                timestamp: new Date().toISOString(),
                read: false,
                action: 'View Task'
            };
            addNotification(notification);
        }
    });
}

function checkCertExpiryWarnings() {
    if (!database.automationSettings.certExpiryWarnings) return;
    
    const warningDays = database.automationSettings.warningDays;
    
    database.users[0].certifications.forEach(cert => {
        if (cert.daysUntilExpiry <= warningDays && cert.daysUntilExpiry > 0) {
            const notification = {
                id: Date.now(),
                type: 'warning',
                title: 'Certification Expiring Soon',
                message: `Your ${cert.name} expires in ${cert.daysUntilExpiry} days`,
                timestamp: new Date().toISOString(),
                read: false,
                action: 'Renew Now'
            };
            addNotification(notification);
        }
    });
}

function recommendTraining() {
    // Find incomplete recommended modules
    const recommended = database.trainingModules.filter(m => m.recommended && !m.completed);
    
    if (recommended.length > 0) {
        const module = recommended[0];
        const notification = {
            id: Date.now(),
            type: 'info',
            title: 'Training Recommended',
            message: `${module.title} - ${module.recommendedReason}`,
            timestamp: new Date().toISOString(),
            read: false,
            action: 'Start Training'
        };
        addNotification(notification);
    }
}

function addNotification(notification) {
    // Check if similar notification already exists
    const exists = database.notifications.some(n => 
        n.title === notification.title && 
        !n.read && 
        (new Date() - new Date(n.timestamp)) < 3600000 // Within last hour
    );
    
    if (!exists) {
        database.notifications.unshift(notification);
        renderNotifications();
        updateNotificationBadge();
    }
}

function simulateSync() {
    database.syncStatus.syncInProgress = true;
    updateSyncStatus();
    
    // Simulate network delay
    setTimeout(() => {
        database.syncStatus.lastSync = new Date().toISOString();
        database.syncStatus.syncInProgress = false;
        database.syncStatus.pendingItems = 0;
        database.syncStatus.nextAutoSync = new Date(Date.now() + 5 * 60000).toISOString();
        
        updateSyncStatus();
        showToast('✓ All data synced successfully');
        
        // Update last sync time in welcome message
        const lastSync = document.getElementById('last-sync-time');
        if (lastSync) {
            lastSync.textContent = 'Just now';
        }
    }, 1500);
}

function manualSync() {
    const btn = document.getElementById('sync-btn');
    btn.classList.add('syncing');
    simulateSync();
    setTimeout(() => {
        btn.classList.remove('syncing');
    }, 1500);
}

function updateSyncStatus() {
    const syncText = document.getElementById('sync-text');
    const syncTime = document.getElementById('sync-time');
    const pendingBadge = document.getElementById('pending-badge');
    const syncDot = document.getElementById('sync-dot');
    
    if (database.syncStatus.syncInProgress) {
        syncText.textContent = 'Syncing...';
        syncDot.style.background = '#ffff00';
    } else {
        syncText.textContent = 'All synced';
        syncDot.style.background = '#39ff14';
    }
    
    syncTime.textContent = getRelativeTime(database.syncStatus.lastSync);
    
    if (database.syncStatus.pendingItems > 0) {
        pendingBadge.textContent = `${database.syncStatus.pendingItems} pending`;
        pendingBadge.style.display = 'inline';
    } else {
        pendingBadge.style.display = 'none';
    }
}

function getRelativeTime(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.floor((now - time) / 1000); // seconds
    
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
    return `${Math.floor(diff / 86400)} days ago`;
}

// ============================================
// NOTIFICATION CENTER
// ============================================

function renderNotifications() {
    const container = document.getElementById('notification-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (database.notifications.length === 0) {
        container.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No notifications</p>';
        return;
    }
    
    database.notifications.forEach(notif => {
        const notifEl = document.createElement('div');
        notifEl.className = `notif-item ${notif.type} ${notif.read ? '' : 'unread'}`;
        notifEl.innerHTML = `
            <div class="notif-header">
                <div class="notif-title">${notif.title}</div>
                <div class="notif-time">${getRelativeTime(notif.timestamp)}</div>
            </div>
            <div class="notif-message">${notif.message}</div>
            ${notif.action ? `<div class="notif-action">→ ${notif.action}</div>` : ''}
        `;
        notifEl.addEventListener('click', () => markNotificationRead(notif.id));
        container.appendChild(notifEl);
    });
    
    updateNotificationBadge();
}

function toggleNotifications() {
    const panel = document.getElementById('notification-center');
    appState.notificationsPanelOpen = !appState.notificationsPanelOpen;
    panel.classList.toggle('open', appState.notificationsPanelOpen);
}

function closeNotifications() {
    const panel = document.getElementById('notification-center');
    appState.notificationsPanelOpen = false;
    panel.classList.remove('open');
}

function markNotificationRead(id) {
    const notif = database.notifications.find(n => n.id === id);
    if (notif) {
        notif.read = true;
        renderNotifications();
    }
}

function updateNotificationBadge() {
    const badge = document.getElementById('notif-badge');
    const unreadCount = database.notifications.filter(n => !n.read).length;
    
    if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'flex' : 'none';
    }
}

// ============================================
// ANALYTICS & CHARTS
// ============================================

function initializeCharts() {
    // Only initialize if Chart.js is available and we're on analytics view
    if (typeof Chart === 'undefined') return;
    
    setTimeout(() => {
        if (appState.currentView === 'analytics') {
            renderTaskChart();
            renderActivityChart();
        }
    }, 500);
}

function renderTaskChart() {
    const canvas = document.getElementById('task-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Pending'],
            datasets: [{
                data: [23, 1, 1],
                backgroundColor: ['#39ff14', '#ffff00', '#888'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#fff', font: { size: 12 } }
                }
            }
        }
    });
}

function renderActivityChart() {
    const canvas = document.getElementById('activity-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Tasks',
                data: [5, 6, 4, 7, 5, 2, 0],
                backgroundColor: '#00fff9'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: { 
                    beginAtZero: true,
                    ticks: { color: '#888' },
                    grid: { color: 'rgba(255,255,255,0.05)' }
                },
                x: {
                    ticks: { color: '#888' },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function renderLeaderboard() {
    const container = document.getElementById('leaderboard');
    if (!container) return;
    
    container.innerHTML = '';
    database.teamLeaderboard.forEach(leader => {
        const item = document.createElement('div');
        item.className = `leaderboard-item ${leader.highlight ? 'highlight' : ''}`;
        item.innerHTML = `
            <div class="leader-rank">#${leader.rank}</div>
            <div class="leader-info">
                <div class="leader-name">${leader.name}</div>
                <div class="leader-badges">${leader.badges} badges</div>
            </div>
            <div class="leader-points">${leader.points.toLocaleString()}</div>
        `;
        container.appendChild(item);
    });
}

function switchPeriod(period) {
    document.querySelectorAll('.period-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    // In a real app, would reload data for selected period
}

// ============================================
// SETTINGS & DATA MANAGEMENT
// ============================================

function toggleAutomation(setting) {
    const settingMap = {
        autoSave: 'autoSave',
        reminders: 'dailyChecklistReminder',
        deadlineAlerts: 'taskDeadlineAlerts',
        certWarnings: 'certExpiryWarnings'
    };
    
    const dbSetting = settingMap[setting];
    database.automationSettings[dbSetting] = !database.automationSettings[dbSetting];
    
    showToast(`✓ ${setting} ${database.automationSettings[dbSetting] ? 'enabled' : 'disabled'}`);
    
    // Restart auto-save if toggled
    if (setting === 'autoSave') {
        if (database.automationSettings.autoSave) {
            startAutoSave();
        } else if (autoSaveInterval) {
            clearInterval(autoSaveInterval);
        }
    }
}

function exportData() {
    const data = DB.export();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `concrete-worx-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('✓ Data exported successfully!');
}

function viewActivityLog() {
    showToast('Activity log: ' + database.activityLog.length + ' records');
    // In a real app, would open a detailed view
}

function clearCache() {
    if (confirm('Are you sure you want to clear all cached data? This cannot be undone.')) {
        // In a real app, would clear specific cached items
        showToast('✓ Cache cleared successfully');
    }
}

// Make functions globally accessible
window.toggleGroup = toggleGroup;
window.navigateTo = navigateTo;
window.filterTasks = filterTasks;
window.startTraining = startTraining;
window.clearSignature = clearSignature;
window.openHazardModal = openHazardModal;
window.closeHazardModal = closeHazardModal;
window.handlePhotoUpload = handlePhotoUpload;
window.handleHazardPhotoUpload = handleHazardPhotoUpload;
window.toggleNotifications = toggleNotifications;
window.closeNotifications = closeNotifications;
window.manualSync = manualSync;
window.switchPeriod = switchPeriod;
window.toggleAutomation = toggleAutomation;
window.exportData = exportData;
window.viewActivityLog = viewActivityLog;
window.clearCache = clearCache;

// Close modal when clicking outside
document.getElementById('hazard-modal').addEventListener('click', (e) => {
    if (e.target.id === 'hazard-modal') {
        closeHazardModal();
    }
});

// Initialize materials list on load
renderMaterials();

// Add form change listeners for auto-save
if (database.automationSettings.autoSave) {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('input', () => {
            appState.pendingChanges.push({
                form: form.id,
                timestamp: new Date().toISOString()
            });
        });
    });
}