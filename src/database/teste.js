const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {

  // inserir dados na tabela
  // await saveOrphanage(db, {

  //   lat: "-23.3281311",
  //   lng: "-51.1693459",
  //   name: "Casa dos meninos",
  //   about:
  //     "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //   whatsapp: "34986793",
  //   images: [
  //     "https://images.unsplash.com/photo-1574647258357-e19ec1bcc09c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //     "https://images.unsplash.com/photo-1556258707-995cd393dd8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //   ].toString(),
  //   instructions:
  //     "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visitas Das 18h até 8h",
  //   open_on_weekends: "0",
  // });
  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");

  console.log(selectedOrphanages);

  // consultar somante um orfanato, pelo id
  // const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  // console.log(orphanages);

  //deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"));
});
