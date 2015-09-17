var fs = require('fs');
var watchArray = require('watch-array');
var marked = require('marked');
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});
var docs = [];
var faqs = [];
var linkPrefix = "https://coding.net/help/"

var readDir = function (dir, fn) {
    fs.readdir(dir, function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            var f = dir + file;
            var stat = fs.lstatSync(f);
            if (stat.isFile()) {
                readFile(f, fn);
            } else if (stat.isDirectory()) {
                readDir(f + "/", fn);
            }
        });
    });
}

var readFile = function (file, fn) {
    fs.readFile(file, 'utf-8', function (err, html) {
        if (err) {
            console.log(err);
        }
        fn({
            path: file.replace(/\.markdown$/g, ".html"),
            content: html
        });
    });
}


function main() {
    var doc = "doc/";
    readDir(doc, function (data) {
        docs.push({
            type: "0",
            title: /^---\s+layout:\s+(.*)\s+title:\s+(.*)\s+---/g.exec(data.content)[2],
            link: linkPrefix + data.path,
            content: data.content,
            markdown: marked(data.content, 'Maruku')
        })
    });
    var faq = "faq/";
    readDir(faq, function (data) {
        docs.push({
            type: "1",
            title: /^---\s+layout:\s+(.*)\s+title:\s+(.*)\s+---/g.exec(data.content)[2],
            link: linkPrefix + data.path,
            content: data.content,
            markdown: marked(data.content, 'Maruku')
        })
    });
    watchArray(docs, function (update) {
        fs.writeFile('_data/docs.json', JSON.stringify(docs), function (err) {
            if (err) throw err;
            console.log('docs.json saved!');
        });
    });
}


main();
