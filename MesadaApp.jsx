import { useState } from 'react';

const tarefas = [
  { nome: 'Lavar a louça', valor: 2 },
  { nome: 'Louça antes das 17h', valor: 1 },
  { nome: 'Comida ao cachorro', valor: 1 },
  { nome: 'Limpar fezes', valor: 1 },
  { nome: 'Celular <5h', valor: 2 },
  { nome: 'Estudar 2h', valor: 3 },
  { nome: 'Obedeceu', valor: 5 },
  { nome: 'Atividade física', valor: 5 },
];

const descontos = [
  { nome: 'Não lavou louça', valor: -2 },
  { nome: 'Celular >5h', valor: -2 },
  { nome: 'Desobedeceu', valor: -5 },
  { nome: 'Não estudou', valor: -3 },
  { nome: 'Nota <60%', valor: -10 },
  { nome: 'Não deu descarga', valor: -2 },
  { nome: 'Desperdiçou alimentos ou produtos', valor: -3 },
  { nome: 'Não arrumou bagunça', valor: -2 },
];

const bonus = [
  { nome: 'Nota 70-79%', valor: 20 },
  { nome: 'Nota >=80%', valor: 30 },
];

export default function MesadaApp() {
  const [ganhos, setGanhos] = useState(0);
  const [bonusExtra, setBonusExtra] = useState(0);

  const atualizarGanhos = (valor) => setGanhos((prev) => prev + valor);
  const atualizarBonus = (valor) => setBonusExtra((prev) => prev + valor);

  const total = ganhos > 200 ? 200 : ganhos;

  return (
    <div style={{ padding: 16, maxWidth: 600, margin: 'auto' }}>
      <h1>Painel da Mesada</h1>
      <p>Total acumulado: R$ {total.toFixed(2)} / R$ 200</p>
      <p>Bônus escolar (fora do limite): R$ {bonusExtra.toFixed(2)}</p>

      <h2>Tarefas</h2>
      {tarefas.map((t, i) => (
        <button key={i} onClick={() => atualizarGanhos(t.valor)} style={{ margin: 4 }}>
          ✅ {t.nome} (+R$ {t.valor})
        </button>
      ))}

      <h2>Descontos</h2>
      {descontos.map((d, i) => (
        <button key={i} onClick={() => atualizarGanhos(d.valor)} style={{ margin: 4, color: 'red' }}>
          ❌ {d.nome} ({d.valor})
        </button>
      ))}

      <h2>Bônus Escolar</h2>
      {bonus.map((b, i) => (
        <button key={i} onClick={() => atualizarBonus(b.valor)} style={{ margin: 4 }}>
          ⭐ {b.nome} (+R$ {b.valor})
        </button>
      ))}
    </div>
  );
}