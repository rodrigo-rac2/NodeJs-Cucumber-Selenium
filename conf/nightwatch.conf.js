require('babel-core/register')
const chromedriver = require('chromedriver')

module.exports = {
    src_folders: ['steps'], // to place tests, can be organized in subfolders

    page_objects_path: './pages', // for the page objects

    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515
    },

    test_settings: {
        default: {
            screenshots: {
                enabled: true,
                path: 'screenshots'
            },
            //your project's base URL:
            launch_url: 'http://www.google.com/', 
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }


}