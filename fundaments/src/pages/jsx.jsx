export default function Jsx() {
  const titulo = <h1>JSX é um Conceito Central</h1>;

  function subtitulo() {
    return <h2>{"Muito legal".toUpperCase()}</h2>;
  }

  return (
    <div>
      {titulo}
      {subtitulo()}
      <p>{JSON.stringify({ nome: "Guilherme", idade: 28 })}</p>
    </div>
  );
}
