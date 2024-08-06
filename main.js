function createGraphNode(name) {
    const node = document.createElement("div");
    node.style.left = "50%";
    node.style.top = "50%";
    node.style.position = "absolute";
    node.style.width = "10vh";
    node.style.height = "10vh";
    // node.style.backgroundColor = "red";
    node.style.border = "0.1rem";
    node.style.borderStyle = "solid";
    node.style.borderColor = "black";
    node.style.borderRadius = "50%";
    node.style.display = "flex";
    node.style.justifyContent = "center";
    node.style.alignItems = "center";
    node.textContent = name;

    document.body.appendChild(node);
}

window.onload = () => {
    G = {};
    G["A"] = { next: ["C", "B"] }
    G["B"] = { next: ["E"] }
    G["C"] = { next: ["D"] }
    G["D"] = { next: ["E"] }
    G["E"] = { next: ["F", "G"] }
    G["F"] = { next: [] }
    G["G"] = { next: [] }

    for (const key in G) {
        const n = G[key];
        createGraphNode(key);
    }
    console.log("hello world");
};