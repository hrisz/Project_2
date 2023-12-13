function toggleSections(section) {
    
    const dashboardSection = document.getElementById('dashboardSection');
    const profileSection = document.getElementById('profilSection');
    
    if (section === 'dashboard') {
        dashboardSection.style.display = 'block';
        profileSection.style.display = 'none';


    } else if (section === 'profil') {
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'block';
        
    }
}