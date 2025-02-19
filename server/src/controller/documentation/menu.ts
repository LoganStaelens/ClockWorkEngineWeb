import filesystem from "fs"

class DirectoryNode {
    path : string | undefined;
    directories : Array<DirectoryNode> = [];
    files : Array<string> = [];

    constructor(path : string) {
        this.path = path;
    }
}

const processDirectory = (path : string) : DirectoryNode => {
    const entries : Array<string> = filesystem.readdirSync(path);

    let node = new DirectoryNode(path);
    for (const entry of entries) {
        const entryPath = `${path}/${entry}`;
        if (filesystem.statSync(entryPath).isDirectory()) {
            node.directories.push(processDirectory(entryPath));
        }
        else {
            node.files.push(entry);
        }
    }

    return node;
}

export const getMenuTree = (path : string) : DirectoryNode => {
    return processDirectory(path);
}
