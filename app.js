let links = JSON.parse(localStorage.getItem("links")) || [];
let modoEdicion = null; // índice del dato que se está editando

function guardarLocal() {
    localStorage.setItem("links", JSON.stringify(links));
}

function renderTabla() {
    const tbody = document.querySelector("#tablaLinks tbody");
    tbody.innerHTML = "";

    links.forEach((link, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${link.titulo}</td>
                <td><a href="${link.url}" target="_blank">${link.url}</a></td>
                <td class="actions">
                    <button onclick="editarLink(${index})">Editar</button>
                    <button onclick="eliminarLink(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function agregarLink() {
    const titulo = document.getElementById("titulo").value.trim();
    const url = document.getElementById("url").value.trim();

    if (!titulo || !url) {
        alert("Completa ambos campos");
        return;
    }

    if (modoEdicion !== null) {
        // Modo edición
        links[modoEdicion] = { titulo, url };
        modoEdicion = null;
    } else {
        // Agregar nuevo
        links.push({ titulo, url });
    }

    guardarLocal();
    renderTabla();

    document.getElementById("titulo").value = "";
    document.getElementById("url").value = "";
}

function eliminarLink(index) {
    links.splice(index, 1);
    guardarLocal();
    renderTabla();
}

function editarLink(index) {
    document.getElementById("titulo").value = links[index].titulo;
    document.getElementById("url").value = links[index].url;
    modoEdicion = index;
}

renderTabla();
