let langTranslate = {
    'en': {
        'home': 'Home',
        'about': 'About us',
        'projects': 'Projects',
        'particles': 'Why us',
        'deliver': 'We deliver your stunning website',
        'theme': 'Choose your theme',
        'business': 'Let your business be successful'

    },
    'bg': {
        'home': 'Начало',
        'about': 'За нас',
        'projects': 'Проекти',
        'particles': 'Защо нас',
        'deliver': 'Ние доставяме вашия зашеметяващ уебсайт',
        'theme': 'Изберете тема',
        'business': 'Нека вашият бизнес бъде успешен'

    }
};

// Process translation

$(function() {
    $('.translate').click(function(e) {

        e.preventDefault();

        let lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            $(this).text(langTranslate[lang][$(this).attr('key')]);
        });
    });
});