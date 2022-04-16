function loadYamlFile(filename) {
    const fs = require('fs');
    const yaml = require('js-yaml');
    const yamlText = fs.readFileSync(filename, 'utf8')
    return yaml.safeLoad(yamlText);

}

// Entry point
if (require.main === module) {
    const path = require('path');

    try {
        const data = loadYamlFile(path.join(__dirname, 'data.yaml'));
        console.log(data);
        console.log(data.items[1].price);
    } catch (err) {
        console.error(err.message);
    }
}
