function toggleSections(section) {
    
    const dashboardSection = document.getElementById('dashboardSection');
    const profileSection = document.getElementById('profileSection');
    const bookSection = document.getElementById('bookSection')
    
    if (section === 'dashboard') {
        dashboardSection.style.display = 'block';
        profileSection.style.display = 'none';
        bookSection.style.display = 'none';
    }
    
    else if (section === 'profile') {
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'block';
        bookSection.style.display = 'none';
    }
    
    else if (section === 'book') {
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        bookSection.style.display = 'block';
    }
}