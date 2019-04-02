const slugger = (title, salter = true) => {
    let salt = '';
    if (salter) {
        salt = `-${Math.random().toString(36).substring(2)}`;
    }
    title = title.replace(/[^\w\s]/g, '').replace(/\s/g, '-').toLowerCase();
    return `${title}${salt}`;
}

const stringCleaner = {
    rmHtml(string) {
        return string.replace(/<(?:.|\n)*?>/gm, '').replace(/&\w+;/gm, ' ');
    }
}

module.exports = {
    slugger,
    stringCleaner
}