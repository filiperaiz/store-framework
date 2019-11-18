// packages
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const store = require('../store.config.js');

// Pasta dos templates
const templatesFolder = [
    {
        src: './src/templates',
        dist: ''
    }
];

// Cria o array e faz o post dos templates
function templatesDev(done) {
    templatesFolder.forEach(dir => {
        // glob all files
        let files = glob.sync(`${dir.src}/**/*`, { nodir: true });

        files.forEach(function(template, index) {
            let templateName = path.parse(template).name;
            postTemplate(store.url.dev, template, templateName);
        });
    });
    done();
}

function templatesHomolog(done) {
    templatesFolder.forEach(dir => {
        // glob all files
        let files = glob.sync(`${dir.src}/**/*`, { nodir: true });

        files.forEach(function(template, index) {
            let templateName = path.parse(template).name;
            postTemplate(store.url.homolog, template, templateName);
        });
    });
    done();
}

function postTemplate(pathUrl, template, templateName) {
    fs.readFile(template, (err, data) => {
        if (err) throw err;

        let url = pathUrl + '/IKCADM/Layout/index.aspx/SaveTemplate';

        let view = JSON.stringify({
            template: {
                key: templateName,
                Content: '' + data + ''
            }
        });

        let request = new XMLHttpRequest();

        request.open('POST', url);
        request.setRequestHeader('Content-Type', 'application/json');

        request.onreadystatechange = function() {
            if (request.readyState == 2 && request.status == 0) {
                // console.log(`View: ${templateName} => Processando layout`);
            }

            if (request.readyState == 4 && request.status == 200) {
                // console.log(`View: ${templateName} => Layout salvo com sucesso`);
            }

            if (request.status == 404) {
                console.log(`View: ${templateName} => Erro ao tentar salvar o layout`);
            }
        };

        request.send(view);
    });
}

// exports
module.exports = {
    dev: templatesDev,
    homolog: templatesHomolog
};
