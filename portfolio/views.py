from django.shortcuts import render

def home(request):
    context = {
        'services': [
            {'title': 'Web Development', 'description': 'Creating responsive websites with React.js, HTML, CSS, and Tailwind CSS.', 'icon': 'fa-code'},
            {'title': 'Backend Development', 'description': 'Building robust backends with Nest.js, Node.js, and PostgreSQL.', 'icon': 'fa-server'},
            {'title': 'UI/UX Design', 'description': 'Designing intuitive interfaces to enhance user engagement.', 'icon': 'fa-paint-brush'},
            {'title': 'API Integration', 'description': 'Integrating APIs with RESTful architectures.', 'icon': 'fa-plug'},
        ],
        'portfolio': [
            {'title': 'Edifel Designs Website', 'description': 'A responsive site built with React.js and Tailwind CSS.', 'link': 'https://www.edifeldesignsllc.com/', 'image': 'edifeldesigns.jpg'},
            {'title': 'Calendar App', 'description': 'An interactive app with event markers and animations.', 'link': 'https://github.com/Johnbullkitchner1/calendar-app', 'image': 'calendarapp.jpg'},
        ],
    }
    return render(request, 'portfolio/home.html', context)