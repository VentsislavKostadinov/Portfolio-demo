let langTranslate = {
    'en': {
        'home-tr': 'Home',
        'about-tr': 'About us',
        'projects-tr': 'Projects',
        'particles-tr': 'Why us',
        'deliver-tr': 'We deliver your stunning website',
        'theme-tr': 'Choose your theme',
        'business-tr': 'Let your business be successful',
        'what-we-do-tr': 'What we do',
        'develop-tr': 'DEVELOPEMNT',
        'qa-tr': 'TESTING',
        'maintain-tr': 'MAINTAINING'

    },
    'bg': {
        'home-tr': 'Начало',
        'about-tr': 'За нас',
        'projects-tr': 'Проекти',
        'particles-tr': 'Защо нас',
        'deliver-tr': 'Ние доставяме вашия зашеметяващ уебсайт',
        'theme-tr': 'Изберете тема',
        'business-tr': 'Нека вашият бизнес бъде успешен',
        'what-we-do-tr': 'С какво се занимаваме',
        'develop-tr': 'РАЗРАБОТВАНЕ',
        'qa-tr': 'ТЕСТВАНЕ',
        'maintain-tr': 'ПОДДРЪЖКА'
    }
};

// Process translation

$(function() {
    $('.translate').click(function(e) {
        e.preventDefault();
        let lang = $(this).attr('id');
        $('.lang').each(function() {
            $(this).text(langTranslate[lang][$(this).attr('key')]);
        });
    });
});