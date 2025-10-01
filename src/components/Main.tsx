import Filter from "./Filter";
import Highlights from "./Highlights";
import RecentItem from "./RecentItem";

function Main() {
  return(
    <main className="rounded-lg w-12/20 bg-neutral-900 py-2 px-7">
      <div className="flex flex-row gap-2 p-2">
        <Filter name="Tudo"/>
        <Filter name="Música"/>
        <Filter name="Podcasts"/>
      </div>
      <div className="grid grid-cols-4 gap-2 p-3 mb-1">
        <RecentItem name="</3³" cape="/broken_hearts_3.jpg" />
        <RecentItem name="In My Mind" cape="/in_my_mind.jpg" />
        <RecentItem name="ATÉ QUE NÃO HAJA LUZ (+ONYX)" cape="/aqnhl.jpg" />
        <RecentItem name="Músicas Curtidas" cape="/musicas_curtidas.jpg" />
        <RecentItem name="O Que O Igor Guilherme Anda Pensando?" cape="/oqoigap.jpg" />
        <RecentItem name="Breach" cape="/breach.jpg" />
        <RecentItem name="Die Lit" cape="/die_lit.jpg" />
        <RecentItem name="Caro Vapor/ Vida e Veneno de Don L" cape="/caro_vapor.jpg" />
      </div>
      <div className="flex flex-col">
        <Highlights text="Novos lançamentos para você" subtext="Músicas novinhas em folha dos artistas que você adora." />
        <Highlights text="Suas músicas estão com saudade" />
      </div>
    </main>
  )
}

export default Main;