function toggleSections(section) {
    // Get references to the dashboard and profile sections
    const dashboardSection = document.getElementById('dashboardSection');
    const profileSection = document.getElementById('profileSection');

    // Toggle the 'hidden' class based on the clicked button
    if (section === 'dashboard') {
        dashboardSection.style.display = 'block';
        profileSection.style.display = 'none';

    } else if (section === 'profil') {
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'block';
        
    }
}