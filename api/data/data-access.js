const fs = require('fs');

exports.getPresentationsData = () => {
    let dir = fs.readdirSync(__dirname + "/files/");
    return dir.map((f, i) => {
        return {
            id: i + 1,
            name: f.replace('.md', ''),
            filename: f
        }
    });
}

exports.getPresentationContent = (filename) => {
    let fileContent = fs.readFileSync(__dirname + "/files/" + filename + ".md", { encoding: 'utf8' });
    return fileContent;
}

exports.savePresentationContent = (filename, fileContent) => {
    fs.writeFileSync(__dirname + "/files/" + filename + ".md", fileContent, { encoding: 'utf8' });
    return true;
}