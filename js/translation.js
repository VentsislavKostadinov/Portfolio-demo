
let langTranslate = {
    'en': {
        'home-tr': 'Home',
        'about-tr': 'About us',
        'projects-tr': 'Projects',
        'particles-tr': 'Why us',
        'deliver-tr': 'We deliver your stunning website',
        'design-tr': 'Choose the elegant design',
        'business-tr': 'Let your website be successful',
        'what-we-do-tr': 'What we do',
        'develop-tr': 'DEVELOPMENT',
        'qa-tr': 'TESTING',
        'maintain-tr': 'MAINTAINING',
        'devArticle-tr': 'We, from Ultra Site are a small creative team of people who work for you and develop professional websites. We work with the latest technologies for developing representative, business or corporate websites.\n' +
            'For example, we use the most popular User Interface library (UI) for 2019 and 2020 and developed by Facebook - React.\n' +
            'We also follow the latest W3C standards and global trends, as well as update the our written code after releasing the new features of the technologies we use.',

        'testArticle-tr': 'Of course, after developing our products, we necessarily test them for bugs, errors and proper functioning. We perform two types of testing - manual and automated.\n' +
        'The main goal is the smooth functionality of the website.',
        'maintenance-tr': 'The cooperation of our team guarantees quality, new updates and troubleshooting',
        'our-vision-title-tr': 'OUR VISION',
        'our-vision-tr': ' Our vision is to provide quality services that exceed the expectations of our clients.\n' + 
        'The company was founded with one clear vision in mind: we want to be your reliable partner, who is able to ensure your success.',
        'demo-projects-tr': 'Projects',
        'we-deliver-solutions-tr' : 'We Provide Solutions',
        'elegant-website-tr' : 'for your elegant website'

    },
    'bg': {
        'home-tr': 'Начало',
        'about-tr': 'За нас',
        'projects-tr': 'Проекти',
        'particles-tr': 'Защо нас',
        'deliver-tr': 'Ние доставяме вашия зашеметяващ уебсайт',
        'design-tr': 'Изберете елегантния дизайн',
        'business-tr': 'Нека вашият уебсайт бъде успешен',
        'what-we-do-tr': 'С какво се занимаваме',
        'develop-tr': 'РАЗРАБОТВАНЕ',
        'qa-tr': 'ТЕСТВАНЕ',
        'maintain-tr': 'ПОДДРЪЖКА',
        'devArticle-tr': 'Ние, от Ultra Site сме малък креативен екип от хора, които работим за вас и разработваме професионални уебсайти. Работим с най-новите технологии за разработване на представителни, бизнес или корпоративни уебсайтове.\n' +
            'Например, използваме най- популярната библиотека за създаване на потребителски интерфейс за 2019 и 2020 година и разработена от Facebook - React.\n' +
            'Също така следваме последните W3C стандарти и световните тенденции, както и актуализираме написания от нас код при пускането на нови специфики от технологиите, които използваме.',

        'testArticle-tr': 'Разбира се, след разработването на нашите продукти, ние задължително го тестване за бъгове, грешки и правилно функнциониране. Извършваме два типа тестване - ръчно и автоматизирано.\n' +
        'Основната цел е безпроблемното функциониране на уебсайт.',
        'maintenance-tr': 'Сътрудничеството на нашия екип гарантира за качеството, нови обновления и отстраняване на проблеми',
        'our-vision-title-tr': 'НАШАТА ВИЗИЯ',
        'our-vision-tr': 'Нашата визия е да предоставяме качествени услуги, които надхвърлят очакванията на нашите клиенти.\n' + 
        'Компанията е основана с една ясна визия в ума: искаме да бъдем вашият надежден партньор, който е в състояние да гарантира вашия успех.',
        'demo-projects-tr': 'Проекти',
        'we-deliver-solutions-tr' : 'Ние предоставяме решения',
        'elegant-website-tr' : 'за вашия елегантен уебсайт'
    }
};

// Process translation

$(function () {
    $('.translate').click(function (e) {
        e.preventDefault();
        let lang = $(this).attr('id');
        $('.lang').each(function () {
            $(this).text(langTranslate[lang][$(this).attr('key')]);
        });
    });
});

