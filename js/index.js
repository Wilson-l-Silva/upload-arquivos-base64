

const input = document.querySelector('#selectAvatar');
const visualizaArquivo = document.querySelector('#avatar');
const textArea = document.querySelector('#textArea');
const arrayBase64 = {
    stringsBase64: []
};

const converteArquivoParaBase64 = (arquivo) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(arquivo);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const uploadArquivo = async (evento) => {
    const arquivos = evento.target.files;

    for (let indice = 0; indice < arquivos.length; indice++) {
        let arquivo = arquivos.item(indice)
        const base64 = await converteArquivoParaBase64(arquivo);
        // base64.replace(/data:image\/[a-z]{3};base64/, "");
        // arrayBase64.stringsBase64.push(base64);
        visualizaArquivo.src = base64;
        textArea.innerText = base64;
    };



};

input.addEventListener("change", (e) => {
    debugger;
    uploadArquivo(e);
});