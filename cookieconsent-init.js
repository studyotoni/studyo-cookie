// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'fi',
    autoclear_cookies: true,                   // default: false
    theme_css: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.7.2/dist/cookieconsent.css',  // 🚨 replace with a valid path
    page_scripts: true,                        // default: false

    // delay: 0,                               // default: 0
    auto_language: 'document',                   // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'We use cookies!',
                description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                    }
                ]
            }
        },
        'fi': {
            consent_modal: {
                title: 'Me käytämme evästeitä!',
                description: 'Hei, tämä verkkosivusto käyttää välttämättömiä evästeitä varmistaakseen sen asianmukaisen toiminnan ja seurantaevästeitä ymmärtääkseen, kuinka olet vuorovaikutuksessa sen kanssa. Jälkimmäinen asetetaan vasta suostumuksen jälkeen. <button type="button" data-cc="c-settings" class="cc-link">Valitse evästeet</button>',
                primary_btn: {
                    text: 'Hyväksy kaikki',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Hylkää kaikki',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Evästeasetukset',
                save_settings_btn: 'Tallenna asetukset',
                accept_all_btn: 'Hyväksy kaikki',
                reject_all_btn: 'Hylkää kaikki',
                close_btn_label: 'Sulje',
                cookie_table_headers: [
                    {col1: 'Nimi'},
                    {col2: 'Domain'},
                    {col3: 'Vanheneminen'},
                    {col4: 'Kuvaus'}
                ],
                blocks: [
                    {
                        title: 'Evästekäytännöt 📢',
                        description: 'Käytämme varmistaakseni verkkosivuston perustoiminnot ja parantaakseni verkkokokemustasi. Voit valita jokaisesta luokasta osallistuaksesi/poistaaksesi milloin haluat.'
                    }, {
                        title: 'Välttämättömät evästeet',
                        description: 'Nämä evästeet ovat välttämättömiä verkkosivustoni asianmukaisen toiminnan kannalta. Ilman näitä evästeitä verkkosivusto ei toimi kunnolla.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Suorituskyky- ja Analytics-evästeet',
                        description: 'Näiden evästeiden avulla verkkosivusto muistaa aiemmin tekemäsi valinnat.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Mainos- ja kohdistusevästeet',
                        description: 'Nämä evästeet keräävät tietoja siitä, kuinka käytät verkkosivustoa, millä sivuilla vierailit ja mitä linkkejä napsautit. Kaikki tiedot ovat anonymisoituja, eikä niitä voida käyttää tunnistamiseen.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Lisää tietoa evästeistä',
                        description: 'Lisätietoa evästeistä saat ottamalla meihin yhteyttä.',
                    }
                ]
            }
        }
    }
});