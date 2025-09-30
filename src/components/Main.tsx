import Filter from "./Filter";

function Main() {
  return(
    <main className="rounded-lg w-12/20 bg-neutral-900 py-4 px-12">
      <div className="flex flex-row gap-2 mb-4">
        <Filter name="Tudo"/>
        <Filter name="Música"/>
        <Filter name="Podcasts"/>
      </div>
      Main
    </main>
  )
}

export default Main;