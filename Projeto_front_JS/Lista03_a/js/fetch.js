async function reqFetch(){
    const url = "https://raw.githubusercontent.com/lcostaju/lcostaju.github.io/main/Projeto_front_JS/Lista03_a/dados.json";

    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(`Nome: ${json.nome}, Idade: ${json.idade}`);
      } catch (error) {
        console.error(error.message);
      }
}

export default reqFetch;