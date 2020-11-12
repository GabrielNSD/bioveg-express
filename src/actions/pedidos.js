export const postarPedido = async (nome, whatsapp, tipo, cesta) => {
  //return async () => {
    const date = new Date();
    const response = await fetch(
      "https://bioveg-5641b.firebaseio.com/pedidos.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nome,
          whatsapp,
          tipo,
          cesta,
          data: date.toISOString(),
        }),
      }
    );

    if(!response.ok) {
        throw new Error("algo errado no post")
    }

    const resData = await response.json()
    console.log(resData)
  //};
};
