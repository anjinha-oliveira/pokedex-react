import './App.css';

function App() {
  return (
    <section class="content">
        <h1>Pokedex</h1>
        <ol id="pokemonList" class="pokemons">
        <li class="pokemon grass">
                <span class="number">#1</span>
                <span class="name">bulbasaur</span>
                    <div class="detail">
                        <ol class="types">
                            <li class="type grass">grass</li><li class="type poison">poison</li>
                        </ol>        
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbasaur"/>
                    </div>
            </li>
            <li class="pokemon grass">
                <span class="number">#2</span>
                <span class="name">ivysaur</span>
                    <div class="detail">
                        <ol class="types">
                            <li class="type grass">grass</li><li class="type poison">poison</li>
                        </ol>        
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt="ivysaur"/>
                    </div>
            </li>
        </ol>
        <div class="pagination">
            <button id="loadMoreButton" type="button">
                load more
            </button>
        </div>
    </section>
  );
}
export default App;
