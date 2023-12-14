function toggleSections(section) {
    
    const dashboardSection = document.getElementById('dashboardSection');
    const profileSection = document.getElementById('profileSection');
    const bookSection = document.getElementById('bookSection');
    const loginSection = document.getElementById('loginSection');
    const signupSection = document.getElementById('signupSection');
    
    if (section === 'dashboard') {
        dashboardSection.style.display = 'block';
        profileSection.style.display = 'none';
        bookSection.style.display = 'none';
        loginSection.style.display = 'none';
        signupSection.style.display = 'none';
    }

    else if (section === 'profile') {
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'block';
        bookSection.style.display = 'none';
        loginSection.style.display = 'none';
        signupSection.style.display = 'none';
    }
    
    else if (section === 'book') {
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        bookSection.style.display = 'block';
        loginSection.style.display = 'none';
        signupSection.style.display = 'none';
        
    }

    else if (section === 'login') {
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        bookSection.style.display = 'none';
        loginSection.style.display = 'block';
        signupSection.style.display = 'none';
        
    }

    else if (section === 'signup') {
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        bookSection.style.display = 'none';
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
        
    }

    

    

    
}